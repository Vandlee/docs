import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Stack from '@yushii/u-ui/Stack';
import ToggleButton from '@yushii/u-ui/ToggleButton';
import ToggleButtonGroup from '@yushii/u-ui/ToggleButtonGroup';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('izquierda');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="izquierda" key="izquierda">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="centro" key="centro">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="derecha" key="derecha">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justificar" key="justificar">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <ToggleButtonGroup size="small" {...control} aria-label="Tamaños pequeños">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Tamaños medianos">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Tamaños grandes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
