import * as React from 'react';
import clsx from 'clsx';
import { alpha, styled, SxProps } from '@yushii/u-ui/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@yushii/u-ui/Divider';
import IconButton from '@yushii/u-ui/IconButton';
import {
  brandingDarkTheme as darkTheme,
  brandingLightTheme as lightTheme,
} from '@yushii/docs/branding';

type DescriptionType = 'props' | 'classes' | 'CSS' | 'slots';

const Root = styled('div')<{ ownerState: { type?: DescriptionType } }>(
  ({ theme }) => ({
    position: 'relative',
    marginBottom: 12,
    '& .YushiiApi-item-header': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 8,
      marginLeft: -38,
      lineHeight: 1.5,
    },
    '& .YushiiApi-item-header-link': {
      minHeight: 26,
      display: 'flex',
      alignItems: 'center',
      scrollMarginTop: 'calc(var(--YushiiDocs-header-height) + 32px)',
    },
    '& .YushiiApi-item-link-visual': {
      display: 'none',
      flexShrink: 0,
      border: '1px solid',
      borderColor: `var(--yushiidocs-palette-divider, ${lightTheme.palette.divider})`,
      borderRadius: 8,
      backgroundColor: `var(--yushiidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
      height: 26,
      width: 26,
      textAlign: 'center',
      lineHeight: '26px',
      '& svg': {
        fill: `var(--yushiidocs-palette-text-secondary, ${lightTheme.palette.text.secondary})`,
        height: '14px',
        width: '14px',
      },
    },
    '& .YushiiApi-item-title': {
      marginLeft: 32,
      padding: '2px 6px',
      flexShrink: 0,
      fontWeight: theme.typography.fontWeightSemiBold,
      fontFamily: theme.typography.fontFamilyCode,
      fontSize: theme.typography.pxToRem(13),
      color: `var(--yushiidocs-palette-primary-600, ${lightTheme.palette.primary[600]})`,
    },
    '& .YushiiApi-item-content': {
      verticalAlign: 'top',
      paddingBottom: theme.spacing(2),
      p: { marginBottom: theme.spacing(1.5) },
    },
    '& .YushiiApi-item-note': {
      marginLeft: 2,
      color: `var(--yushiidocs-palette-success-800, ${lightTheme.palette.success[800]})`,
      fontSize: theme.typography.pxToRem(11),
      fontWeight: theme.typography.fontWeightSemiBold,
      letterSpacing: '.1rem',
      textTransform: 'uppercase',
    },
    '& .YushiiApi-expend-button': {},
    '& hr': {
      margin: 0,
    },
    [theme.breakpoints.up('lg')]: {
      '&:hover, &:target': {
        '.YushiiApi-item-link-visual': {
          display: 'inline-block',
        },
        '.YushiiApi-item-title': {
          marginLeft: 6,
        },
        '.YushiiApi-item-link-visual:hover': {
          cursor: 'pointer',
          backgroundColor: alpha(lightTheme.palette.primary[100], 0.4),
          borderColor: `var(--yushiidocs-palette-primary-100, ${lightTheme.palette.primary[100]})`,
          '& svg': {
            fill: `var(--yushiidocs-palette-primary-main, ${lightTheme.palette.primary.main})`,
          },
        },
      },
      '&:target': {
        '.YushiiApi-item-link-visual': {
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
      color: `var(--yushiidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      padding: '1px 4px',
      borderRadius: 6,
      border: '1px solid',
      borderColor: alpha(darkTheme.palette.primary[100], 0.8),
      backgroundColor: `var(--yushiidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
    },
  }),
  ({ theme }) => ({
    [`:where(${theme.vars ? '[data-yushii-color-scheme="dark"]' : '.mode-dark'}) &`]: {
      '& .YushiiApi-item-header': {
        '&>span, &>div': {
          borderColor: `var(--yushiidocs-palette-divider, ${darkTheme.palette.divider})`,
        },
        '& .YushiiApi-item-title': {
          color: `var(--yushiidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
        },
        '& .YushiiApi-item-link-visual': {
          borderColor: `var(--yushiidocs-palette-divider, ${darkTheme.palette.divider})`,
          backgroundColor: alpha(darkTheme.palette.primary[900], 0.5),
          '& svg': {
            fill: `var(--yushiidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
          },
        },
        '&:hover, &:target': {
          '.YushiiApi-item-link-visual:hover': {
            borderColor: `var(--yushiidocs-palette-primary-900, ${darkTheme.palette.primary[900]})`,
            backgroundColor: alpha(darkTheme.palette.primary[900], 0.6),
            '& svg': {
              fill: `var(--yushiidocs-palette-primary-100, ${darkTheme.palette.primary[100]})`,
            },
          },
        },
        '& .YushiiApi-item-description': {
          color: `var(--yushiidocs-palette-grey-500, ${darkTheme.palette.grey[500]})`,
        },
        '& .YushiiApi-item-note': {
          color: `var(--yushiidocs-palette-success-400, ${darkTheme.palette.success[400]})`,
        },
      },
      '& code.Api-code': {
        color: `var(--yushiidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        borderColor: `var(--yushiidocs-palette-divider, ${darkTheme.palette.divider})`,
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
        `YushiiApi-item-root${isExtendable ? ' YushiiApi-item-header-extendable' : ''}`,
        className,
      )}
    >
      <div className="YushiiApi-item-header">
        <div className="YushiiApi-item-header-link" id={id}>
          <a className="YushiiApi-item-link-visual" href={`#${id}`} aria-labelledby={id}>
            <svg>
              <use xlinkHref="#anchor-link-icon" />
            </svg>
          </a>
          <span
            className="YushiiApi-item-title algolia-lvl3" // This className is used by Algolia
          >
            {title}
          </span>
        </div>
        {note && <span className="YushiiApi-item-note">{note}</span>}
        {isExtendable && (
          <IconButton
            onClick={() => setIsExtended((prev) => !prev)}
            className="YushiiApi-expend-button"
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
      {isExtended && <div className={`YushiiApi-item-content`}>{isExtended && children}</div>}
      <Divider />
    </Root>
  );
}

export const ApiItemContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
