import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@yushii/u-ui/ToggleButton';
import ToggleButtonGroup from '@yushii/u-ui/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['negrita', 'cursiva']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
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
    </ToggleButtonGroup>
  );
}
