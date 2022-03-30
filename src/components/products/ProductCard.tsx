import { FC, useMemo, useState } from "react"
import NextLink from 'next/link'

import { Card, Link, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"

import { IProduct } from "src/interfaces"
import { Box } from "@mui/system"

interface Props {
  producto: IProduct
}

export const ProductCard: FC<Props> = ({
  producto
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered ?
      `products/${producto.images[1]}` :
      `products/${producto.images[0]}`
  }, [isHovered, producto.images])

  return (
    <Grid item xs={6} sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={'/product/slug'} passHref prefetch={false}>
          <Link >
            <CardActionArea>
              <CardMedia
                component='img'
                className='fadeIn'
                image={productImage}
                alt={producto.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className='fadeIn'>
        <Typography fontWeight={700}>{producto.title}</Typography>
        <Typography fontWeight={500}>{producto.price}</Typography>
      </Box>
    </Grid>
  )
}
