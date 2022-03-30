import { FC } from "react"
import NextLink from 'next/link'
import { CardActionArea, CardMedia, Grid, Link, Typography, Box, Button } from "@mui/material"

import { initialData } from "src/database/products"
import { ItemCounter } from "../ui"

interface Props {
  editable?: boolean
}

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export const CartList: FC<Props> = ({
  editable = false
}) => {
  return (
    <>
      {
        productInCart.map((product) => (
          <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              <NextLink href={'/product/slug'} >
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.images[0]}`}
                      component='img'
                      sx={{ borderRadius: '5px' }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display={'flex'} flexDirection='column'>
                <Typography variant='body1'>{product.title}</Typography>
                <Typography variant='body1'>Falla <strong>M</strong></Typography>
                {
                  editable ? <ItemCounter /> : <Typography variant='h5'>3 items</Typography>
                }
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' flexDirection='column'>
              <Typography variant='subtitle1'>{`$ ${product.price}`}</Typography>
              {editable && (
                <Button variant="text" color='secondary'>
                  Remover
                </Button>
              )}
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
