import { Grid } from '@mui/material'
import { FC } from 'react'


import { IProduct } from 'src/interfaces'
import { ProductCard } from './ProductCard'

interface Props {
  products: IProduct[]
}

export const ProductList: FC<Props> = ({
  products
}) => {
  return (
    <Grid container spacing={4}>
      {
        products.map(function(product) {
          return (
            <ProductCard key={product.slug}
              producto={product}
            />
          )
        })
      }
    </Grid>
  )
}
