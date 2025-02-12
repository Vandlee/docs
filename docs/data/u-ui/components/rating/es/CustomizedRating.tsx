import * as React from 'react';
import { styled } from '@yushii/u-ui/styles';
import Box from '@yushii/u-ui/Box';
import Rating from '@yushii/u-ui/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@yushii/u-ui/Typography';

const StyledRating = styled(Rating)({
  '& .YushiiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .YushiiRating-iconHover': {
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
        getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="personalizado-10" defaultValue={2} max={10} />
    </Box>
  );
}
