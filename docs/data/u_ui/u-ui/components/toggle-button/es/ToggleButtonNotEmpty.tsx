import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@u_ui/u-ui/Stack';
import ToggleButton from '@u_ui/u-ui/ToggleButton';
import ToggleButtonGroup from '@u_ui/u-ui/ToggleButtonGroup';

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('izquierda');
  const [devices, setDevices] = React.useState(() => ['teléfono']);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[],
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
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
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="dispositivo"
      >
        <ToggleButton value="ordenador portátil" aria-label="ordenador portátil">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="teléfono" aria-label="teléfono">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
