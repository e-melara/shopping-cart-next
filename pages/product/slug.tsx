import { Grid, Box, Typography, Button, Chip } from "@mui/material"

import { ShopLayout } from "src/components/layouts"
import { initialData } from "src/database/products"

import { ProductSliderShow } from 'src/components/products'
import { ItemCounter, SizeSelector } from "src/components/ui"

const producto = initialData.products[0]

const ProductPage = () => {
  return (
    <ShopLayout title={producto.title}
      pageDescription={producto.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSliderShow
            images={producto.images}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection='column'>
            <Typography variant='h1' component='h1'>
              {producto.title}
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              {`$ ${producto.price}`}
            </Typography>
            <Box sx={{
              my: 2
            }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter />
              <SizeSelector
                sizes={producto.sizes}
                selectedSize={producto.sizes[2]}
              />
            </Box>
            <Button color='secondary' className='circular-btn'>
              Agregar al carrito
            </Button>
            <Chip
              label='No hay disponibles'
              color='error' variant='outlined'
            />
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>description</Typography>
              <Typography variant='body2'>{producto.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage
