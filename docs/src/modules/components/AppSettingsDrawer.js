import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@u_ui/u-ui/styles';
import Drawer from '@u_ui/u-ui/Drawer';
import Box from '@u_ui/u-ui/Box';
import Button from '@u_ui/u-ui/Button';
import Typography from '@u_ui/u-ui/Typography';
import Divider from '@u_ui/u-ui/Divider';
import ToggleButtonGroup from '@u_ui/u-ui/ToggleButtonGroup';
import ToggleButton from '@u_ui/u-ui/ToggleButton';
import IconButton from '@u_ui/u-ui/IconButton';
import { useColorSchemeShim, useChangeTheme } from 'docs/src/modules/components/ThemeContext';
import { UserLanguageProvider, useSetUserLanguage, useTranslate, useUserLanguage } from '@u-shii/docs/i18n';
import { 
    Brightness6Rounded, 
    CloseRounded, 
    DarkModeRounded, 
    FormatTextdirectionLToR, 
    FormatTextdirectionLToRRounded, 
    FormatTextdirectionRToL, 
    FormatTextdirectionRToLRounded, 
    LightModeRounded 
} from '@mui/icons-material';
import { useRouter } from 'next/router';

const Heading = styled(Typography)(({ theme }) => ({
    margin: '16px 0 8px',
    fontWeight: theme.typography.fontWeightSemiBold,
    fontSize: theme.typography.pxToRem(11),
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    color: (theme.vars || theme).palette.text.tertiary,
}));

const IconToggleButton = styled(ToggleButton)({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '& > *': {
        marginRight: '8px',
    },
});

export default function AppSettingsDrawer(props) {
    const { onClose, open = false, ...other } = props;
    const t = useTranslate();
    const upperTheme = useTheme();
    const changeTheme = useChangeTheme();
    const router = useRouter();

    // TODO replace with useColorScheme once all pages support css vars
    const { mode, setMode } = useColorSchemeShim();

    const userLanguage = useUserLanguage();
    const setUserLanguage = useSetUserLanguage();

    const handleChangeLanguage = (event, language) => {
        if (!language) return;

        const currentPath = router.pathname;

        let newPath = `/${language}${currentPath}`;

        if (language === 'es') {
            newPath = currentPath;
        }

        setUserLanguage(language);
        router.push(newPath);
    };

    const handleChangeThemeMode = (event, paletteMode) => {
        if (paletteMode === null) {
            return;
        }
        setMode(paletteMode);
    };
    
    const handleChangeDirection = (event, direction) => {
        if (direction === null) {
            direction = upperTheme.direction;
        }
        changeTheme({ direction });
    };

    return (
        <Drawer
            anchor='right'
            onClose={onClose}
            open={open}
            PaperProps={{
                elevation: 0,
                sx: {
                    width: { xs: 310, sm: 360 },
                    borderRadius: '10px 0px 0px 10px',
                    border: '1px solid',
                    borderColor: 'divider',
                },
            }}
            {...other}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                }}
            >
                <Typography variant='body1' sx={{ fontWeight: 'medium' }}>
                    {t('settings.settings')}
                </Typography>
                <IconButton color='inherit' onClick={onClose} edge="end" aria-label={t('close')}>
                    <CloseRounded fontSize='small' />
                </IconButton>
            </Box>
            <Divider />
            <Box sx={{ pl: 2, pr: 2 }}>
                <Heading gutterBottom id="settings-mode">
                    {t('settings.language')}
                </Heading>
                <ToggleButtonGroup
                    exclusive
                    value={userLanguage}
                    color='primary'
                    onChange={handleChangeLanguage}
                    aria-labelledby='settings-mode'
                    fullWidth
                >
                    <IconToggleButton
                        value="es"
                        aria-label={'Español'}
                        data-ga-event-category="settings"
                        data-ga-event-action="Español"
                    >
                        <LightModeRounded />
                        Español
                    </IconToggleButton>
                    <IconToggleButton
                        value="en"
                        aria-label={'English'}
                        data-ga-event-category="settings"
                        data-ga-event-action="English"
                    >
                        <DarkModeRounded />
                        English
                    </IconToggleButton>
                </ToggleButtonGroup>
                <Heading gutterBottom id="settings-mode">
                    {t('settings.mode')}
                </Heading>
                <ToggleButtonGroup
                    exclusive
                    value={mode}
                    color='primary'
                    onChange={handleChangeThemeMode}
                    aria-labelledby='settings-mode'
                    fullWidth
                >
                    <IconToggleButton
                        value="light"
                        aria-label={t('settings.light')}
                        data-ga-event-category="settings"
                        data-ga-event-action="light"
                    >
                        <LightModeRounded />
                        {t('settings.light')}
                    </IconToggleButton>
                    <IconToggleButton
                        value="system"
                        aria-label={t('settings.system')}
                        data-ga-event-category="settings"
                        data-ga-event-action="system"
                    >
                        <Brightness6Rounded />
                        {t('settings.system')}
                    </IconToggleButton>
                    <IconToggleButton
                        value="dark"
                        aria-label={t('settings.dark')}
                        data-ga-event-category="settings"
                        data-ga-event-action="dark"
                    >
                        <DarkModeRounded />
                        {t('settings.dark')}
                    </IconToggleButton>
                </ToggleButtonGroup>
                <Heading gutterBottom id="settings-direction">
                {t('settings.direction')}
                </Heading>
                <ToggleButtonGroup
                    exclusive
                    value={upperTheme.direction}
                    onChange={handleChangeDirection}
                    aria-labelledby="settings-direction"
                    color="primary"
                    fullWidth
                    >
                    <IconToggleButton
                        value="ltr"
                        aria-label={t('settings.ltr')}
                        data-ga-event-category="settings"
                        data-ga-event-action="ltr"
                    >
                        <FormatTextdirectionLToRRounded fontSize="small" />
                        {t('settings.ltr')}
                    </IconToggleButton>
                    <IconToggleButton
                        value="rtl"
                        aria-label={t('settings.rtl')}
                        data-ga-event-category="settings"
                        data-ga-event-action="rtl"
                    >
                        <FormatTextdirectionRToLRounded fontSize="small" />
                        {t('settings.rtl')}
                    </IconToggleButton>
                    </ToggleButtonGroup>
            </Box>
        </Drawer>
    )
}