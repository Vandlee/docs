import * as React from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowRightRounded } from '@mui/icons-material';
import { alpha, styled } from '@u_ui/u-ui/styles';
import Collapse from '@u_ui/u-ui/Collapse';
import Box from '@u_ui/u-ui/Box';
import Chip from '@u_ui/u-ui/Chip';
import { samePageLinkNavigation } from 'docs/src/modules/components/MarkdownLinks';
import { Link } from '@vandlee/docs/Link';
import standardNavIcons from './AppNavIcons';

const Item = styled(
    function Item({ component: Component = 'div', ...props }) {
        return <Component {...props} />;
    },
    {
        shouldForwardProp: (prop) =>
            prop !== 'depth' && prop !== 'hasIcon' && prop !== 'subheader' && prop !== 'expandable',
    },
)(({ theme }) => {
    return [
        {
            ...theme.typography.body2,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 6,
            color: `var(--_color, ${(theme.vars || theme).palette.text.secondary})`,
            outline: 0,
            width: '100%',
            padding: 6,
            justifyContent: 'flex-start',
            fontWeight: theme.typography.fontWeightSemiBold,
            transition: theme.transitions.create(['color', 'background-color'], {
                duration: theme.transitions.duration.shortest,
            }),
            fontSize: theme.typography.pxToRem(14),
            textDecoration: 'none',
            paddingLeft: `calc(10px + (var(--_depth) + 1) * 13px - (var(--_expandable) * 21px))`,
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                zIndex: 1,
                left: 9.5,
                height: '100%',
                width: 1,
                opacity: 0,
                background: (theme.vars || theme).palette.grey[100],
            },
            variants: [
                {
                props: ({ depth }) => depth === 0,
                style: { '--_color': (theme.vars || theme).palette.text.primary },
                },
                {
                props: ({ depth }) => depth !== 0,
                style: {
                    fontWeight: theme.typography.fontWeightMedium,
                    '&::before': {
                    opacity: 1,
                    },
                },
                },
                {
                props: ({ subheader }) => !subheader,
                style: {
                    '&:hover': {
                    color: (theme.vars || theme).palette.common.black,
                    backgroundColor: (theme.vars || theme).palette.grey[50],
                    '@media (hover: none)': {
                        color: 'var(--_color)',
                        backgroundColor: 'transparent',
                    },
                    },
                },
                },
                {
                props: ({ subheader }) => !!subheader,
                style: {
                    '--_color': (theme.vars || theme).palette.text.tertiary,
                    marginTop: theme.spacing(1),
                    textTransform: 'initial',
                    letterSpacing: '.1rem',
                    fontWeight: theme.typography.fontWeightSemiBold,
                    fontSize: theme.typography.pxToRem(11),
                    '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        zIndex: 1,
                        left: 9.5,
                        height: '55%',
                        top: 16,
                        width: 1,
                        opacity: 0,
                        background: (theme.vars || theme).palette.grey[100],
                    },
                    '&::after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        zIndex: 5,
                        left: 6,
                        height: 8,
                        width: 8,
                        borderRadius: 3,
                        opacity: 0,
                        background: alpha(theme.palette.grey[50], 0.75),
                        border: '1px solid',
                        borderColor: (theme.vars || theme).palette.grey[200],
                    },
                },
                },
                {
                props: ({ depth, subheader }) => depth !== 0 && subheader,
                style: {
                    '&::after': {
                    opacity: 1,
                    },
                    '&::before': {
                    opacity: 1,
                    },
                },
                },
                {
                props: ({ hasIcon }) => !!hasIcon,
                style: {
                    paddingLeft: 0,
                },
                },
            ],
            '&.app-drawer-active': {
                // To match browserUrlPreviewMarge
                scrollMarginBottom: 120,
                color: (theme.vars || theme).palette.primary[600],
                backgroundColor: (theme.vars || theme).palette.primary[50],
                '&:hover': {
                backgroundColor: alpha(theme.palette.primary[100], 0.8),
                color: (theme.vars || theme).palette.primary[700],
                '@media (hover: none)': {
                    backgroundColor: theme.vars
                    ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})`
                    : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
                },
                },
                '&::before': {
                background: (theme.vars || theme).palette.primary[400],
                },
            },
            '& .uiChip-root': {
                marginTop: '2px',
            },
            [theme.breakpoints.up('md')]: {
                paddingTop: 4,
                paddingBottom: 4,
            },
            '& .ItemButtonIcon': {
                marginRight: '6px',
                color: (theme.vars || theme).palette.primary.main,
            },
            '&:hover .ItemButtonIcon': {
                color: (theme.vars || theme).palette.primary.light,
                '@media (hover: none)': {
                color: (theme.vars || theme).palette.primary.main,
                },
            },
        },
        theme.applyDarkStyles({
            '&::before': {
                background: (theme.vars || theme).palette.primaryDark[700],
            },
            '&.app-drawer-active': {
                    color: (theme.vars || theme).palette.primary[300],
                    backgroundColor: (theme.vars || theme).palette.primaryDark[700],
                '&:hover': {
                    backgroundColor: (theme.vars || theme).palette.primaryDark[600],
                    color: (theme.vars || theme).palette.primary[200],
                },
                '&::before': {
                    background: (theme.vars || theme).palette.primary[400],
                },
            },
            variants: [
                {
                    props: ({ subheader }) => !!subheader,
                    style: {
                        '&::before': {
                        background: (theme.vars || theme).palette.primaryDark[700],
                        },
                        '&::after': {
                        background: alpha(theme.palette.primaryDark[500], 0.8),
                        borderColor: alpha(theme.palette.primaryDark[600], 0.6),
                        },
                    },
                    },
                {
                    props: ({ subheader }) => !subheader,
                    style: {
                        '&:hover': {
                        color: '#fff',
                        backgroundColor: alpha(theme.palette.primaryDark[700], 0.4),
                        '@media (hover: none)': {
                            color: 'var(--_color)',
                            backgroundColor: 'transparent',
                        },
                        },
                    },
                },
            ],
        }),
    ];
});

const ItemButtonIcon = styled(KeyboardArrowRightRounded, {
    shouldForwardProp: (prop) => prop !== 'open',
})({
    fontSize: '1rem',
    '&&:last-child': {
      // overrrides https://github.com/mui/material-ui/blob/ca7c5c63e64b6a7f55255981f1836a565927b56c/docs/src/modules/brandingTheme.ts#L757-L759
      marginLeft: 0,
    },
    variants: [
      {
        props: { open: true },
        style: {
          transform: 'rotate(90deg)',
        },
      },
    ],
});

const StyledLi = styled('li', { shouldForwardProp: (prop) => prop !== 'depth'})(({ theme }) => ({
    display: 'block',
    variants: [
        {
            props: {
                depth: 0,
            },
            style: {
                padding: theme.spacing(1, '10px', 0, '10px'),
            },
        },
        {
            props: ({ depth }) => depth !== 0,
            style: {
                padding: 0,
            },
        },
        {
            props: {
                subheader: true
            },
            style: {
                background: theme.palette.background.paper,
                borderRadius: theme.shape.borderRadius,
                marginBottom: 8,
                paddingTop: theme.spacing(.25),
                paddingBottom: theme.spacing(1)
            }
        }
    ],
}));

export const sxChip = (color) => [
    (theme) => ({
        ml: 1,
        fontSize: theme.typography.pxToRem(10),
        fontWeight: 'semiBold',
        textTransform: 'uppercase',
        letterSpacing: '.04rem',
        height: '16px',
        border: 1,
        borderColor: (theme.vars || theme).palette[color][300],
        bgcolor: alpha(theme.palette[color][100], 0.5),
        color: (theme.vars || theme).palette[color][900],
        '&:hover': {
          bgcolor: alpha(theme.palette[color][100], 0.5),
        },
        '& .uiChip-label': {
          px: '4px',
        },
    }),
    (theme) =>
        theme.applyDarkStyles({
            borderColor: alpha(theme.palette[color][800], 0.5),
            bgcolor: alpha(theme.palette[color][900], 0.5),
            color: (theme.vars || theme).palette[color][300],
            '&:hover': {
                bgcolor: alpha(theme.palette[color][900], 0.5),
            },
        }),
];

function DeadLink(props) {
    const { activeClassName, href, noLinkStyle, prefetch, ...other } = props;
    return <div {...other} />
}

DeadLink.propTypes = {
    activeClassName: PropTypes.any,
    href: PropTypes.any,
    noLinkStyle: PropTypes.any,
    prefetch: PropTypes.any,
};

export default function AppNavDrawerItem(props) {
    const {
        beta,
        children,
        deprecated,
        depth,
        href,
        icon,
        legacy,
        newFeature,
        updated,
        planned,
        unstable,
        linkProps,
        onClick,
        initiallyExpanded = false,
        expandable = false,
        plan = 'community',
        subheader,
        title,
        topLevel = false,
        ...other
    } = props;
    const [open, setOpen] = React.useState(initiallyExpanded);
    const handleClick = (event) => {
        // Ignore click events meant for native link handling, for example open in new tab
        if (samePageLinkNavigation(event)) {
            return;
        }
    
        if (onClick) {
            onClick(event);
        }
    
        if (expandable) {
            event.preventDefault();
            setOpen((oldOpen) => !oldOpen);
        }
    };
    
    const hasIcon = icon && (typeof icon !== 'string' || !!standardNavIcons[icon]);
    const IconComponent = typeof icon === 'string' ? standardNavIcons[icon] : icon;
    const iconElement = hasIcon ? (
        <Box
            component="span"
            sx={{
                '& svg': { fontSize: (theme) => theme.typography.pxToRem(16.5) },
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                marginRight: '6px',
            }}
        >
            <IconComponent fontSize="small" color="primary" />
        </Box>
    ) : null;

    return (
        <StyledLi {...other} subheader={subheader} depth={depth}>
            {/* Fix overloading with prefetch={false}, only prefetch on hover */}
            <Item
                component={subheader ? DeadLink : Link}
                depth={depth}
                hasIcon={hasIcon}
                href={href.pathname}
                prefetch={false}
                subheader={subheader}
                expandable={expandable}
                activeClassName={initiallyExpanded ? null : 'app-drawer-active'}
                className={topLevel ? 'algolia-lvl0' : null}
                onClick={handleClick}
                {...linkProps}
                style={{
                    ...linkProps?.style,
                    '--_depth': depth,
                    '--_expandable': expandable ? 1 : 0,
                }}
            >
                {iconElement}
                {expandable && <ItemButtonIcon className="ItemButtonIcon" open={open} />}
                {title}
                {plan === 'pro' && <span className="plan-pro" title="Pro plan" />}
                {plan === 'premium' && <span className="plan-premium" title="Premium plan" />}
                {legacy && <Chip label="Legacy" sx={sxChip('warning')} />}
                {updated && <Chip label="Actualizado" sx={sxChip('secondary')} />}
                {newFeature && <Chip label="Nuevo" sx={sxChip('success')} />}
                {planned && <Chip label="Planeado" sx={sxChip('grey')} />}
                {unstable && <Chip label="Preview" sx={sxChip('primary')} />}
                {beta && <Chip label="Beta" sx={sxChip('primary')} />}
                {deprecated && <Chip label="Deprecated" sx={sxChip('warning')} />}
            </Item>
            {expandable ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {children}
                </Collapse>
            ) : (
                children
            )}
        </StyledLi>
    )
}

AppNavDrawerItem.propTypes = {
    beta: PropTypes.bool,
    children: PropTypes.node,
    deprecated: PropTypes.bool,
    depth: PropTypes.number.isRequired,
    expandable: PropTypes.bool,
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    icon: PropTypes.elementType,
    initiallyExpanded: PropTypes.bool,
    legacy: PropTypes.bool,
    linkProps: PropTypes.object,
    newFeature: PropTypes.bool,
    onClick: PropTypes.func,
    plan: PropTypes.oneOf(['community', 'pro', 'premium']),
    planned: PropTypes.bool,
    subheader: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    topLevel: PropTypes.bool,
    unstable: PropTypes.bool,
};