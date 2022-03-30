import NextLink from 'next/link'

import { Grid, Typography, Chip, Link } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import { ShopLayout } from "src/components/layouts";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 100 },
  { field: 'fullname', headerName: 'Nombre completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    description: 'Muestra informacion si esta pagada la orden o no',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return(
        params.row.paid ? 
          <Chip color='success' label='Pagada' variant='outlined' /> : 
          <Chip color='error' label='No pagada' variant='outlined' /> 
      )
    }
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always'>
            Ver orden
          </Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  { id:1, paid: true, fullname: 'Edwin Melara' },
  { id:2, paid: false,fullname: 'Melissa Flores' },
  { id:3, paid: true,fullname: 'Cesar Antonio' },
  { id:4, paid: true,fullname: 'Axel Isaias Melara' },
  { id:5, paid: false,fullname: 'Erika del Rosario' },
  { id:6, paid: true,fullname: 'Miguel Angel Antonio' },
]

const HistoryPage = () => {
  <ShopLayout title='Historial de Ordenes' pageDescription="Historial de la Historial">
    <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>
    <Grid container>
      <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
      </Grid>
    </Grid>
  </ShopLayout>
}

export default HistoryPage;
