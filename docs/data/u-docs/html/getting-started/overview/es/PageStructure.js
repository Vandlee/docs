import { Box as uiBox, styled, alpha } from '@u_ui/u-ui';
import React from 'react';

const Box = styled(uiBox)(({ theme }) => ({
    display: 'flex',
    flexFlow: 'column',
    padding: theme.spacing(3),
    paddingBlock: theme.spacing(.5),
    width: '100%',
    border: '1px solid',
    borderColor: theme.palette.divider,
    marginBlock: theme.spacing(2),
    backgroundColor: alpha(theme.palette.grey[300], .5),
    ...theme.applyStyles('dark', {
        backgroundColor: alpha(theme.palette.grey[500], .05),
    })
}))

export default function PageStructure() {
  return (
    <Box sx={{ p: 2, px: 3, m: 0, border: 'none' }}>
        {`<html>`}
        <Box>
            {`<head>`}
            <Box>
                {`<title>Titulo de la página</title>`}
            </Box>
            {`</head>`}
        </Box>
        <Box>
            {`<body>`}
            <Box>
                <Box>
                    {`<h1>Este es un encabezado</h1>`}
                </Box>
                <Box>
                    {`<p>Este es un párrafo.</p>`}
                </Box>
                <Box>
                    {`<p>Este es otro párrafo.</p>`}
                </Box>
            </Box>
            {`</body>`}
        </Box>
    </Box>
  )
}
