import NextLik from 'next/link'
import { Typography, Grid, CardContent, Card, Divider, Box, Link, Chip } from "@mui/material";

import { ShopLayout } from "src/components/layouts";
import { CartList, OrderSummary } from "src/components/cart";
import { CreditCardOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 6771267' pageDescription="Resumen de la orden">
      <Typography variant='h1' component='h1'>
        Ordern: ABC123
      </Typography>
      {/*<Chip
        sx={{ my: 2 }}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={<CreditCardOutlined />}
      />
      */}
      <Chip
        sx={{ my: 2 }}
        label='Orden ya fue pagada'
        variant='outlined'
        color='success'
        icon={<CreditCardOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summaary-card'>
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent={'space-between'}>
                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                <NextLik href='/checkout/address' passHref>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLik>
              </Box>
              <Typography>Edwin Melara Landaverde</Typography>
              <Typography>323 algun lugar</Typography>
              <Typography>Stittsville, HYA 235</Typography>
              <Typography>Canada</Typography>
              <Typography>+1 23232332</Typography>
              <Divider sx={{ my: 1 }} />
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                {/* TODO:pagar */}
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label='Orden ya fue pagada'
                  variant='outlined'
                  color='success'
                  icon={<CreditCardOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}


export default OrderPage;
