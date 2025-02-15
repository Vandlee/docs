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
//
import { Link } from '@u-shii/docs/Link';
import PageContext from 'docs/src/modules/components/PageContext';
import { useUserLanguage, useTranslate } from '@u-shii/docs/i18n';
import { getCookie, pageToTitleI18n } from 'docs/src/modules/utils/helpers';
import { ThumbUpAltRounded } from '@mui/icons-material';
import { fontSize } from '@u-shii/system';
import { ThumbDownAltRounded } from '@mui/icons-material';
import { ChevronRightRounded } from '@mui/icons-material';
import { ChevronLeftRounded } from '@mui/icons-material';

const FooterLink = styled(Link)(({ theme }) => {

});

/**
 * @typedef {import('docs/src/pages').UshiiPage} MuiPage
 * @typedef {import('docs/src/pages').OrderedUshiiPage} OrderedUshiiPage
 */

/**
 * This function is flattening the pages tree and extracts all the leaves that are internal pages.
 * To extract the leaves, it skips all the nodes that have at least one child.
 * @param {UshiiPage[]} pages
 * @param {UshiiPage[]} [current]
 * @returns {OrderedUshiiPage[]}
 */

/**
 * @returns { { prevPage: OrderedUshiiPage | null; nextPage: OrderedUshiiPage | null } }
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

async function postFeedback(data) {
    const env = process.env.DEPLOY_ENV === 'production' ? 'prod' : 'dev';
    try {
      const response = await fetch(`${process.env.FEEDBACK_URL}/${env}/feedback`, {
        method: 'POST',
        referrerPolicy: 'origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
}

export default function AppLayoutDocsFooter(props) {
    const { tableOfContents = [], location } = props;

    const theme = useTheme();
    const t = useTranslate();
    const userLanguage = useUserLanguage();
    const { activePage, productId } = React.useContext(PageContext);
    const [rating, setRating] = React.useState();

    const { nextPage, prevPage } = usePageNeighbours();

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
                            <IconButton aria-pressed={rating === 1}>
                                <ThumbUpAltRounded 
                                    sx={{ fontSize: 15, color: rating === 0 ? 'error' : 'text.secondary' }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={t('feedbackNo')}>
                            <IconButton aria-pressed={rating === 0}>
                                <ThumbDownAltRounded 
                                    sx={{ fontSize: 15, color: rating === 0 ? 'error' : 'text.secondary' }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>
                {/* Wrapper div to fix Collapse close animation */}
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
        </React.Fragment>
    )
}