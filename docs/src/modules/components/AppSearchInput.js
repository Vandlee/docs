import { Search } from '@mui/icons-material'
import { Backdrop, Box, Button, Chip, Fade, Grow, Modal, Typography } from '@u_ui/u-ui'
import React, { useContext, useEffect } from 'react';
import PageContext from './PageContext';
import { useTranslate, useTranslations, useUserLanguage } from '@vandlee/docs/i18n';
import Link from 'next/link';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) !important',
    width: '100%',
    maxWidth: 550,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    backgroundImage: 'none',
    borderRadius: '11.6px',
    height: "100%",
    maxHeight: '70dvh',
    display: 'flex',
    flexFlow: 'column',
    overflow: 'hidden'
};

/* const flattenPages = (pages, translations) => {
    const result = {};
    
    const traversePages = (pageItems, parentContext = { categories: [], subcategories: [] }) => {
        pageItems.forEach(page => {
            const pathname = page.pathname;

            // Determine category and subcategory
            let newContext = { ...parentContext };
            
            // If there's a subheader, use it as a category
            if (page.subheader) {
                newContext.categories = [page.subheader];
                newContext.subcategories = [];
            }
            
            // If there's a title and no existing category, use it
            if (page.title && newContext.categories.length === 0) {
                newContext.categories = [page.title];
            }

            // Add the current page to results
            result[pathname] = {
                pathname: pathname,
                category: newContext.categories.length > 0 ? newContext.categories[0] : null,
                subcategory: newContext.subcategories.length > 0 ? newContext.subcategories[0] : null,
            };

            // Recursively traverse children
            if (page.children) {
                // Update context for children
                const childContext = {
                    categories: newContext.categories,
                    subcategories: page.title ? [page.title] : newContext.subcategories
                };
                
                traversePages(page.children, childContext);
            }
        });
    };

    traversePages(pages);
    return result;
}; */

const flattenPages = (pages, translations) => {
    const result = {};
    
    const traversePages = (pageItems, parentCategories = []) => {
        pageItems.forEach(page => {
            // Si la página tiene `children`, no la agregamos al resultado
            if (page.children) {
                // Pero sí recorremos sus hijos para obtener las páginas sin `children`
                const newParentCategories = page.subheader 
                    ? [...parentCategories, page.subheader]
                    : (page.pathname 
                        ? [...parentCategories, page.pathname] 
                        : parentCategories);
                
                traversePages(page.children, newParentCategories);
                return; // Omitimos la página padre
            }

            const pathname = page.pathname;
            const translatedTitle = translations[pathname] || page.title || pathname;
            
            // Traducir categorías principales
            const translatedParentCategories = parentCategories.map(parent => {
                let translation = translations[parent] || 
                    translations[parent.toLowerCase()] ||
                    translations[parent.replace(/\s+/g, '-').toLowerCase()] ||
                    parent;
                
                return { parent, translation };
            });

            const category = translatedParentCategories.map(({ parent }) => parent);
            const translatedCategory = translatedParentCategories.map(({ translation }) => translation);

            // Agregar solo páginas sin `children`
            result[pathname] = {
                title: translatedTitle,
                category,
                translatedCategory
            };
        });
    };

    traversePages(pages);
    return result;
};


export default function AppSearchInput() {
    const lang = useUserLanguage();
    const [query, setQuery] = React.useState("");
    const translationsData = useTranslations();

    const { activePageParents, pages, productIdentifier } = React.useContext(PageContext);

    const Logo = productIdentifier.logo;

    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const translations = translationsData[lang]?.pages || translationsData['es'].pages;

    const flattenedPages = React.useMemo(() => 
        flattenPages(pages, translations),
        [pages, translations, lang]
    );

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const results = React.useMemo(() => {
        if (!inputValue.trim()) return [];
    
        const searchTerm = inputValue.toLowerCase();
    
        return Object.entries(flattenedPages).filter(([link, pageInfo]) => {
            // Verifica si inputValue está en alguna categoría o subcategoría
            const categoryMatch = pageInfo.category.some(cat => cat.toLowerCase().includes(searchTerm));
            const translatedCategoryMatch = pageInfo.translatedCategory.some(transCat => transCat.toLowerCase().includes(searchTerm));
    
            return (
                link.toLowerCase().includes(searchTerm) ||
                pageInfo.title.toLowerCase().includes(searchTerm) ||
                categoryMatch ||
                translatedCategoryMatch
            );
        });
    }, [flattenedPages, inputValue]);

    return (
        <React.Fragment>
            <Button onClick={handleOpen} sx={{ minWidth: 175 }} endIcon={<Search />} variant="outlined" size="small">
                <Typography color="textDisabled" align='left' sx={{ flex: 1}} fontWeight={500}>{`Buscar en ${productIdentifier.name}`}</Typography>
            </Button>
            <Modal
                aria-labelledby="Modal de búsqueda"
                aria-describedby="Búsca dentro del producto que estás viendo."
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div style={{ padding: 16}}>
                            <input
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    fontSize: '1rem',
                                    color: '#FFF',
                                    background: 'transparent',
                                    border: '1px solid rgba(224, 224, 224, 0.325)',
                                    borderRadius: '11.6px',
                                    padding: 12,
                                    outline: 0,
                                    boxSizing: 'border-box',
                                    colorScheme: 'dark',
                                }} 
                                type="search" 
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder={`Buscar en ${productIdentifier.name}`} 
                            />
                        </div>
                        <Box
                            sx={{
                                flex: 1,
                                overflowY: 'auto',
                            }}
                        >
                            {inputValue.length > 0 ? (
                                <Box 
                                    sx={{
                                        width: '100%',
                                        flex: 1,
                                        display: 'flex',
                                        flexFlow: 'column',
                                        p: 2,
                                        alignItems: 'center',
                                        gap: 1
                                    }}
                                >
                                    {results.map(([link, { title, translatedCategory }]) => {
                                        return (
                                            <Button onClick={handleClose} color="neutral" variant="outlined" sx={{ flexFlow: 'column' }} LinkComponent={Link} href={link} fullWidth key={link}>
                                                <Typography width="100%" textAlign="left">{title}</Typography>
                                                <Box display="flex" gap={1} justifyContent='flex-end' width="100%">
                                                    {translatedCategory[0] && <Chip size="small" variant="outlined" label={translatedCategory[0]} />}
                                                    {translatedCategory[1] && <Chip size="small" variant="outlined" label={translatedCategory[1]} />}           
                                                </Box>
                                            </Button>
                                        )
                                    })}
                                </Box>
                            ) : (
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    flex: 1,
                                    display: 'flex',
                                    flexFlow: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Logo />
                                    {productIdentifier.name}
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </React.Fragment>   
    )
}
