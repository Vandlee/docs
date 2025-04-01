import { Box } from "@u_ui/u-ui";
import { HighlightedCode } from "@vandlee/docs/HighlightedCode";

export default function Weak(){ 
    const html = `
        <p>Obtenga más información sobre nuestros productos <a href="/productos">aquí</a>.</p>
    `;

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& fieldset': {
                        margin: 3,
                    },
                }}
            >
            </Box>
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'action.active',
                    background: theme.palette.background.default,
                    border: 1,
                    borderColor: theme.palette.divider,
                    borderRadius: theme.spacing(1),
                    '& > *': {
                        margin: 2
                    },
                })}
            >
                <p>Obtenga más información sobre nuestros productos <a href="/productos">aquí</a>.</p>
            </Box>
            <HighlightedCode code={html} language='html' />
        </Box>
    )
}