import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Box from '@u_ui/u-ui/Box';
import Collapse from '@u_ui/u-ui/Collapse';
import Chip from '@u_ui/u-ui/Chip';
import IconButton from '@u_ui/u-ui/IconButton';
import Typography from '@u_ui/u-ui/Typography';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import { Link } from '@vandlee/docs/Link';
import ROUTES from 'docs/src/route';
import { ClickAwayListener } from '@u_ui/u-ui';
import { Menu } from '@mui/icons-material';
import { useTranslate } from '@vandlee/docs/i18n';

const Anchor = styled('a')<{ component?: React.ElementType; noLinkStyle?: boolean }>(
  ({ theme }) => [
    {
      ...theme.typography.body2,
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: 'none',
      border: 'none',
      width: '100%',
      backgroundColor: 'transparent',
      color: (theme.vars || theme).palette.text.secondary,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
      borderRadius: theme.spacing(1),
      transition: theme.transitions.create('background'),
      '&:hover, &:focus-visible': {
        backgroundColor: (theme.vars || theme).palette.grey[100],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
    theme.applyDarkStyles({
      color: '#fff',
      '&:hover, &:focus-visible': {
        backgroundColor: (theme.vars || theme).palette.primaryDark[700],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    }),
  ],
);

const UList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

const PRODUCTS = [
  {
    name: 'U Ui',
    description: 'Ready-to-use foundational React components, free forever.',
    href: ROUTES.productu_ui,
    chip: 'Beta'
  },
];

const DOCS = [
  {
    name: 'U-Ui',
    description: "",
    href: ROUTES['docs-u_ui-u-ui'],
    chip: 'Beta'
  },
];

export default function HeaderNavDropdown() {
  const t = useTranslate();
  const [open, setOpen] = React.useState(false);
  const [productsOpen, setProductsOpen] = React.useState(true);
  const [docsOpen, setDocsOpen] = React.useState(false);
  const hambugerRef = React.useRef<HTMLButtonElement>(null);
  return (
    <React.Fragment>
      <IconButton
        color="contrast"
        aria-label="Menu"
        ref={hambugerRef}
        onClick={() => setOpen((value) => !value)}
      >
        <Menu />
      </IconButton>
      <ClickAwayListener
        onClickAway={(event) => {
          if (!hambugerRef.current!.contains(event.target as Node)) {
            setOpen(false);
          }
        }}
      >
        <Collapse
          in={open}
          sx={(theme) => ({
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            boxShadow: `0px 16px 20px rgba(170, 180, 190, 0.3)`,
            borderBottom: '1px solid',
            borderColor: theme.palette.text.primary,
            ...theme.applyDarkStyles({
              boxShadow: '0px 16px 20px rgba(0, 0, 0, 0.8)',
            }),
          })}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: 'background.default',
              maxHeight: 'calc(100vh - 56px)',
              overflow: 'auto',
            }}
          >
            <UList
              sx={(theme) => ({
                '& ul': {
                  borderLeft: '1px solid',
                  borderColor: 'grey.100',
                  ...theme.applyDarkStyles({
                    borderColor: 'primaryDark.700',
                  }),
                  pl: 1,
                  pb: 1,
                  ml: 1,
                },
              })}
            >
              <li>
                <Anchor
                  as="button"
                  onClick={() => setProductsOpen((bool) => !bool)}
                  sx={{ justifyContent: 'space-between' }}
                >
                  Products
                  <KeyboardArrowDownRounded
                    color="primary"
                    sx={{
                      transition: '0.3s',
                      transform: productsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                  />
                </Anchor>
                <Collapse in={productsOpen}>
                  <UList>
                    {PRODUCTS.map((item) => (
                      <li key={item.name}>
                        <Anchor
                          href={item.href}
                          as={Link}
                          noLinkStyle
                          sx={{ flexDirection: 'column', alignItems: 'initial' }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}
                          >
                            {item.name}
                            {item.chip ? (
                              <Chip
                                size="small"
                                label={item.chip}
                                color="primary"
                                variant="outlined"
                                sx={{
                                  fontSize: '.625rem',
                                  fontWeight: 'semiBold',
                                  textTransform: 'uppercase',
                                  letterSpacing: '.04rem',
                                  height: '16px',
                                  '& .MuiChip-label': {
                                    px: '4px',
                                  },
                                }}
                              />
                            ) : null}
                          </Box>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                          </Typography>
                        </Anchor>
                      </li>
                    ))}
                  </UList>
                </Collapse>
              </li>
              <li>
                <Anchor
                  as="button"
                  onClick={() => setDocsOpen((bool) => !bool)}
                  sx={{ justifyContent: 'space-between' }}
                >
                  Docs
                  <KeyboardArrowDownRounded
                    color="primary"
                    sx={{
                      transition: '0.3s',
                      transform: docsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                    }}
                  />
                </Anchor>
                <Collapse in={docsOpen}>
                  <UList>
                    {DOCS.map((item) => (
                      <li key={item.name}>
                        <Anchor
                          href={item.href}
                          as={Link}
                          noLinkStyle
                          sx={{ flexDirection: 'column', alignItems: 'initial' }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}
                          >
                            {item.name}
                            {item.chip ? (
                              <Chip
                                size="small"
                                label={item.chip}
                                color="primary"
                                variant="outlined"
                                sx={{
                                  fontSize: '.625rem',
                                  fontWeight: 'semiBold',
                                  textTransform: 'uppercase',
                                  letterSpacing: '.04rem',
                                  height: '16px',
                                  '& .MuiChip-label': {
                                    px: '4px',
                                  },
                                }}
                              />
                            ) : null}
                          </Box>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.description}
                          </Typography>
                        </Anchor>
                      </li>
                    ))}
                  </UList>
                </Collapse>
              </li>
              {/* <li>
                <Anchor href={ROUTES.pricing} as={Link} noLinkStyle>
                  Pricing
                </Anchor>
              </li> */}
              <li>
                <Anchor href={ROUTES.about} as={Link} noLinkStyle>
                  {t('about-us')}
                </Anchor>
              </li>
              {/* <li>
                <Anchor href={ROUTES.blog} as={Link} noLinkStyle>
                  Blog
                </Anchor>
              </li> */}
            </UList>
          </Box>
        </Collapse>
      </ClickAwayListener>
    </React.Fragment>
  );
}
