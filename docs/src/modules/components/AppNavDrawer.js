import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@u_ui/u-ui/Button';
import Divider from '@u_ui/u-ui/Divider';
import { styled, alpha, ThemeProvider } from '@u_ui/u-ui/styles';
import List from '@u_ui/u-ui/List';
import Drawer from '@u_ui/u-ui/Drawer';
import Typography from '@u_ui/u-ui/Typography';
import SwipeableDrawer from '@u_ui/u-ui/SwipeableDrawer';
import ClickAwayListener from '@u_ui/u-ui/ClickAwayListener';
import Fade from '@u_ui/u-ui/Fade';
import Paper from '@u_ui/u-ui/Paper';
import Popper from '@u_ui/u-ui/Popper';
import Menu from '@u_ui/u-ui/Menu';
import MenuItem from '@u_ui/u-ui/MenuItem';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';
import Box from '@u_ui/u-ui/Box';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@vandlee/utils';
import { ArrowDropDownRounded, 
    DoneRounded } from '@mui/icons-material';
import LogoWithCopyMenu from 'docs/src/components/action/LogoWithCopyMenu';
import AppNavDrawerItem from 'docs/src/modules/components/AppNavDrawerItem';
import { pageToTitleI18n } from '../utils/helpers';
import PageContext from './PageContext';
import { useTranslate } from '@vandlee/docs/i18n';
import VandleeProductSelector from 'docs/src/modules/components/vandleeProductSelector';

// TODO: Collapse should expose an API to customize the duration based on the height.
function transitionTheme(theme) {
    return {
        ...theme,
        transitions: {
            ...theme.transitions,
            getAutoHeightDuration: (height) => {
                if (!height) {
                  return 0;
                }
        
                const constant = height / 80;
        
                // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
                return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
            },
        },
    };
}

const savedScrollTop = {};

const customButtonStyles = (theme) => ({
    pl: 1,
    pr: '6px',
    height: 26,
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightMedium,
    letterSpacing: '0.01rem',
});

function ProductDrawerButton(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    return (
      <React.Fragment>
        <Button
          size="small"
          id="vandlee-product-selector"
          ref={anchorRef}
          aria-haspopup="true"
          aria-controls={open ? 'drawer-open-button' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleToggle}
          endIcon={<ArrowDropDownRounded fontSize="small" sx={{ ml: -0.5 }} />}
          sx={customButtonStyles}
        >
          {props.productName}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          disablePortal
          transition
          style={{ zIndex: 1200 }}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={250}>
              <Paper
                variant="outlined"
                sx={(theme) => ({
                  mt: 1,
                  minWidth: { xs: '100%', sm: 600 },
                  overflow: 'clip',
                  boxShadow: `0 4px 16px ${alpha(theme.palette.common.black, 0.15)}`,
                  ...theme.applyDarkStyles({
                    bgcolor: 'primaryDark.900',
                  }),
                })}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <VandleeProductSelector
                    autoFocusItem={open}
                    type={props.productCategory}
                    id="vandlee-product-menu"
                    aria-labelledby="vandlee-product-selector"
                    onKeyDown={handleListKeyDown}
                  />
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </React.Fragment>
    );
  }

ProductDrawerButton.propTypes = {
    productName: PropTypes.string,
};

function ProductIdentifier(props) {
    const { name, metadata, versionSelector, productCategory } = props;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
                sx={(theme) => ({
                    ml: '6px',
                    fontSize: theme.typography.pxToRem(10),
                    fontWeight: theme.typography.fontWeightBold,
                    textTransform: 'uppercase',
                    letterSpacing: '.1rem',
                    color: (theme.vars || theme).palette.text.tertiary,
                })}
            >
                {metadata}
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <ProductDrawerButton productName={name} productCategory={productCategory} />
                {versionSelector}
            </Box>
        </Box>
    );
}

ProductIdentifier.propTypes = {
    metadata: PropTypes.string,
    name: PropTypes.string.isRequired,
    versionSelector: PropTypes.element.isRequired,
};

// To match scrollMarginBottom
const browserUrlPreviewMarge = 120;

function PersistScroll(props) {
    const { slot, children, enabled } = props;
    const rootRef = React.useRef();

    useEnhancedEffect(() => {
        const scrollContainer = rootRef.current ? rootRef.current.parentElement : null;
        const activeDrawerLink = scrollContainer.querySelector('.app-drawer-active');

        if (!enabled || !scrollContainer || !activeDrawerLink || !activeDrawerLink.scrollIntoView) {
            return undefined;
        }

        scrollContainer.scrollTop = savedScrollTop[slot];

        const activeBox = activeDrawerLink.getBoundingClientRect();

        if (activeBox.top < 0 || activeBox.bottom + browserUrlPreviewMarge > window.innerHeight) {
            // Scroll the least possible from the initial render, for example server-side, scrollTop = 0.
            activeDrawerLink.scrollIntoView({ block: 'nearest' });
        }

        return () => {
            // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- useEnhancedEffect uses useEffect under the hood
            savedScrollTop[slot] = scrollContainer.scrollTop;
        };
    }, [enabled, slot]);

    return <div ref={rootRef}>{children}</div>;
}

PersistScroll.propTypes = {
    children: PropTypes.node.isRequired,
    enabled: PropTypes.bool.isRequired,
    slot: PropTypes.string.isRequired,
};

const ToolbarDiv = styled('div')(({ theme }) => ({
    padding: theme.spacing(1.5),
    paddingRight: 0,
    flexShrink: 0,
    height: 'var(--uidocs-header-height)',
    boxSizing: 'border-box', // TODO have CssBaseline in the Next.js layout
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  }));

const AppNavPaperComponent = styled('div')(() => {
    return {
      width: 'var(--uidocs-navDrawer-width)',
      boxShadow: 'none',
      border: '0 !important', // TODO add a Paper slot
      overflowY: 'unset !important', // TODO add a Paper slot
      boxSizing: 'border-box', // TODO have CssBaseline in the Next.js layout
    };
});

function renderNavItems(options) {
    const { pages, ...params } = options;

    return (
        <List>{pages.reduce((items, page) => reduceChildRoutes({ items, page, ...params }), [])}</List>
    )
}

/**
 * @param {object} context 
 * @param {import('docs/src/pages').ui-Page} context.page
 */
function reduceChildRoutes(context) {
    const { onClose, activePageParents, items, depth, t } = context;
    const { page } = context;
    if (page.inSideNav === false) {
        return items;
    }
  
    const title = pageToTitleI18n(page, t);
    if (page.children && page.children.length >= 1) {
        const topLevel = activePageParents.some(({ pathname }) => pathname === page.pathname);
    
        let firstChild = page.children[0];
    
        if (firstChild.subheader && firstChild.children) {
            firstChild = firstChild.children[0];
        }
    
        const subheader = Boolean(page.subheader);
        const [path, hash] = firstChild.pathname.split('#');
        items.push(
            <AppNavDrawerItem
                linkProps={page.linkProps}
                depth={depth}
                key={title}
                title={title}
                href={{
                    pathname: path,
                    ...(firstChild.query && { query: firstChild.query }),
                    ...(hash && { hash }),
                }}
                legacy={page.legacy}
                newFeature={page.newFeature}
                updated={page.updated}
                planned={page.planned}
                unstable={page.unstable}
                beta={page.beta}
                deprecated={page.deprecated}
                plan={page.plan}
                icon={page.icon}
                subheader={subheader}
                topLevel={topLevel && !page.subheader}
                initiallyExpanded={topLevel || subheader}
                expandable={!subheader}
            >
                {renderNavItems({
                    onClose,
                    pages: page.children,
                    activePageParents,
                    depth: subheader ? depth : depth + 1,
                    t,
                })}
            </AppNavDrawerItem>,
        );
    } else {
        const [path, hash] = page.pathname.split('#');
        items.push(
            <AppNavDrawerItem
                linkProps={page.linkProps}
                depth={depth}
                key={title}
                title={title}
                href={{
                    pathname: path,
                    ...(page.query && { query: page.query }),
                    ...(hash && { hash }),
                }}
                legacy={page.legacy}
                newFeature={page.newFeature}
                updated={page.updated}
                planned={page.planned}
                unstable={page.unstable}
                beta={page.beta}
                deprecated={page.deprecated}
                plan={page.plan}
                icon={page.icon}
                subheader={Boolean(page.subheader)}
                onClick={onClose}
            />,
        );
    }
  
    return items;
}

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

export default function AppNavDrawer(props) {
    const { className, disablePermanent, mobileOpen, onClose, onOpen } = props;
    const { activePageParents, pages, productIdentifier } = React.useContext(PageContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const t = useTranslate();
    const mobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const swipeableDrawer = disablePermanent || mobile;

    const drawer = React.useMemo(() => {
        const navItems = renderNavItems({ onClose, pages, activePageParents, depth: 0, t });
    
        const renderVersionSelector = (versions) => {
          if (!versions?.length) {
            return null;
          }
    
          const currentVersion = versions.find((version) => version.current) || versions[0];

            return (
                <React.Fragment>
                    <Button
                        variant="text"
                        color="secondary"
                        size="small"
                        id="vandlee-version-selector"
                        onClick={(event) => {
                        setAnchorEl(event.currentTarget);
                        }}
                        endIcon={
                        versions.length > 1 ? (
                            <ArrowDropDownRounded fontSize="small" sx={{ ml: -0.5 }} />
                        ) : null
                        }
                        sx={customButtonStyles}
                    >
                        {currentVersion.text}
                    </Button>
                    <Menu
                        id="vandlee-version-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                    >
                        {versions.map((item) => {
                            if (item.text === 'View all versions') {
                                return [
                                <Divider key="divider" />,
                                <MenuItem key="all-versions" component="a" href={item.href} onClick={onClose}>
                                    {/* eslint-disable-next-line material-ui/no-hardcoded-labels -- version string is untranslatable */}
                                    {`View all versions`}
                                </MenuItem>,
                                ];
                            }
                            return (
                                <MenuItem
                                    key={item.text}
                                    {...(item.current
                                        ? {
                                            selected: true,
                                            onClick: () => setAnchorEl(null),
                                        }
                                        : {
                                            component: 'a',
                                            href: item.href,
                                            onClick: onClose,
                                        })}
                                >
                                    {item.text} {item.current && <DoneRounded sx={{ fontSize: 16, ml: 'auto' }} />}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </React.Fragment>
            );
        };
    
        return (
            <React.Fragment>
                <ToolbarDiv>
                    <LogoWithCopyMenu />
                    <Divider orientation='vertical' sx={{ height: 24}} />
                    <LogoWithCopyMenu 
                        logo={productIdentifier.logo}
                        logoSvgString={productIdentifier.logoSvg}
                        url={productIdentifier.url}
                        wordmarkSvgString={productIdentifier.wordmarkSvg}
                        marginLeft
                    />
                    <ProductIdentifier
                        productCategory={productIdentifier.productCategoryId}
                        name={productIdentifier.name}
                        metadata={productIdentifier.metadata}
                        versionSelector={renderVersionSelector(productIdentifier.versions)}
                    />
                </ToolbarDiv>
                <Box
                    sx={{
                        pt: 0.5,
                        pb: 5,
                        overflowY: 'auto',
                        flexGrow: 1,
                        ...(swipeableDrawer
                        ? {
                            borderRight: '1px solid',
                            borderColor: 'divider',
                          }
                        : {}
                        ),
                    }}
                >
                    <PersistScroll slot="side" enabled>
                        {navItems}
                    </PersistScroll>
                </Box>
            </React.Fragment>
        );
    }, [onClose, pages, activePageParents, t, productIdentifier, anchorEl, swipeableDrawer]);
    
    if (process.env.NODE_ENV !== 'production') {
        if (!productIdentifier) {
            throw new Error('docs-infra: missing productIdentifier in PageContext');
        }
        if (!productIdentifier.versions) {
            throw new Error('docs-infra: missing productIdentifier.versions in PageContext');
        }
    }

    return (
        <ThemeProvider theme={transitionTheme}>
            <nav className={className} aria-label={t('mainNavigation')}>
                {swipeableDrawer ? (
                    <SwipeableDrawer
                        disableBackdropTransition={!iOS}
                        variant="temporary"
                        open={mobileOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        ModalProps={{
                        keepMounted: true,
                        }}
                        PaperProps={{
                        component: AppNavPaperComponent,
                        }}
                    >
                        {drawer}
                    </SwipeableDrawer>
                ): (
                    <StyledDrawer
                      variant="permanent"
                      PaperProps={{
                        component: AppNavPaperComponent,
                      }}
                      open
                    >
                      {drawer}
                    </StyledDrawer>
                )}
            </nav>
        </ThemeProvider>
    )
}