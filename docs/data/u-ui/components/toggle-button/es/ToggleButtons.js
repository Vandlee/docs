import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@u-shii/u-ui/ToggleButton';
import ToggleButtonGroup from '@u-shii/u-ui/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('izquierda');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="alineación de texto"
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
    </ToggleButtonGroup>
  );
}
