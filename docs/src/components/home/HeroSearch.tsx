import * as React from 'react'
import { Box, Button, Collapse, styled, ThemeProvider, Typography } from '@u_ui/u-ui'
import getTheme from 'docs/src/modules/utils/getLightTheme'
import { VandleeProductId } from 'docs/src/modules/utils/getProductInfoFromUrl';
import { convertProductIdToName } from 'docs/src/modules/components/AppSearch';
import Link from 'next/link';
import { useColorSchemeShim } from 'docs/src/modules/components/ThemeContext';

const SearchBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: '100%',
    maxWidth: 600,
    overflow: 'hidden',
    colorScheme: 'light'
}))

const products: { productId: VandleeProductId; productCategory: string }[] = [
    { productId: 'html', productCategory: 'u-docs' },
    { productId: 'u-ui', productCategory: 'u_ui' },
];

// TODO: Añadir toda esta wea

/* const products: { productId: VandleeProductId; productCategory: string }[] = [
    { productId: 'html', productCategory: 'u-docs' },
    { productId: 'base-ui', productCategory: 'u_ui' },
    { productId: 'u-ui', productCategory: 'u_ui' },
    { productId: 'javascript', productCategory: 'u-docs' },
    { productId: 'php', productCategory: 'u-docs' },
    { productId: 'python', productCategory: 'u-docs' }
]; */

export default function HeroSearch() {
    const boxRef = React.useRef<HTMLDivElement | null>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [inputValue, setInputValue] = React.useState('');
    const [filteredProducts, setFilteredProducts] = React.useState<typeof products>([]);

    const { mode, systemMode } = useColorSchemeShim();

    const normalizeText = (text: string | undefined | null) => (text ?? '').toLowerCase().replace(/\s+/g, '-');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = normalizeText(event.target.value.trim());
        setInputValue(event.target.value);

        const results = products.filter(({ productId }) => {
            const productName = convertProductIdToName(productId) ?? ""; 
            const normalizedProductName = normalizeText(productName);

            return (
                normalizeText(productId).includes(query) || 
                normalizedProductName.includes(query) || 
                (productName?.toLowerCase() ?? "").includes(query)
            );
        });

        setFilteredProducts(results);
        setAnchorEl(query.length > 0 ? boxRef.current : null);
    };
    
    const reverseTheme = (theme: string | null) => {
        if (theme === 'dark') {
            return 'light';
        }

        return 'dark';
    }

    return (
        <ThemeProvider theme={(outerTheme) => getTheme(mode === 'system' ? reverseTheme(systemMode) : reverseTheme(mode), outerTheme)}>
            <Box
                sx={{
                    maxWidth: 600,
                    px: .75,
                    py: 1,
                    paddingLeft: 1,
                    width: '100%',
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    display: 'flex',
                    gap: 1,
                    position: 'relative'
                }}
                ref={boxRef}
            >
                <input
                    style={{
                        flex: 1,
                        fontSize: '1rem',
                        color: mode === 'dark' ? '#000' : '#FFF',
                        background: 'transparent',
                        border: 0,
                        outline: 0,
                        boxSizing: 'border-box',
                        colorScheme: mode === 'dark' ? 'light' : 'dark'
                    }} 
                    type="search" 
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Busca documentación...' 
                />
                <Button color="contrast" variant="contained">
                    Buscar
                </Button>
            </Box>
            <Collapse 
                sx={{
                    width: '100%',
                    mt: 1,
                    maxWidth: 600,
                    borderRadius: 1,
                    overflow: 'hidden'
                }} 
                in={Boolean(anchorEl)} 
                unmountOnExit
            >
                <SearchBox>
                    <Box sx={{ width: '100%', maxWidth: 600, maxHeight: '50vh', overflowY: 'auto' }}>
                        <Box sx={{ display: 'flex', p: 1.5, flexFlow: 'column', gap: 1.5}}>
                            {filteredProducts.length > 0 && inputValue.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Button 
                                        sx={{ textTransform: 'initial' }} 
                                        fullWidth 
                                        variant="outlined" 
                                        key={product.productId}
                                        LinkComponent={Link}
                                        href={`/${product.productCategory}/${product.productId}`}
                                    >
                                        {convertProductIdToName(product)}
                                    </Button>
                                ))
                            ):(
                                <Box sx={{ px: 1, py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Typography>No hay resultados</Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                </SearchBox>
            </Collapse>
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 2, px: 1}}>
                <svg 
                    style={{
                        width: '100%',
                        maxWidth: 300,
                    }}
                    viewBox="0 0 300 63" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line y1="-0.5" x2="34.8281" y2="-0.5" transform="matrix(0.775235 0.631673 0.631673 -0.775235 273 3)" stroke="currentColor"/>
                    <line x1="154.5" y1="13" x2="154.5" y2="63" stroke="currentColor"/>
                    <line x1="211.454" y1="13.7894" x2="224.454" y2="41.7894" stroke="currentColor"/>
                    <line x1="88.4851" y1="14.1213" x2="81.4851" y2="42.1213" stroke="currentColor"/>
                    <line y1="-0.5" x2="41.6173" y2="-0.5" transform="matrix(-0.816968 0.576683 0.576683 0.816968 35 1)" stroke="currentColor"/>
                    <path d="M46.7457 17.2479C48.5168 15.8029 53.4529 16.7909 53.4529 16.7909C53.4529 16.7909 48.9587 14.9704 47.9006 12.5887C46.8425 10.2069 47.2787 6.54709 47.2787 6.54709C47.2787 6.54709 46.5637 9.43134 43.4633 11.4888C40.3628 13.5462 37.0348 12.7213 37.0348 12.7213C37.0348 12.7213 40.5847 13.6012 42.3084 16.1479C44.0321 18.6947 43.209 22.9651 43.209 22.9651C43.209 22.9651 44.9745 18.6928 46.7457 17.2479Z" stroke="currentColor"/>
                    <path d="M254.726 15.2741C255.631 13.1751 260.466 11.7749 260.466 11.7749C260.466 11.7749 255.639 12.2327 253.601 10.6075C251.564 8.98235 250.263 5.53392 250.263 5.53392C250.263 5.53392 250.959 8.42278 249.157 11.6784C247.355 14.934 244.022 15.7372 244.022 15.7372C244.022 15.7372 247.577 14.8805 250.281 16.345C252.985 17.8096 254.225 21.9782 254.225 21.9782C254.225 21.9782 253.821 17.3732 254.726 15.2741Z" stroke="currentColor"/>
                </svg>
            </Box>
        </ThemeProvider>
    )
}
