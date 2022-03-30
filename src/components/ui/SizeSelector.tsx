import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react'


import { ISize } from 'src/interfaces';

interface Props {
  selectedSize: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({
  sizes, selectedSize
}) => {
  return (
    <Box>
      {
        sizes.map((size) =>
          <Button size='small' key={size} color={
            selectedSize === size ? 'success' : 'primary'
          }>{size}</Button>
        )
      }
    </Box>
  )
}


