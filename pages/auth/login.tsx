import NextLink from 'next/link'

import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "src/components/layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title='Ingresar'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container>
          <Grid item>
            <Typography variant='h1' component={'h1'}>Iniciar sesion</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label='Correo' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label='Contraseña' type='password' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" className='circular-btn' size='large' fullWidth>
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <NextLink href='/auth/register' passHref>
              <Link>
                ¿No tienes cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default LoginPage;
