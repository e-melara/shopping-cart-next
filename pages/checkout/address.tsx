import { Grid, TextField, Typography } from "@mui/material";
import { ShopLayout } from "src/components/layouts";

const AdressPage = () => {
  return (
    <ShopLayout title='Direccion' pageDescription="Confimar direccion del destino">
      <Typography variant="h1" component='h1'>Direccion</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label='Nombres' variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Apellidos' variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Direccion' variant="filled" fullWidth />
        </Grid>
          <Grid item xs={12} sm={6}>
          <TextField label='Direccion 2' variant="filled" fullWidth />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default AdressPage;
