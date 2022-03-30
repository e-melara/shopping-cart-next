import NextLink from 'next/link'

import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Typography, Link } from '@mui/material'

import { ShopLayout } from "src/components/layouts";


const EmptyPage = () => {
  return (
    <ShopLayout title="Empty Page" pageDescription="No hay articulos en el carrito de compra">
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          flexDirection: {
            xs: 'column', sm: 'row'
          },
          height: 'calc(100vh - 100px)'
        }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection={'column'} alignItems='center'>
          <Typography>
            Su carrito esta vacio
          </Typography>
          <NextLink href='/' passHref>
            <Link typography='h4' color='secondary'>
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage;
