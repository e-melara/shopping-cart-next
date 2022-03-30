import { Typography } from '@mui/material'
import type { NextPage } from 'next'

import { ShopLayout } from 'src/components/layouts'
import { ProductList } from 'src/components/products'
import { initialData } from 'src/database/products'


const Home: NextPage = () => {
  return (
    <ShopLayout title='Teslo Shop' pageDescription='Encuentra los mejores productos de Teslo'>
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos los productos</Typography>
      <ProductList
        products={initialData.products as any}
      />
    </ShopLayout>
  )
}


export default Home
