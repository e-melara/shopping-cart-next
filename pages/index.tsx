import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'

import { ShopLayout } from 'src/components/layouts'
import { initialData } from 'src/database/products'


const Home: NextPage = () => {
  return (
    <ShopLayout title='Teslo Shop' pageDescription='Encuentra los mejores productos de Teslo'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      <Grid container spacing={4}>
        {
          initialData.products.map(function(product) {
            <Grid item xs={6} sm={4} key={product.slug}>
              <Card>
                <CardActionArea>
                  <CardMedia alt={product.title} component={'img'} image={`products/${product.images[0]}`} />
                </CardActionArea>
              </Card>
            </Grid>
          })
        }
      </Grid>
    </ShopLayout>
  )
}

export default Home
