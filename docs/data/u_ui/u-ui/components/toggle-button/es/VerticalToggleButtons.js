import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@u_ui/u-ui/ToggleButton';
import ToggleButtonGroup from '@u_ui/u-ui/ToggleButtonGroup';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('lista');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="lista" aria-label="lista">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="módulo" aria-label="módulo">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="edredón" aria-label="edredón">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
