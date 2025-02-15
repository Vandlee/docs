import * as React from 'react';
import Tooltip from '@u_ui/u-ui/Tooltip';
import IconButton from '@u_ui/u-ui/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function LoadingIconButton() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <Tooltip title="Haga clic para ver la carga">
      <IconButton onClick={() => setLoading(true)} loading={loading}>
        <ShoppingCartIcon />
      </IconButton>
    </Tooltip>
  );
}
