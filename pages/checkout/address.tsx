import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box
} from "@mui/material";
import { ShopLayout } from "src/components/layouts";

const AdressPage = () => {
  return (
    <ShopLayout
      title="Direccion"
      pageDescription="Confimar direccion del destino"
    >
      <Typography variant="h1" component="h1">
        Direccion
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Nombres" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Apellidos" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Direccion" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Direccion 2" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Codigo postal" variant="filled" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Cuidad" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Pais</InputLabel>
            <Select variant="filled" label='Pais' value={1}>
              <MenuItem value={1}>Costa Rica</MenuItem>
              <MenuItem value={2}>Honduras</MenuItem>
              <MenuItem value={3}>El Salvador</MenuItem>
              <MenuItem value={4}>Guatemala</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label='Telefono' variant='filled' fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display='flex' justifyContent={'center'}>
        <Button color='secondary' className='circular-btn' size='large'>
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  );
};

export default AdressPage;
