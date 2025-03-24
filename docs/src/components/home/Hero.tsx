import * as React from 'react';
import { Box, Typography } from '@u_ui/u-ui';
import GradientText from '../typography/GradientText';
import HeroSearch from './HeroSearch';

export default function Hero() {
    return (
        <div>
            <Box
                sx={{
                    minHeight: '100dvh',
                    paddingTop: '10dvh'
                }}
            >
                <Box
                    sx={{
                        margin: '0 auto',
                        padding: 1,
                        maxWidth: 700,
                        display: 'flex',
                        flexFlow: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography textAlign="center" variant="h1" sx={{ my: 2}}>
                        Aprende a programar <br/>
                        <GradientText color="primary">con Documentación</GradientText>
                    </Typography>
                    <HeroSearch />
                </Box>
            </Box>
        </div>
    )
}