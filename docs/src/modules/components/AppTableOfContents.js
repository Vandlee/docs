/* eslint-disable react/no-danger */
import * as React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import { styled, alpha } from '@yushii/ui/styles';
import Typography from '@yushii/ui/Typography';
import NoSsr from '@yushii/ui/NoSsr';
import { Link } from '@yushii/docs/Link';
import { useTranslate } from '@yushii/docs/i18n';
import { samePageLinkNavigation } from 'docs/src/modules/components/MarkdownLinks';

const Nav = styled('nav')(({ theme }) => ({
    top: 'var(--YushiiDocs-header-height)',
    marginTop: 'var(--YushiiDocs-header-height)',
    paddingLeft: 6, // Fix truncated focus outline style
    position: 'sticky',
    height: 'calc(100vh - var(--YushiiDocs-header-height))',
    overflowY: 'auto',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(7),
    paddingRight: theme.spacing(4), // We can't use `padding` as stylis-plugin-rtl doesn't swap it
    display: 'none',
    scrollbarWidth: 'thin',
    [theme.breakpoints.up('md')]: {
        display: 'block',
    },
}))

const NavLabel = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 1.4),
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightSemiBold,
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    color: (theme.vars || theme).palette.text.tertiary,
}));

const NavList = styled(Typography)({
    padding: 0,
    margin: 0,
    listStyle: 'none',
});

const NavItem = styled(Link, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'levle',
})(({ theme }) => {
    const activeStyles = {
        borderLeftColor: (theme.vars || theme).palette.primary[200],
        color: (theme.vars || theme).palette.primary[600],
        '&:hover': {
            borderLeftColor: (theme.vars || theme).palette.primary[600],
            color: (theme.vars || theme).palette.primary[600],
        },
    };
    const activeDarkStyles = {
        borderLeftColor: (theme.vars || theme).palette.primary[600],
        color: (theme.vars || theme).palette.primary[300],
        '&:hover': {
            borderLeftColor: (theme.vars || theme).palette.primary[400],
            color: (theme.vars || theme).palette.primary[400],
        },
    };

    return [
        {
            boxSizing: 'border-box',
            padding: '6px 0 6px 12px',
            borderLeft: `1px solid transparent`,
            display: 'block',
            fontSize: theme.typography.pxToRem(13),
            fontWeight: theme.typography.fontWeightMedium,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            '&:hover': {
                borderLeftColor: (theme.vars || theme).palette.grey[400],
                color: (theme.vars || theme).palette.grey[600],
            },
            // TODO: We probably want `aria-current="location"` instead.
            variants: [
                {
                    props: ({ active }) => !!active,
                    style: activeStyles,
                },
                {
                    props: ({ active }) => !active,
                    style: {
                        color: (theme.vars || theme).palette.text.primary,
                    },
                },
                {
                    props: ({ level }) => level === 2,
                    style: {
                        padding: `6px 0 6px ${theme.spacing(3)}`,
                    },
                },
                {
                    props: ({ level }) => level === 3,
                    style: {
                        padding: `6px 0 6px ${theme.spacing(4.5)}`,
                    },
                },
            ],
            '&:active': activeStyles,
        },
        theme.applyDarkStyles({
            '&:hover': {
                borderLeftColor: (theme.vars || theme).palette.grey[500],
                color: (theme.vars || theme).palette.grey[200],
            },
            variants: [
                {
                    props: ({ active }) => !!active,
                    style: activeDarkStyles,
                },
                {
                props: ({ active }) => !active,
                    style: {
                        color: (theme.vars || theme).palette.grey[500],
                    },
                },
            ],
            '&:active': activeDarkStyles,
        }),
    ];
});

const noop = () => {};

function useThrottledOnScroll(callback, delay) {
    const throttledCallback = React.useMemo(
        () => (callback ? throttle(callback, delay) : noop),
        [callback, delay],
    );
  
    React.useEffect(() => {
      if (throttledCallback === noop) {
            return undefined;
      }
  
      window.addEventListener('scroll', throttledCallback);
      return () => {
            window.removeEventListener('scroll', throttledCallback);
            throttledCallback.cancel();
      };
    }, [throttledCallback]);
}

function flatten(headings) {
    const itemsWithNode = [];
  
    headings.forEach((item) => {
        itemsWithNode.push(item);
    
        if (item.children.length > 0) {
            item.children.forEach((subitem) => {
                itemsWithNode.push(subitem);
            });
        }
    });
    return itemsWithNode;
}

export default function AppTableOfContents(props) {
    const { toc } = props;
    const t = useTranslate();

    const items = React.useMemo(() => flatten(toc), [toc]);
    const [activeState, setActiveState] = React.useState(null);
    const clickedRef = React.useRef(false);
    const unsetClickedRef = React.useRef(null);
    const findActiveIndex = React.useCallback(() => {
        // Don't set the active index based on scroll if a link was just clicked
        if (clickedRef.current) {
            return;
        }

        let active;
        for (let i = items.length - 1; i >= 0; i -= 1) {
            // No hash if we're near the top of the page
        if (document.documentElement.scrollTop < 200) {
            active = { hash: null };
            break;
        }

        const item = items[i];
        const node = document.getElementById(item.hash);

        if (process.env.NODE_ENV !== 'production') {
            if (!node) {
                console.error(`Missing node on the item ${JSON.stringify(item, null, 2)}`);
            }
        }

        if (
            node &&
            node.offsetTop <
            document.documentElement.scrollTop + document.documentElement.clientHeight / 8
        ) {
            active = item;
            break;
        }
        }

        if (active && activeState !== active.hash) {
            setActiveState(active.hash);
        }
    }, [activeState, items]);

    
    // Corresponds to 10 frames at 60 Hz
    useThrottledOnScroll(items.length > 0 ? findActiveIndex : null, 166);

    const handleClick = (hash) => (event) => {
        // Ignore click events meant for native link handling, for example open in new tab
        if (samePageLinkNavigation(event)) {
          return;
        }
    
        // Used to disable findActiveIndex if the page scrolls due to a click
        clickedRef.current = true;
        unsetClickedRef.current = setTimeout(() => {
            clickedRef.current = false;
        }, 1000);
    
        if (activeState !== hash) {
            setActiveState(hash);
        }
    };
    
    React.useEffect(
        () => () => {
            clearTimeout(unsetClickedRef.current);
        },
        [],
    );

    const itemLink = (item, level) => (
        <NavItem
            display="block"
            href={`#${item.hash}`}
            underline="none"
            onClick={handleClick(item.hash)}
            active={activeState === item.hash}
            level={level}
        >
            <span dangerouslySetInnerHTML={{ __html: item.text }} />
        </NavItem>
    )
    return (
        <Nav aria-label={t('pageTOC')}>
            <NoSsr>

            </NoSsr>
            {toc.length > 0 ? (
                <React.Fragment>
                <NavLabel>{t('tableOfContents')}</NavLabel>
                <NavList component="ul">
                    {toc.map((item) => (
                    <li key={item.text}>
                        {itemLink(item, 1)}
                        {item.children.length > 0 ? (
                        <NavList as="ul">
                            {item.children.map((subitem) => (
                            <li key={subitem.text}>
                                {itemLink(subitem, 2)}
                                {subitem.children?.length > 0 ? (
                                <NavList as="ul">
                                    {subitem.children.map((nestedSubItem) => (
                                    <li key={nestedSubItem.text}>{itemLink(nestedSubItem, 3)}</li>
                                    ))}
                                </NavList>
                                ) : null}
                            </li>
                            ))}
                        </NavList>
                        ) : null}
                    </li>
                    ))}
                </NavList>
                </React.Fragment>
            ) : null}
        </Nav>
    );
}

AppTableOfContents.propTypes = {
    toc: PropTypes.array.isRequired,
  };
  