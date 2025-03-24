import * as React from 'react';
import Box from '@u_ui/u-ui/Box';
import Badge from '@u_ui/u-ui/Badge';
import ButtonGroup from '@u_ui/u-ui/ButtonGroup';
import Button from '@u_ui/u-ui/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .uiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  );
}
