import { Search } from '@mui/icons-material'
import { Backdrop, Box, Button, Chip, Fade, Grow, Modal, styled, Typography } from '@u_ui/u-ui'
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

const HighLightedText = ({ text, searchTerm, component = 'span', fontSize = 16, textAlign = "left", width = 'auto' }) => {
    
    const Default = <Typography width={width} textAlign={textAlign} fontSize={fontSize} component={component}>{text}</Typography>;
    
    if (!searchTerm || !text) return Default;
    
    const searchTermLower = searchTerm.toLowerCase();
    const textLower = text.toLowerCase();
    
    // Si no hay coincidencia, devolver el texto original con formato predeterminado
    if (!textLower.includes(searchTermLower)) return Default;
    
    // Dividir el texto en partes que coinciden y no coinciden
    const parts = [];
    let lastIndex = 0;
    let index = textLower.indexOf(searchTermLower);
    
    while (index !== -1) {
        // Añadir texto antes de la coincidencia
        if (index > lastIndex) {
            parts.push({
                text: text.substring(lastIndex, index),
                match: false
            });
        }
        
        // Añadir la coincidencia
        parts.push({
            text: text.substring(index, index + searchTermLower.length),
            match: true
        });
        
        lastIndex = index + searchTermLower.length;
        index = textLower.indexOf(searchTermLower, lastIndex);
    }
    
    // Añadir el resto del texto después de la última coincidencia
    if (lastIndex < text.length) {
        parts.push({
            text: text.substring(lastIndex),
            match: false
        });
    }
    
    return (
        <Typography width={width} textAlign={textAlign} fontSize={fontSize} component={component}>
            {parts.map((part, i) => 
                part.match ? (
                    <Typography 
                        key={i}
                        component={component} 
                        color="secondary" 
                        fontWeight={500}
                        fontSize={fontSize}
                        display="inline"
                    >
                        {part.text}
                    </Typography>
                ) : part.text
            )}
        </Typography>
    );
}

const ThreadDetail = styled('div')(({ theme }) => ({
    width: 13,
    height: 18,
    color: theme.palette.grey[500],
    borderLeft: '2px solid',
    borderBottom: '2px solid',
    borderColor: 'currentcolor',
    borderBottomLeftRadius: 8,
    marginTop: -15,
    marginRight: -2,
    position: 'relative',
    fontSize: 1,
    '&::before': {
        content: '""',
        width: 6,
        height: 6,
        borderRadius: 100,
        background: 'currentColor',
        position: 'absolute',
        bottom: -4,
        right: -3,
    }
}))

const PageThread = (props) => {
    const { i, page, inputValue } = props;
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'row',
                gap: 1, 
                alignItems: 'center',
                color: "text.disabled",
                pl: 1,
                pb: .5,
                marginLeft: i > 0 ? (i - 1) * 3.5 : -1
            }}
        >
            {i > 0 && <ThreadDetail />}
            <HighLightedText text={page} fontSize={14} searchTerm={inputValue} />
        </Box>
    )
}


export default function AppSearchInput() {
    const lang = useUserLanguage();
    const inputRef = React.useRef(null);
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

    React.useEffect(() => {
        setTimeout(() => {
            if (open && inputRef.current) {
                inputRef.current.focus();
            }
        }, 100)
    }, [open])

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
                disableAutoFocus={false}
                disableEnforceFocus={false}
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
                                    ':focus': {
                                        outline: '2px solid #FFF'
                                    }
                                }} 
                                autoFocus
                                ref={inputRef}
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
                                                <HighLightedText width='100%' searchTerm={inputValue} textAlign="left" text={title} fontSize={20} />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexFlow: 'column',
                                                        width: '100%',
                                                    }}
                                                >
                                                    {translatedCategory.map((page, index) => <PageThread inputValue={inputValue} key={index} page={page} i={index} />)}
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
