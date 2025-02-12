import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@yushii/u-ui/ToggleButton';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => setSelected((prevSelected) => !prevSelected)}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
