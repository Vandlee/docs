/* eslint-disable no-restricted-globals */
/* eslint-disable material-ui/no-hardcoded-labels */
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@u_ui/u-ui/styles';
// Components
import Collapse from '@u_ui/u-ui/Collapse';
import Button from '@u_ui/u-ui/Button';
import Divider from '@u_ui/u-ui/Divider';
import Typography from '@u_ui/u-ui/Typography';
import Tooltip from '@u_ui/u-ui/Tooltip';
import Stack from '@u_ui/u-ui/Stack';
import IconButton from '@u_ui/u-ui/IconButton';
// Icons
import { ThumbUpAltRounded } from '@mui/icons-material';
import { ThumbDownAltRounded } from '@mui/icons-material';
import { ChevronRightRounded } from '@mui/icons-material';
import { ChevronLeftRounded } from '@mui/icons-material';
import { PanToolRounded } from '@mui/icons-material';
//
import { Link } from '@vandlee/docs/Link';
import PageContext from 'docs/src/modules/components/PageContext';
import { useUserLanguage, useTranslate } from '@vandlee/docs/i18n';
import { getCookie, pageToTitleI18n } from 'docs/src/modules/utils/helpers';
import { fontSize } from '@u_ui/system';
import { Alert, Box, Snackbar } from '@u_ui/u-ui';

const FooterLink = styled(Link)(({ theme }) => {
    return {
        display: 'flex',
    }
});

/**
 * @typedef {import('docs/src/pages').ui-Page} MuiPage
 * @typedef {import('docs/src/pages').OrderedVandleePage} OrderedVandleePage
 */

/**
 * This function is flattening the pages tree and extracts all the leaves that are internal pages.
 * To extract the leaves, it skips all the nodes that have at least one child.
 * @param {VandleePage[]} pages
 * @param {VandleePage[]} [current]
 * @returns {OrderedVandleePage[]}
 */

/**
 * @returns { { prevPage: OrderedVandleePage | null; nextPage: OrderedVandleePage | null } }
 */
function usePageNeighbours() {
    const { activePage, pages } = React.useContext(PageContext);
    const pageList = orderedPages(pages);
    const currentPageNum = pageList.indexOf(activePage);

    if (currentPageNum === -1) {
        return { prevPage: null, nextPage: null };
    }

    const prevPage = pageList[currentPageNum - 1] ?? null;
    const nextPage = pageList[currentPageNum + 1] ?? null;

    return { prevPage, nextPage };
}

const EMPTY_SECTION = { hash: '', text: '' };

function orderedPages(pages, current = []) {
    return pages
        .reduce((items, item) => {
        if (item.children && item.children.length > 0) {
            items = orderedPages(item.children, items);
        } else {
            items.push(item);
        }
        return items;
        }, current)
        .filter((page) => {
        return (
            page.inSideNav !== false &&
            // ignore external pages
            page.pathname.startsWith('/')
        );
    });
}

async function postFeedbackOnDiscord(data) {
    const { rating, comment, commentedSection, productId, language, page } = data;

    const ratingIcon = rating === 1 ? '👍' : '👎';

    let sentData = {
        "embeds": [{
            "title": `Feedback para ${productId}`,
            "description": `${comment}`,
            "fields": [
                {
                    "name": "rating",
                    "value": ratingIcon,
                    "inline": false
                },
                {
                    "name": "Lenguaje",
                    "value": language,
                    "inline": false
                },
                {
                    "name": "Page",
                    "value": page,
                    "inline": false
                }
            ]
        }]
    };

    if (!comment || comment.length < 10) {
        sentData = {
            "embeds": [{
                "title": `Feedback para ${productId}`,
                "description": ratingIcon,
                "fields": [
                    {
                        "name": "Lenguaje",
                        "value": language,
                        "inline": false
                    },
                    {
                        "name": "Page",
                        "value": page,
                        "inline": false
                    }
                ]
            }]
        };
    }

    try {
        const rest = await fetch('https://discord.com/api/webhooks/1353593686067511358/iQbNFXK3XI8xTPT_43A1YXNOk72Q0EOmqcYUgZ0ZZOiKm3bw9HQbN0HePWjxX0X1Ern7', {
            method: 'POST',
            body: JSON.stringify(sentData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!rest.ok) {
            throw new Error(`HTTP ${rest.status}: ${rest.statusText}`);
        }
        return 'sent';
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function submitFeedback(page, rating, comment, language, commentedSection, productId) {
    const data = {
        id: getCookie('feedbackId'),
        page,
        rating,
        comment,
        version: process.env.LIB_VERSION,
        language,
    };

    const resultDiscord = await postFeedbackOnDiscord({ ...data, productId, commentedSection });
    
    return resultDiscord;
}

function getCurrentRating(pathname) {
    let userFeedback;
    if (typeof window !== 'undefined') {
      try {
        userFeedback = getCookie('feedback');
        userFeedback = userFeedback && JSON.parse(userFeedback);
      } catch {
        // For unknown reason the `userFeedback` can be uncomplet, leading the JSON.parse to crash the entire docs
        return undefined;
      }
    }
    return userFeedback && userFeedback[pathname] && userFeedback[pathname].rating;
}

export default function AppLayoutDocsFooter(props) {
    const { tableOfContents = [], location } = props;

    const theme = useTheme();
    const t = useTranslate();
    const userLanguage = useUserLanguage();
    const { activePage, productId } = React.useContext(PageContext);
    const [rating, setRating] = React.useState();
    const [comment, setComment] = React.useState("");
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState(false);
    const inputRef = React.useRef();
    const [commentOpen, setCommentOpen] = React.useState(false);
    const [commentedSection, setCommentedSection] = React.useState(EMPTY_SECTION);

    const { nextPage, prevPage } = usePageNeighbours();
    
    const sectionOptions = React.useMemo(
        () =>
            tableOfContents.flatMap((section) => [
                {
                    hash: section.hash,
                    text: section.text,
                },
                ...section.children.map(({ hash, text }) => ({ hash, text })),
            ]),
            [tableOfContents],
    );
        
    const setCurrentRatingFromCookie = React.useCallback(() => {
        if (activePage !== null) {
            setRating(getCurrentRating(activePage.pathname));
        }
    }, [activePage]);
        
    React.useEffect(() => {
        setCurrentRatingFromCookie();
    }, [setCurrentRatingFromCookie]);
    
    async function processFeedback() {
        if (activePage === null) {
            setSnackbarMessage(t('feedbackFailed'));
        }
        
        const result = await submitFeedback(
            activePage.pathname,
            rating,
            comment,
            userLanguage,
            commentedSection,
            productId,
        );
        if (result) {
            setSnackbarMessage(t('feedbackSubmitted'));
        } else {
            setCurrentRatingFromCookie();
            setSnackbarMessage(t('feedbackFailed'));
        }
        setSnackbarOpen(true);
    }
    
    const handleClickThumb = (vote) => async () => {
        if (vote !== rating) {
            setRating(vote);
            setCommentOpen(true);
        }
        
        // Manually move focus if comment is already open.
        // If the comment is closed, onEntered will call focus itself;
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    
    const handleChangeTextfield = (event) => {
        setComment(event.target.value);
    };
    
    const handleSubmitComment = (event) => {
        event.preventDefault();
        setCommentOpen(false);
        processFeedback();
    };
    
    const handleKeyDownForm = (event) => {
        const modifierKey = (event.metaKey || event.ctrlKey) && !event.shiftKey;
        
        if (event.key === 'Enter' && modifierKey) {
            const submitButton = event.currentTarget.querySelector('[type="submit"]');
            submitButton.click();
        }
    };
    
    const handleCancelComment = () => {
        setCommentOpen(false);
        setCurrentRatingFromCookie();
        setCommentedSection(EMPTY_SECTION);
    };
    
    const handleEntered = () => {
        inputRef.current.focus();
    };
    
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    
    React.useEffect(() => {
        const eventListener = (event) => {
          const feedbackHash = event.target.getAttribute('data-feedback-hash');
          if (feedbackHash) {
              const section =
              [...sectionOptions, ...SPEACIAL_FEEDBACK_HASH].find(
                (item) => item.hash === feedbackHash,
            ) || EMPTY_SECTION;
            setCommentOpen(true);
            setCommentedSection(section);
    
            // Manually move focus if comment is already open.
            // If the comment is closed, onEntered will call focus itself;
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };
    document.addEventListener('click', eventListener);
    return () => {
        document.removeEventListener('click', eventListener);
    };
    }, [sectionOptions]);

    const hidePagePagination = activePage === null || activePage.ordered === false;

    return (
        <React.Fragment>
            <Stack component='footer' direction='column' sx={{ my: 4 }}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 3, sm: 1 }}
                    sx={{ alignItems: 'center', justifyContent: 'space-between' }}
                    >
                    <Stack direction='row' spacing={0.5} useFlexGap sx={{ alignItems: 'center' }}>
                        <Typography id="feedback-message" variant="body2" sx={{ color: 'text.secondary' }}>
                            {t('feedbackMessage')}
                        </Typography>
                        <Tooltip title={t('feedbackYes')}>
                            <IconButton color={rating === 1 ? 'contrast' : 'default'} onClick={handleClickThumb(1)} aria-pressed={rating === 1}>
                                <ThumbUpAltRounded 
                                    sx={{ fontSize: 15 }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={t('feedbackNo')}>
                            <IconButton color={rating === 0 ? 'contrast' : 'default'} onClick={handleClickThumb(0)} aria-pressed={rating === 0}>
                                <ThumbDownAltRounded 
                                    sx={{ fontSize: 15 }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>
                {/* Wrapper div to fix Collapse close animation */}
                <div>
                    <Collapse
                        in={commentOpen}
                        unmountOnExit
                        onEntered={handleEntered}
                        timeout={{ enter: 0, exit: theme.transitions.duration.standard }}
                    >
                        <Divider sx={{ my: 2, borderStyle: 'dashed' }} />
                        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                        <form
                            aria-labelledby="feedback-message"
                            onReset={handleCancelComment}
                            onSubmit={handleSubmitComment}
                            onKeyDown={handleKeyDownForm}
                        >
                            <div>
                                {commentedSection.text ? (
                                    <Typography 
                                        variant="body2"
                                        id="feedback-description"
                                        dangerouslySetInnerHTML={{
                                        __html: t('feedbackSectionSpecific').replace(
                                            '{{sectionName}}',
                                            `"${commentedSection.text}"`,
                                        ),
                                        }}
                                        sx={{ color: 'text.secondary' }}
                                    />
                                ) : (
                                    <Typography id="feedback-description" sx={{ color: 'text.secondary' }}>
                                      {rating === 1 ? t('feedbackMessageUp') : t('feedbackMessageDown')}
                                    </Typography>
                                )}
                                <textarea 
                                    ref={inputRef}
                                    style={{ 
                                        width: '100%',
                                        resize: 'none',
                                        borderRadius: 12,
                                        padding: '8px 12px',
                                        marginTop: 8
                                    }}
                                    value={comment}
                                    onChange={handleChangeTextfield}
                                    aria-label={t('feedbackCommentLabel')}
                                    aria-describedby={'feedback-description'}
                                />
                                {rating !== 1 && typeof window !== 'undefined' && (
                                <Alert
                                    severity="warning"
                                    color="warning"
                                    icon={<PanToolRounded fontSize="small" />}
                                    sx={{ my: 1.5 }}
                                >
                                    <Typography id="feedback-description">
                                    {t('feedbackMessageToGitHub.usecases')}{' '}
                                    <Link
                                        href={`${process.env.SOURCE_CODE_REPO}/issues/new?template=${process.env.GITHUB_TEMPLATE_DOCS_FEEDBACK}&page-url=${window.location.href}`}
                                        target="_blank"
                                        underline="always"
                                        sx={{ fontWeight: 'semiBold' }}
                                    >
                                        {t('feedbackMessageToGitHub.callToAction.link')}
                                    </Link>{' '}
                                    {t('feedbackMessageToGitHub.reasonWhy')}
                                    </Typography>
                                </Alert>
                                )}
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1}}>
                                    <Button type="reset" size="small">
                                        {t('cancel')}
                                    </Button>
                                    <Button type="submit" variant="contained" size="small">
                                        {t('submit')}
                                    </Button>
                                </Box>
                            </div>
                        </form>
                    </Collapse>
                </div>
                <Divider sx={{ my: 2 }} />
                {hidePagePagination ? null : (
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                        {prevPage !== null ? (
                        <Button
                            size="small"
                            variant="text"
                            component={Link}
                            noLinkStyle
                            prefetch={false}
                            href={prevPage.pathname}
                            {...prevPage.linkProps}
                            startIcon={<ChevronLeftRounded />}
                        >
                            {pageToTitleI18n(prevPage, t)}
                        </Button>
                        ) : (
                        <div />
                        )}
                        {nextPage !== null ? (
                        <Button
                            size="small"
                            component={Link}
                            noLinkStyle
                            prefetch={false}
                            href={nextPage.pathname}
                            {...nextPage.linkProps}
                            endIcon={<ChevronRightRounded />}
                        >
                            {pageToTitleI18n(nextPage, t)}
                        </Button>
                        ) : null}
                    </Stack>
                )}
            </Stack>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            />
        </React.Fragment>
    )
}

AppLayoutDocsFooter.propTypes = {
    location: PropTypes.string.isRequired,
    tableOfContents: PropTypes.array,
};  