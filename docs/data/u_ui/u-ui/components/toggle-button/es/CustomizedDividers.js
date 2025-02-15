import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@u_ui/u-ui/Divider';
import Paper from '@u_ui/u-ui/Paper';
import ToggleButton from '@u_ui/u-ui/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@u_ui/u-ui/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('izquierda');
  const [formats, setFormats] = React.useState(() => ['cursiva']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={(theme) => ({
          display: 'flex',
          border: `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
          borderRadius: 1.35
        })}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="alineación del texto"
        >
          <ToggleButton value="izquierda" aria-label="alineado a la izquierda">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="centro" aria-label="centrado">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="derecha" aria-label="alineado a la derecha">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justificar" aria-label="justificado" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="formato de texto"
        >
          <ToggleButton value="negrita" aria-label="negrita">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="cursiva" aria-label="cursiva">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="subrayado" aria-label="subrayado">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
