import * as React from 'react';
import clsx from 'clsx';
import { alpha, styled, SxProps } from '@u_ui/u-ui/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@u_ui/u-ui/Divider';
import IconButton from '@u_ui/u-ui/IconButton';
import {
  brandingDarkTheme as darkTheme,
  brandingLightTheme as lightTheme,
} from '@vandlee/docs/branding';

type DescriptionType = 'props' | 'classes' | 'CSS' | 'slots';

const Root = styled('div')<{ ownerState: { type?: DescriptionType } }>(
  ({ theme }) => ({
    position: 'relative',
    marginBottom: 12,
    '& .uiApi-item-header': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8,
      marginLeft: -38,
      lineHeight: 1.5,
    },
    '& .uiApi-item-header-link': {
      minHeight: 26,
      display: 'flex',
      alignItems: 'center',
      scrollMarginTop: 'calc(var(--uidocs-header-height) + 32px)',
    },
    '& .uiApi-item-link-visual': {
      display: 'none',
      flexShrink: 0,
      border: '1px solid',
      borderColor: `var(--uidocs-palette-divider, ${lightTheme.palette.divider})`,
      borderRadius: 8,
      backgroundColor: `var(--uidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
      height: 26,
      width: 26,
      textAlign: 'center',
      lineHeight: '26px',
      '& svg': {
        fill: `var(--uidocs-palette-text-secondary, ${lightTheme.palette.text.secondary})`,
        height: '14px',
        width: '14px',
      },
    },
    '& .uiApi-item-title': {
      marginLeft: 32,
      padding: '2px 6px',
      flexShrink: 0,
      fontWeight: theme.typography.fontWeightSemiBold,
      fontFamily: theme.typography.fontFamilyCode,
      fontSize: theme.typography.pxToRem(13),
      color: `var(--uidocs-palette-primary-600, ${lightTheme.palette.primary[600]})`,
    },
    '& .uiApi-item-content': {
      verticalAlign: 'top',
      paddingBottom: theme.spacing(2),
      p: { marginBottom: theme.spacing(1.5) },
    },
    '& .uiApi-item-note': {
      marginLeft: 2,
      color: `var(--uidocs-palette-success-800, ${lightTheme.palette.success[800]})`,
      fontSize: theme.typography.pxToRem(11),
      fontWeight: theme.typography.fontWeightSemiBold,
      letterSpacing: '.1rem',
      textTransform: 'uppercase',
    },
    '& .uiApi-expend-button': {},
    '& hr': {
      margin: 0,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover, &:target': {
        '.uiApi-item-link-visual': {
          display: 'inline-block',
        },
        '.uiApi-item-title': {
          marginLeft: 6,
        },
        '.uiApi-item-link-visual:hover': {
          cursor: 'pointer',
          backgroundColor: alpha(lightTheme.palette.primary[100], 0.4),
          borderColor: `var(--uidocs-palette-primary-100, ${lightTheme.palette.primary[100]})`,
          '& svg': {
            fill: `var(--uidocs-palette-primary-main, ${lightTheme.palette.primary.main})`,
          },
        },
      },
      '&:target': {
        '.uiApi-item-link-visual': {
          '&>svg': {
            transform: 'rotate(90deg) translateX(-0.5px) translateY(0.1px)',
          },
        },
      },
    },
    '& code.Api-code': {
      ...theme.typography.caption,
      fontFamily: theme.typography.fontFamilyCode,
      fontWeight: theme.typography.fontWeightRegular,
      color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      padding: '1px 4px',
      borderRadius: 6,
      border: '1px solid',
      borderColor: alpha(darkTheme.palette.primary[100], 0.8),
      backgroundColor: `var(--uidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
    },
  }),
  ({ theme }) => ({
    [`:where(${theme.vars ? '[data-u-ui-color-scheme="dark"]' : '.mode-dark'}) &`]: {
      '& .uiApi-item-header': {
        '&>span, &>div': {
          borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
        },
        '& .uiApi-item-title': {
          color: `var(--uidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
        },
        '& .uiApi-item-link-visual': {
          borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
          backgroundColor: alpha(darkTheme.palette.primary[900], 0.5),
          '& svg': {
            fill: `var(--uidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
          },
        },
        '&:hover, &:target': {
          '.uiApi-item-link-visual:hover': {
            borderColor: `var(--uidocs-palette-primary-900, ${darkTheme.palette.primary[900]})`,
            backgroundColor: alpha(darkTheme.palette.primary[900], 0.6),
            '& svg': {
              fill: `var(--uidocs-palette-primary-100, ${darkTheme.palette.primary[100]})`,
            },
          },
        },
        '& .uiApi-item-description': {
          color: `var(--uidocs-palette-grey-500, ${darkTheme.palette.grey[500]})`,
        },
        '& .uiApi-item-note': {
          color: `var(--uidocs-palette-success-400, ${darkTheme.palette.success[400]})`,
        },
      },
      '& code.Api-code': {
        color: `var(--uidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        borderColor: `var(--uidocs-palette-divider, ${darkTheme.palette.divider})`,
        backgroundColor: alpha(darkTheme.palette.primary[900], 0.3),
      },
    },
  }),
);

type ExpandableApiItemProps = {
  children?: React.ReactNode;
  className?: string;
  description?: string;
  displayOption?: 'collapsed' | 'expanded';
  id: string;
  isExtendable?: boolean;
  note?: string;
  sx?: SxProps;
  title: string | React.ReactNode;
  type?: DescriptionType;
};

export default function ExpandableApiItem(props: ExpandableApiItemProps) {
  const {
    children,
    className,
    description,
    displayOption,
    id,
    isExtendable = true,
    note,
    title,
    type,
    ...other
  } = props;

  const [isExtended, setIsExtended] = React.useState(() => displayOption === 'expanded');

  React.useEffect(() => {
    setIsExtended(displayOption === 'expanded');
  }, [displayOption]);

  return (
    <Root
      ownerState={{ type }}
      {...other}
      className={clsx(
        `VandleeApi-item-root${isExtendable ? ' VandleeApi-item-header-extendable' : ''}`,
        className,
      )}
    >
      <div className="uiApi-item-header">
        <div className="uiApi-item-header-link" id={id}>
          <a className="uiApi-item-link-visual" href={`#${id}`} aria-labelledby={id}>
            <svg>
              <use xlinkHref="#anchor-link-icon" />
            </svg>
          </a>
          <span
            className="uiApi-item-title algolia-lvl3" // This className is used by Algolia
          >
            {title}
          </span>
        </div>
        {note && <span className="uiApi-item-note">{note}</span>}
        {isExtendable && (
          <IconButton
            onClick={() => setIsExtended((prev) => !prev)}
            className="uiApi-expend-button"
            aria-label={isExtended ? 'Collapse' : 'Expand'}
            size="small"
            sx={{ p: 0, ml: 'auto', borderRadius: '6px' }}
          >
            {isExtended ? (
              <KeyboardArrowUpIcon sx={{ color: 'grey.500' }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ color: 'grey.500' }} />
            )}
          </IconButton>
        )}
      </div>
      {isExtended && <div className={`VandleeApi-item-content`}>{isExtended && children}</div>}
      <Divider />
    </Root>
  );
}

export const ApiItemContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
