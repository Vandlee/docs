import * as React from 'react';
import clsx from 'clsx';
import { alpha, darken, styled } from '@u_ui/u-ui/styles';
import useForkRef from '@vandlee/utils/useForkRef';
import { brandingDarkTheme as darkTheme, brandingLightTheme as lightTheme } from '../branding';

const Root = styled('div')(
  ({ theme }) => ({
    ...lightTheme.typography.body1,
    lineHeight: 1.625, // Rounds up to 26px－increased compared to the 1.5 default to make the docs easier to read.
    color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
    '& :focus-visible': {
      outline: `3px solid ${alpha(lightTheme.palette.primary[500], 0.5)}`,
      outlineOffset: 2,
    },
    '& strong': {
      color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
    },
    wordBreak: 'break-word',
    '& pre': {
      lineHeight: 1.5, // Developers like when the code is dense.
      margin: theme.spacing(2, 'auto'),
      padding: theme.spacing(2),
      backgroundColor: 'hsl(0, 0%, 10%)', // a special, one-off, color tailored for the code blocks using U-Ui's branding theme blue palette as the starting point. It has a less saturaded color but still maintaining a bit of the blue tint.
      color: 'hsl(60, 30%, 96%)',
      colorScheme: 'dark',
      borderRadius: `var(--uidocs-shape-borderRadius, ${
        theme.shape?.borderRadius ?? lightTheme.shape.borderRadius
      }px)`,
      border: '1px solid',
      borderColor: `var(--uidocs-palette-primaryDark-700, ${lightTheme.palette.primaryDark[700]})`,
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      fontSize: lightTheme.typography.pxToRem(13),
      maxHeight: '400px',
    },
    '& code': {
      ...lightTheme.typography.body2,
      fontFamily: lightTheme.typography.fontFamilyCode,
      fontWeight: 400,
      WebkitFontSmoothing: 'subpixel-antialiased',
    },
    '& pre > code': {
      // Reset for Safari
      // https://github.com/necolas/normalize.css/blob/master/normalize.css#L102
      fontSize: 'inherit',
    },
    // inline code block
    '& :not(pre) > code': {
      padding: '2px 4px',
      color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      backgroundColor: `var(--uidocs-palette-grey-50, ${lightTheme.palette.grey[50]})`,
      border: '1px solid',
      borderColor: `var(--uidocs-palette-grey-200, ${lightTheme.palette.grey[200]})`,
      borderRadius: 6,
      fontSize: lightTheme.typography.pxToRem(13),
      direction: 'ltr /*! @noflip */',
      boxDecorationBreak: 'clone',
    },
    '& h1': {
      ...lightTheme.typography.h3,
      fontSize: lightTheme.typography.pxToRem(36),
      fontFamily: `"Quicksand", ${lightTheme.typography.fontFamilySystem}`,
      margin: '10px 0',
      color: `var(--uidocs-palette-primaryDark-900, ${lightTheme.palette.primaryDark[900]})`,
      fontWeight: 600,
      letterSpacing: -0.2,
    },
    '& .description': {
      ...lightTheme.typography.subtitle1,
      fontWeight: 400,
      margin: '0 0 24px',
    },
    '& .component-tabs': {
      margin: '0 0 40px',
    },
    '& h2': {
      ...lightTheme.typography.h5,
      fontFamily: `"Quicksand", ${lightTheme.typography.fontFamilySystem}`,
      fontSize: theme.typography.pxToRem(26),
      fontWeight: lightTheme.typography.fontWeightSemiBold,
      color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
      margin: '40px 0 4px',
    },
    '& h3': {
      ...lightTheme.typography.h6,
      fontFamily: `"Quicksand", ${lightTheme.typography.fontFamilySystem}`,
      fontSize: theme.typography.pxToRem(20),
      fontWeight: lightTheme.typography.fontWeightSemiBold,
      color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
      margin: '24px 0 4px',
    },
    '& h4': {
      ...lightTheme.typography.subtitle1,
      fontFamily: `"Quicksand", ${lightTheme.typography.fontFamilySystem}`,
      fontWeight: lightTheme.typography.fontWeightSemiBold,
      color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
      margin: '20px 0 6px',
    },
    '& h5': {
      ...lightTheme.typography.subtitle2,
      fontFamily: `"Quicksand", ${lightTheme.typography.fontFamilySystem}`,
      fontWeight: lightTheme.typography.fontWeightSemiBold,
      color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
      margin: '20px 0 8px',
    },
    '& p': {
      marginTop: 0,
      marginBottom: 16,
      textIndent: '1.75rem',
      color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
    },
    '& ul, & ol': {
      paddingLeft: 30,
      marginTop: 0,
      marginBottom: 16,
      marginLeft: 16,
      '& ul, & ol': {
        marginBottom: 16,
      },
    },
    '& a[target="_blank"]::after': {
      content: '""',
      maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' focusable='false' aria-hidden='true' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z'%3E%3C/path%3E%3C/svg%3E")`,
      display: 'inline-flex',
      width: '1em',
      height: '1em',
      color: 'inherit',
      backgroundColor: 'currentColor',
      transform: 'translate(0, 2px)',
      transition: 'transform 0.3s cubic-bezier(0.1, 0.8, 0.3, 1)', // bounce effect
      opacity: 0.8,
    },
    '& a[target="_blank"]:hover::after': {
      opacity: 1,
      transform: 'translate(1px, 0)',
    },
    '& a.remove-link-arrow::after': {
      // Allows to remove link arrows for images
      display: 'none',
    },
    '& .ad.description a::after': {
      // Remove link arrow for ads
      display: 'none',
    },
    '& a': {
      // Style taken from the Link component
      color: `var(--uidocs-palette-primary-600, ${lightTheme.palette.primary[600]})`,
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: 'underline',
      textDecorationColor: alpha(lightTheme.palette.primary.main, 0.2),
      '&:hover': {
        textDecorationColor: 'inherit',
      },
    },
    '& a code': {
      color: darken(lightTheme.palette.primary.main, 0.5),
      fontWeight: theme.typography.fontWeightBold,
    },
    '& h1, & h2, & h3, & h4': {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      '& code': {
        fontSize: 'inherit',
        lineHeight: 'inherit',
        // Remove scroll on small screens.
        wordBreak: 'break-all',
      },
      '& .title-link-to-anchor': {
        color: 'inherit',
        textDecoration: 'none',
        boxShadow: 'none',
        fontWeight: 'inherit',
        position: 'relative',
        userSelect: 'text',
      },
      '& .anchor-icon': {
        // To prevent the link to get the focus.
        display: 'inline-flex',
        alignItems: 'center',
        visibility: 'hidden',
      },
      '& .anchor-icon, & .comment-link': {
        padding: 0,
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        textAlign: 'center',
        marginLeft: 8,
        height: 26,
        width: 26,
        color: `var(--uidocs-palette-grey-600, ${lightTheme.palette.grey[600]})`,
        backgroundColor: 'transparent',
        border: '1px solid transparent',
        borderRadius: 8,
        transition: theme.transitions.create(
          ['visibility', 'background-color', 'color', 'border-color'],
          {
            duration: theme.transitions.duration.shortest,
          },
        ),
        '&:hover': {
          backgroundColor: alpha(lightTheme.palette.primary[100], 0.4),
          borderColor: `var(--uidocs-palette-primary-100, ${lightTheme.palette.primary[100]})`,
          color: `var(--uidocs-palette-primary-main, ${lightTheme.palette.primary.main})`,
        },
        '& svg': {
          height: 14,
          width: 14,
          fill: 'currentColor',
          pointerEvents: 'none',
          verticalAlign: 'middle',
        },
      },
      '&:hover .anchor-icon': {
        visibility: 'visible',
      },
      '& .comment-link': {
        display: 'none', // So we can have the comment button opt-in.
        marginLeft: 'auto',
        transition: theme.transitions.create(['background-color', 'color', 'border-color'], {
          duration: theme.transitions.duration.shortest,
        }),
        '& svg': {
          fill: 'currentColor',
          marginRight: 1.5,
        },
      },
    },
    '& h1 code, & h2 code, & h3 code': {
      color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
    },
    '& h1 code': {
      fontWeight: lightTheme.typography.fontWeightSemiBold,
    },
    '& h2 code': {
      fontSize: lightTheme.typography.pxToRem(24),
      fontWeight: lightTheme.typography.fontWeightSemiBold,
    },
    '& h3 code': {
      fontSize: lightTheme.typography.pxToRem(18),
    },
    '& .table': {
      marginBottom: '20px',
      display: 'flex',
      border: 1,
      borderStyle: 'solid',
      borderColor: `var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
      borderRadius: 8,
      overflow: 'hidden',
      '& .table-scroll': {
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
      },
    },
    '& table': {
      display: 'table',
      wordBreak: 'normal',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'auto',
      width: '100%',
      '& .prop-name, & .prop-type, & .prop-default, & .slot-name, & .slot-defaultClass, & .slot-default':
        {
          fontWeight: 400,
          fontFamily: lightTheme.typography.fontFamilyCode,
          WebkitFontSmoothing: 'subpixel-antialiased',
          fontSize: lightTheme.typography.pxToRem(13),
        },
      '& .required': {
        color: '#006500',
      },
      '& .optional': {
        color: '#45529f',
      },
      '& .prop-type, & .slot-defaultClass': {
        color: '#932981',
      },
      '& .prop-default, & .slot-default': {
        borderBottom: `1px dotted var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
      },
    },
    '& tr:nth-last-child(1) td': {
      borderBottom: 'transparent'
    },
    '& td, & th': {
      borderRight: `1px solid var(--uidocs-palette-grey-100, ${darkTheme.palette.grey[100]})`,
      '&:nth-last-child(1)': {
        borderRight: 0
      }
    },
    '& td': {
      ...theme.typography.body2,
      borderBottom: `1px solid var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
      paddingRight: 20,
      paddingLeft: 8,
      paddingTop: 16,
      paddingBottom: 16,
      color: `var(--uidocs-palette-text-secondary, ${lightTheme.palette.text.secondary})`,
    },
    '& td code': {
      lineHeight: 1.6,
    },
    '& th': {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(24),
      fontWeight: 500,
      color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      whiteSpace: 'pre',
      borderBottom: `1px solid var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
      paddingRight: 20,
      paddingTop: 12,
      paddingLeft: 8,
      paddingBottom: 12,
      backgroundColor: `var(--uidocs-palette-grey-50, ${darkTheme.palette.grey[50]})`
    },
    '& blockquote': {
      position: 'relative',
      padding: '0 16px',
      margin: 0,
      borderLeft: '1.5px solid',
      borderColor: `var(--uidocs-palette-grey-200, ${lightTheme.palette.grey[200]})`,
      '& p': {
        fontSize: theme.typography.pxToRem(12.5),
        fontFamily: lightTheme.typography.fontFamilyCode,
        fontWeight: lightTheme.typography.fontWeightMedium,
        lineHeight: theme.typography.pxToRem(24),
        textIndent: 20,
      },
      '&::before': {
        position: 'absolute',
        // eslint-disable-next-line material-ui/straight-quotes
        content: '"“"',
        color: `var(--uidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
        fontSize: '2.5rem',
        top: 8,
        marginLeft: -6,
        lineHeight: 0.5,
      },
    },
    '& .uiCallout-root': {
      display: 'flex',
      gap: '8px',
      padding: '12px',
      margin: '16px 0',
      border: '1px solid',
      color: `var(--uidocs-palette-text-secondary, ${lightTheme.palette.text.secondary})`,
      borderColor: `var(--uidocs-palette-grey-100, ${lightTheme.palette.grey[100]})`,
      borderRadius: `var(--uidocs-shape-borderRadius, ${
        theme.shape?.borderRadius ?? lightTheme.shape.borderRadius
      }px)`,
      '& .uiCallout-content': {
        minWidth: 0, // Allows content to shrink. Useful when callout contains code block
        flexGrow: 1,
      },
      '& code': {
        height: 'fit-content',
        backgroundColor: `var(--uidocs-palette-grey-100, ${lightTheme.palette.grey[100]})`,
        borderColor: `var(--uidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
      },
      '& p': {
        fontWeight: 400,
        marginBottom: '8px',
        textIndent: '0 !important',
        '& > p:last-child, & > ul:last-child': {
          // Avoid margin on last child
          marginBottom: 0,
        },
        '& > ul': {
          // Because of the gap left by the icon, we visually need less padding
          paddingLeft: 22,
        },
      },
      '& .uiCode-root': {
        '& pre': {
          margin: '4px 0 0 0',
          borderRadius: '12px 12px 6px 12px',
          borderColor: alpha(lightTheme.palette.primaryDark[600], 0.6),
          '& code': {
            backgroundColor: 'transparent',
          },
        },
      },
      '& .uiCallout-icon-container': {
        width: 26, // to match text's line-height
        height: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        '& svg': {
          width: 18,
          height: 18,
        },
      },
      '& ul, & p': {
        '&:last-child': {
          margin: 0,
        },
      },
      '& ul, li, p': {
        color: 'inherit',
      },
      '&.uiCallout-error': {
        color: `var(--uidocs-palette-error-900, ${lightTheme.palette.error[900]})`,
        backgroundColor: `var(--uidocs-palette-error-50, ${lightTheme.palette.error[50]})`,
        borderColor: `var(--uidocs-palette-error-100, ${lightTheme.palette.error[100]})`,
        '& strong': {
          color: `var(--uidocs-palette-error-800, ${lightTheme.palette.error[800]})`,
        },
        '& svg': {
          fill: `var(--uidocs-palette-error-500, ${lightTheme.palette.error[600]})`,
        },
        '& a': {
          color: `var(--uidocs-palette-error-800, ${lightTheme.palette.error[800]})`,
          textDecorationColor: alpha(lightTheme.palette.error.main, 0.4),
          '&:hover': {
            textDecorationColor: 'inherit',
          },
        },
      },
      '&.uiCallout-info': {
        color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
        backgroundColor: `var(--uidocs-palette-secondary-50, ${lightTheme.palette.secondary[50]})`,
        borderColor: `var(--uidocs-palette-grey-100, ${lightTheme.palette.grey[100]})`,
        '& strong': {
          color: `var(--uidocs-palette-primary-800, ${lightTheme.palette.primary[800]})`,
        },
        '& svg': {
          fill: `var(--uidocs-palette-grey-600, ${lightTheme.palette.grey[600]})`,
        },
      },
      '&.uiCallout-success': {
        color: `var(--uidocs-palette-success-900, ${lightTheme.palette.success[900]})`,
        backgroundColor: `var(--uidocs-palette-success-50, ${lightTheme.palette.success[50]})`,
        borderColor: `var(--uidocs-palette-success-100, ${lightTheme.palette.success[100]})`,
        '& strong': {
          color: `var(--uidocs-palette-success-900, ${lightTheme.palette.success[900]})`,
        },
        '& svg': {
          fill: `var(--uidocs-palette-success-600, ${lightTheme.palette.success[600]})`,
        },
        '& a': {
          color: `var(--uidocs-palette-success-900, ${lightTheme.palette.success[900]})`,
          textDecorationColor: alpha(lightTheme.palette.success.main, 0.4),
          '&:hover': {
            textDecorationColor: 'inherit',
          },
        },
      },
      '&.uiCallout-warning': {
        color: `var(--uidocs-palette-grey-900, ${lightTheme.palette.grey[900]})`,
        backgroundColor: alpha(lightTheme.palette.warning[50], 0.5),
        borderColor: alpha(lightTheme.palette.warning[700], 0.15),
        '& strong': {
          color: `var(--uidocs-palette-warning-800, ${lightTheme.palette.warning[800]})`,
        },
        '& svg': {
          fill: `var(--uidocs-palette-warning-600, ${lightTheme.palette.warning[600]})`,
        },
        '& a': {
          color: `var(--uidocs-palette-warning-800, ${lightTheme.palette.warning[800]})`,
          textDecorationColor: alpha(lightTheme.palette.warning.main, 0.4),
          '&:hover': {
            textDecorationColor: 'inherit',
          },
        },
      },
    },
    '& img, & video': {
      // Use !important so that inline style on <img> or <video> can't win.
      // This avoid horizontal overflows on mobile.
      maxWidth: '100% !important',
      // Avoid the image to be fixed height, so it can respect the aspect ratio.
      height: 'auto',
    },
    '& img': {
      // Avoid layout jump
      display: 'inline-block',
      // Avoid very sharp edges
      borderRadius: 2,
    },
    '& hr': {
      height: 1,
      margin: theme.spacing(5, 0),
      border: 0,
      flexShrink: 0,
      backgroundColor: `var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
    },
    '& kbd.key': {
      padding: 6,
      display: 'inline-block',
      whiteSpace: 'nowrap',
      margin: '0 1px',
      fontFamily: lightTheme.typography.fontFamilyCode,
      fontSize: lightTheme.typography.pxToRem(11),
      color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      lineHeight: '10px',
      verticalAlign: 'middle',
      borderRadius: 6,
      border: `1px solid var(--uidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
      backgroundColor: `var(--uidocs-palette-grey-50, ${lightTheme.palette.grey[50]})`,
      boxShadow: `inset 0 -2px 0 var(--uidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
    },
    '& details': {
      width: '100%',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1.5),
      border: '1px solid',
      borderColor: `var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
      borderRadius: `var(--uidocs-shape-borderRadius, ${
        theme.shape?.borderRadius ?? lightTheme.shape.borderRadius
      }px)`,
      '& pre': {
        marginTop: theme.spacing(1),
      },
    },
    '& summary': {
      cursor: 'pointer',
      padding: theme.spacing(1),
      borderRadius: 6,
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: theme.transitions.create(['background'], {
        duration: theme.transitions.duration.shortest,
      }),
      ':after': {
        content: '""',
        maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6L8 10L12 6' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
        display: 'inline-flex',
        width: '1em',
        height: '1em',
        color: 'inherit',
        backgroundColor: 'currentColor',
      },
      '&:hover': {
        backgroundColor: `var(--uidocs-palette-grey-100, ${lightTheme.palette.grey[50]})`,
      },
    },
    '& details[open] > summary::after': {
      content: '""',
      maskImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 10L8 6L4 10' stroke='black' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A")`,
    },
    '& .uiCode-root': {
      direction: 'ltr /*! @noflip */',
      position: 'relative',
      // Font size reset to fix a bug with Safari 16.0 when letterSpacing is set
      fontSize: 10,
      '&:has(.ui-Code-title)': {
        margin: theme.spacing(2, 'auto'),
        border: `1px solid var(--uidocs-palette-primaryDark-700, ${lightTheme.palette.primaryDark[700]})`,
        borderRadius: theme.shape.borderRadius,
        overflow: 'clip',
        '& .uiCode-copy': {
          top: '56px',
        },
      },
    },
    '& .uiCode-copy-container': {
      // This container is only used in demo and highlight code
      position: 'sticky',
      zIndex: 1,
      top: 0,
    },
    '& .uiCode-copy': {
      cursor: 'pointer',
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'inline-flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      padding: theme.spacing(0.5),
      paddingBottom: '5px', // optical alignment
      fontFamily: lightTheme.typography.fontFamily,
      fontWeight: lightTheme.typography.fontWeightMedium,
      fontSize: lightTheme.typography.pxToRem(12),
      borderRadius: 6,
      border: '1px solid',
      borderColor: alpha(lightTheme.palette.primaryDark[600], 0.5),
      backgroundColor: alpha(lightTheme.palette.primaryDark[800], 0.5),
      color: `var(--uidocs-palette-grey-300, ${lightTheme.palette.grey[300]})`,
      transition: theme.transitions.create(['background', 'borderColor', 'display'], {
        duration: theme.transitions.duration.shortest,
      }),
      '@media (max-width: 640px)': {
        display: 'none',
      },
      '& .uiCode-copied-label': {
        display: 'none',
      },
      '&:hover, &:focus': {
        borderColor: `var(--uidocs-palette-primaryDark-400, ${lightTheme.palette.primaryDark[400]})`,
        backgroundColor: `var(--uidocs-palette-primaryDark-700, ${lightTheme.palette.primaryDark[700]})`,
        color: '#FFF',
        '& .uiCode-copyKeypress': {
          display: 'block',
          // Approximate no hover capabilities with no keyboard
          // https://github.com/w3c/csswg-drafts/issues/3871
          '@media (any-hover: none)': {
            display: 'none',
          },
        },
      },
      '& .uiCode-copyKeypress': {
        display: 'none',
        position: 'absolute',
        right: 34,
      },
      '&[data-copied]': {
        borderColor: `var(--uidocs-palette-primaryDark-400, ${lightTheme.palette.primaryDark[400]})`,
        backgroundColor: `var(--uidocs-palette-primaryDark-700, ${lightTheme.palette.primaryDark[700]})`,
        color: '#fff',
        '& .uiCode-copyKeypress': {
          opacity: 0,
        },
        '& .uiCode-copy-label': {
          display: 'none',
        },
        '& .uiCode-copied-label': {
          display: 'block',
        },
      },
    },
    '& .uiCode-copyKeypress': {
      pointerEvents: 'none',
      userSelect: 'none',
      marginRight: theme.spacing(1.2),
      marginBottom: theme.spacing(0.2),
      whiteSpace: 'nowrap',
      opacity: 0.6,
    },
    '& li': {
      // tight lists https://spec.commonmark.org/0.30/#tight
      marginBottom: 12,
      '& pre': {
        marginTop: theme.spacing(1),
      },
      // loose lists https://spec.commonmark.org/0.30/#loose
      '& > p': {
        marginBottom: theme.spacing(1),
      },
      '& > ul': {
        marginTop: '8px !important'
      }
    },
    '& .feature-list': {
      padding: 0,
      listStyle: 'none',
      '& li': {
        marginBottom: 6,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        '::before': {
          content: `url('/static/branding/pricing/yes-light.svg')`,
          width: '18px',
          height: '18px',
        },
      },
    },
    '& .uiCode-title': {
      padding: theme.spacing(1.5),
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1.5),
      borderBottom: `1px solid var(--uidocs-palette-primaryDark-700, ${lightTheme.palette.primaryDark[700]})`,
      backgroundColor: `var(--uidocs-palette-primaryDark-900, ${lightTheme.palette.primaryDark[900]})`,
      fontFamily: theme.typography.fontFamilyCode,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightBold,
      color: `var(--uidocs-palette-grey-200, ${lightTheme.palette.grey[200]})`,
      '::before': {
        content: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.3333 3.99996H8L7.06 3.05996C6.80667 2.80663 6.46667 2.66663 6.11334 2.66663H2.66667C1.93334 2.66663 1.34 3.26663 1.34 3.99996L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66667 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33329C14.6667 4.59996 14.0667 3.99996 13.3333 3.99996ZM12.6667 12H3.33334C2.96667 12 2.66667 11.7 2.66667 11.3333V5.99996C2.66667 5.63329 2.96667 5.33329 3.33334 5.33329H12.6667C13.0333 5.33329 13.3333 5.63329 13.3333 5.99996V11.3333C13.3333 11.7 13.0333 12 12.6667 12Z' fill='%2399CCF3'/%3E%3C/svg%3E%0A");`,
        width: '16px',
        height: '16px',
      },
      '& + pre': {
        margin: 0,
        border: 'none',
        borderRadius: 0,
      },
    },
  }),
  ({ theme }) => ({
    [`:where(${theme.vars ? '[data-u-ui-color-scheme="dark"]' : '.mode-dark'}) &`]: {
      color: 'rgb(255, 255, 255)',
      '& :not(pre) > code': {
        // inline code block
        color: `var(--uidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        borderColor: alpha(darkTheme.palette.primaryDark[500], .3),
        backgroundColor: `var(--uidocs-palette-grey-800, ${alpha(darkTheme.palette.primary[800], .5)})`,
      },
      '& strong': {
        color: `var(--uidocs-palette-grey-200, ${darkTheme.palette.grey[200]})`,
      },
      '& hr': {
        backgroundColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
      },
      '& a': {
        textDecoration: 'underline',
        color: `var(--uidocs-palette-primary-300, ${darkTheme.palette.secondary[200]})`,
      },
      '& a code': {
        color: `var(--uidocs-palette-primary-light, ${darkTheme.palette.primary[200]})`,
      },
      '& h1, & h2, & h3, & h4, & h5': {
        color: `var(--uidocs-palette-grey-50, ${darkTheme.palette.grey[50]})`,
        '& .anchor-icon, & .comment-link': {
          color: `var(--uidocs-palette-primary-300, ${darkTheme.palette.primaryDark[400]})`,
          '&:hover': {
            color: `var(--uidocs-palette-primary-100, ${darkTheme.palette.primary[100]})`,
            borderColor: `var(--uidocs-palette-primary-900, ${darkTheme.palette.primary[900]})`,
            backgroundColor: alpha(darkTheme.palette.primary[900], 0.6),
          },
        },
      },
      '& p, & ul, & ol': {
        color: `var(--uidocs-palette-grey-300, ${darkTheme.palette.grey[400]})`,
      },
      '& h1 code, & h2 code, & h3 code': {
        color: `var(--uidocs-palette-grey-100, ${darkTheme.palette.grey[200]})`,
      },
      '& .table': { 
        borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
      },
      '& table': {
        '& .required': {
          color: '#a5ffa5',
        },
        '& .optional': {
          color: '#a5b3ff',
        },
        '& .prop-type, & .slot-defaultClass': {
          color: '#ffb6ec',
        },
        '& .prop-default, & .slot-default': {
          borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
        },
      },
      '& td': {
        color: `var(--uidocs-palette-text-tertiary, ${darkTheme.palette.text.tertiary})`,
        borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
        borderRightColor: `var(--uidocs-palette-grey-700, ${darkTheme.palette.grey[700]})`,
        backgroundColor: `var(--uidocs-palette-grey-700, ${darkTheme.palette.grey[900]})`,
      },
      '& th': {
        color: `var(--uidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        borderColor: `var(--uidocs-palette-grey-600, ${darkTheme.palette.grey[600]})`,
        backgroundColor: `var(--uidocs-palette-grey-700, ${darkTheme.palette.grey[800]})`,
        borderRightColor: `var(--uidocs-palette-grey-500, ${darkTheme.palette.grey[600]})`
      },
      '& blockquote': {
        borderColor: `var(--uidocs-palette-primaryDark-700, ${darkTheme.palette.primaryDark[700]})`,
        '&::before': {
          color: `var(--uidocs-palette-primaryDark-500, ${darkTheme.palette.primaryDark[500]})`,
        },
      },
      '& .uiCallout-root': {
        borderColor: `var(--uidocs-palette-primaryDark-700, ${darkTheme.palette.primaryDark[700]})`,
        '& code': {
          backgroundColor: `var(--uidocs-palette-primaryDark-600, ${darkTheme.palette.primaryDark[600]})`,
          borderColor: `var(--uidocs-palette-primaryDark-500, ${darkTheme.palette.primaryDark[500]})`,
        },
        '&.uiCallout-error': {
          color: `var(--uidocs-palette-error-50, ${darkTheme.palette.error[50]})`,
          backgroundColor: alpha(darkTheme.palette.error[700], 0.15),
          borderColor: alpha(darkTheme.palette.error[400], 0.1),
          '& strong': {
            color: `var(--uidocs-palette-error-300, ${darkTheme.palette.error[300]})`,
          },
          '& svg': {
            fill: `var(--uidocs-palette-error-500, ${darkTheme.palette.error[500]})`,
          },
          '& a': {
            color: `var(--uidocs-palette-error-200, ${darkTheme.palette.error[200]})`,
          },
        },
        '&.uiCallout-info': {
          color: `var(--uidocs-palette-grey-300, ${darkTheme.palette.grey[300]})`,
          backgroundColor: alpha(darkTheme.palette.secondary[800], 0.1),
          borderColor: alpha(darkTheme.palette.secondary[900], 0.5),
          '& strong': {
            color: `var(--uidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
          },
          '& svg': {
            fill: `var(--uidocs-palette-grey-400, ${darkTheme.palette.grey[400]})`,
          },
        },
        '&.uiCallout-success': {
          color: `var(--uidocs-palette-success-50, ${darkTheme.palette.success[50]})`,
          backgroundColor: alpha(darkTheme.palette.success[700], 0.12),
          borderColor: alpha(lightTheme.palette.success[400], 0.1),
          '& strong': {
            color: `var(--uidocs-palette-success-200, ${darkTheme.palette.success[200]})`,
          },
          '& svg': {
            fill: `var(--uidocs-palette-success-500, ${darkTheme.palette.success[500]})`,
          },
          '& a': {
            color: `var(--uidocs-palette-success-100, ${darkTheme.palette.success[100]})`,
          },
        },
        '&.uiCallout-warning': {
          color: `var(--uidocs-palette-warning-50, ${darkTheme.palette.warning[50]})`,
          backgroundColor: alpha(darkTheme.palette.warning[700], 0.12),
          borderColor: alpha(darkTheme.palette.warning[400], 0.1),
          '& strong': {
            color: `var(--uidocs-palette-warning-200, ${darkTheme.palette.warning[200]})`,
          },
          '& svg': {
            fill: `var(--uidocs-palette-warning-400, ${darkTheme.palette.warning[400]})`,
          },
          '& a': {
            color: `var(--uidocs-palette-warning-100, ${darkTheme.palette.warning[100]})`,
          },
        },
      },
      '& kbd.key': {
        color: `var(--uidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        backgroundColor: `var(--uidocs-palette-primaryDark-800, ${darkTheme.palette.primaryDark[800]})`,
        border: `1px solid var(--uidocs-palette-primaryDark-600, ${darkTheme.palette.primaryDark[600]})`,
        boxShadow: `inset 0 -2px 0 var(--uidocs-palette-primaryDark-600, ${darkTheme.palette.primaryDark[600]})`,
      },
      '& details': {
        borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
      },
      '& summary': {
        '&:hover': {
          backgroundColor: `var(--uidocs-palette-primaryDark-800, ${darkTheme.palette.primaryDark[800]})`,
        },
      },
      '& .feature-list': {
        '& li': {
          '::before': {
            content: `url('/static/branding/pricing/yes-dark.svg')`,
          },
        },
      },
    },
  }),
);

function handleHeaderClick(event: Event) {
  const selection = document.getSelection();

  if (selection === null) {
    return;
  }

  if (selection.type === 'Range') {
    // Disable the <a> behavior to be able to select text.
    event.preventDefault();
  }
}

export interface MarkdownElementProps {
  className?: string;
  renderedMarkdown?: string;
  children?: React.ReactNode;
}

export const MarkdownElement = React.forwardRef<HTMLDivElement, MarkdownElementProps>(
  function MarkdownElement(props, ref) {
    const { className, renderedMarkdown, ...other } = props;
    const rootRef = React.useRef<HTMLElement>(null);
    const handleRef = useForkRef(rootRef, ref);

    React.useEffect(() => {
      const elements = rootRef.current!.getElementsByClassName('title-link-to-anchor');

      for (let i = 0; i < elements.length; i += 1) {
        elements[i].setAttribute('draggable', 'false');
        elements[i].addEventListener('click', handleHeaderClick);
      }
    }, []);

    const more: React.ComponentProps<typeof Root> = {};

    if (typeof renderedMarkdown === 'string') {
      more.dangerouslySetInnerHTML = { __html: renderedMarkdown };
    }

    return (
      <Root className={clsx('markdown-body', className)} {...more} {...other} ref={handleRef} />
    );
  },
);
