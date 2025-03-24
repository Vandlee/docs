import * as React from 'react';
import Portal from '@u_ui/u-ui/Portal';
import Box from '@u_ui/u-ui/Box';
import Button from '@u_ui/u-ui/Button';

export default function SimplePortal() {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <Button type="button" onClick={handleClick}>
        {show ? 'Desmontar hijos' : 'Montar hijos'}
      </Button>
      <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
        Parece que voy a renderizar aquí.
        {show ? (
          <Portal container={() => container.current}>
            <span>¡Pero en realidad renderizo aquí!</span>
          </Portal>
        ) : null}
      </Box>
      <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />
    </div>
  );
}
