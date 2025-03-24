import * as React from 'react';
import NextLink from 'next/link';
import { styled, alpha, Theme } from '@u_ui/u-ui/styles';
import Box from '@u_ui/u-ui/Box';
import Typography from '@u_ui/u-ui/Typography';
import MenuList, { MenuListProps } from '@u_ui/u-ui/MenuList';
import MenuItem, { MenuItemProps } from '@u_ui/u-ui/MenuItem';
import ROUTES from 'docs/src/route';
import PageContext from 'docs/src/modules/components/PageContext';
import { Link } from '@vandlee/docs/Link';
import SvgU_UiLogomark from 'docs/src/icons/SvgU-Ui';
import SvgJavaScriptLogomark from 'docs/src/icons/SvgJavascript';
import SvgPythonLogomark from 'docs/src/icons/SvgPython';
import SvgPHPLogomark from 'docs/src/icons/SvgPHP';
import SvgHTMLLogomark from 'docs/src/icons/SvgHTML';
/* import SvgBaseUiLogo from 'docs/src/icons/SvgBaseUiLogo';
import SvgToolpadCoreLogo from 'docs/src/icons/SvgToolpadCoreLogo'; */
/* import BackupTableRoundedIcon from '@mui/icons-material/BackupTableRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import BrushIcon from '@mui/icons-material/Brush'; */

/* const iconStyles = (theme: Theme) => ({
  fontSize: '.875rem',
  color: (theme.vars || theme).palette.primary.main,
}); */

const logoColor = (theme: Theme) => ({
  '& path': {
    ...theme.applyDarkStyles({
      fill: (theme.vars || theme).palette.primary[400],
    }),
  },
});

const NavLabel = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(0.5, 1, 0.5, 1),
    fontSize: theme.typography.pxToRem(11),
    fontWeight: theme.typography.fontWeightSemiBold,
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    color: (theme.vars || theme).palette.text.tertiary,
    '&:hover': {
      color: (theme.vars || theme).palette.text.primary
    }
}));

interface ProductItemProps extends MenuItemProps {
    active?: boolean;
    chip?: React.ReactNode;
    description?: string;
    href: string;
    icon?: React.ReactNode;
    name: string;
}

function ProductItem({
    active,
    chip,
    description,
    href,
    icon,
    name,
    sx = [],
    ...other
}: ProductItemProps) {
  return (
    <MenuItem
        component={NextLink} // using the Next link directly here as it accepts, as opposed to the docs Link, passing role="menuitem"
        role="menuitem"
        href={href}
        sx={[
            (theme) => ({
            p: 1,
            pl: '6px',
            display: 'flex',
            alignItems: 'start',
            gap: '8px',
            flexGrow: 1,
            backgroundColor: active ? alpha(theme.palette.primary[50], 0.8) : undefined,
            border: '1px solid',
            borderColor: active ? 'primary.100' : 'transparent',
            borderRadius: '8px',
            transition: '100ms ease-in background-color, border',
            textDecorationLine: 'none',
            '&:hover': {
                backgroundColor: active ? alpha(theme.palette.primary[50], 0.8) : 'grey.50',
                borderColor: 'divider',
            },
            '&.ui-focusVisible': {
                backgroundColor: active ? (theme.vars || theme).palette.primary[50] : 'transparent',
            },
            ...theme.applyDarkStyles({
                backgroundColor: active ? alpha(theme.palette.primary[900], 0.2) : undefined,
                borderColor: active ? alpha(theme.palette.primary[300], 0.2) : 'transparent',
                '&:hover': {
                backgroundColor: active
                    ? alpha(theme.palette.primary[900], 0.3)
                    : alpha(theme.palette.primaryDark[700], 0.5),
                },
                '&.ui-focusVisible': {
                backgroundColor: active ? alpha(theme.palette.primary[900], 0.5) : 'transparent',
                },
            }),
            }),
            // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
            ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
    >
        <Box
            sx={{
            height: 21,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            {icon}
        </Box>
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Typography color="text.primary" variant="body2" fontWeight="semiBold">
                    {name}
                </Typography>
                {chip}
            </Box>
            <Typography sx={{ textWrap: 'auto'}} color="text.secondary" fontSize=".813rem">
                {description}
            </Typography>
        </div>
    </MenuItem>
  );
}

// Función para generar el href dinámicamente
const generateHref = (productCategory: string, productId: string) => `/${productCategory}/${productId}`;


const products = [
  {
    id: 'u-ui',
    name: 'U-Ui',
    description: 'Diseño original.',
    icon: <SvgU_UiLogomark height={24} sx={logoColor} />,
    category: 'u_ui',
  },
  {
    id: 'html',
    name: 'HTML',
    description: 'Estructura y semántica web.',
    icon: <SvgHTMLLogomark height={21} />, // Reemplazar con el ícono correcto
    category: 'u-docs',
    subcategory: 'markup-languages',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Interactividad web.',
    icon: <SvgJavaScriptLogomark height={21} />,
    category: 'u-docs',
    subcategory: 'programming-languages',
  },
  {
    id: 'php',
    name: 'PHP',
    description: 'Backend web dinámico.',
    icon: <SvgPHPLogomark height={15} />,
    category: 'u-docs',
    subcategory: 'programming-languages',
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Potencia y simplicidad. (IA)',
    icon: <SvgPythonLogomark height={21} />,
    category: 'u-docs',
    subcategory: 'programming-languages',
  },
];

const contentMap: Record<string, { label: string, href: string, content: typeof products }[]> = {
  'u-docs': [
    {
      label: 'Lenguajes de marcado y estilos',
      href: '/u-docs/markup-languages/',
      content: products.filter(p => p.category === 'u-docs' && p.subcategory === 'markup-languages'),
    },
    {
      label: 'Lenguajes de programación',
      href: '/u-docs/programming-languages/',
      content: products.filter(p => p.category === 'u-docs' && p.subcategory === 'programming-languages'),
    },
  ],
  'u_ui': [{ label: "u_ui", href: "/u_ui/", content: products.filter(p => p.category === 'u_ui') }],
}

const VandleeProductSelector = React.forwardRef(function VandleeProductSelector(
  { type = 'products', ...props }: MenuListProps<'div'> & { type?: 'products' | 'u_ui' | 'u-docs'},
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const pageContext = React.useContext(PageContext);

  const selectedContent = contentMap[type] || [];

  return (
    <MenuList
      {...props}
      component="div"
      ref={forwardedRef}
      sx={{
        p: 1,
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, minmax(0, 1fr))',
          sm: 'repeat(2, minmax(0, 1fr))',
        },
        gap: '4px',
        borderBottom: type === 'products' ? '1px solid' : undefined,
        borderColor: type === 'products' ? 'divider' : undefined
      }}
    >
      
      {selectedContent.map(({ label, href, content}) => (
        <React.Fragment key={label}> 
          <Box
            key={`${label} Components`}
            role="none"
            sx={{
              gridColumn: {
                xs: '1 / span 1',
                sm: '1 / span 2',
              },
            }}
          >
            <Link href={href}>
              <NavLabel>{label}</NavLabel>
            </Link>
          </Box>
          {content.map(({ id, name, description, icon, category }) => (
            <ProductItem
              key={id}
              name={name}
              description={description}
              href={generateHref(category, id)}
              icon={icon}
              active={pageContext.productId === id}
            />
          ))}
        </React.Fragment>
      ))}
    </MenuList>
  );
});

export default VandleeProductSelector;