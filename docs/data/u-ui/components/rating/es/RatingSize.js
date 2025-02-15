import * as React from 'react';
import Rating from '@u-shii/u-ui/Rating';
import Stack from '@u-shii/u-ui/Stack';

export default function RatingSize() {
  return (
    <Stack spacing={1}>
      <Rating name="tamaño-pequeño" defaultValue={2} size="small" />
      <Rating name="tamaño-mediano" defaultValue={2} />
      <Rating name="tamaño-grande" defaultValue={2} size="large" />
    </Stack>
  );
}
