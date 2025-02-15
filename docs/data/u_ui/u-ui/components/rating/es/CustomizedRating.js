import * as React from 'react';
import { styled } from '@u_ui/u-ui/styles';
import Box from '@u_ui/u-ui/Box';
import Rating from '@u_ui/u-ui/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@u_ui/u-ui/Typography';

const StyledRating = styled(Rating)({
  '& .UshiiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .UshiiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <Box sx={{ '& > legend': { mt: 2 } }}>
      <Typography component="legend">Icono y color personalizados</Typography>
      <StyledRating
        name="color-personalizado"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 Estrellas</Typography>
      <Rating name="personalizado-10" defaultValue={2} max={10} />
    </Box>
  );
}
