import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent={'end'}>
        <Typography>{'$ ${155.58}'}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Impuesto (15%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$ ${35.34}`}</Typography>
      </Grid>
    </Grid>
  )
}
