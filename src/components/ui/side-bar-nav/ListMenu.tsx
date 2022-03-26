import {
  AccountCircleOutlined, AdminPanelSettings, CategoryOutlined,
  EscalatorWarningOutlined, LoginOutlined, MaleOutlined,
  VpnKeyOutlined, WomanOutlined, ConfirmationNumberOutlined
} from "@mui/icons-material"

import { Divider, ListSubheader } from "@mui/material"


import { MenuItem, Menu } from 'src/interfaces'
import { MenuItem as Item } from './MenuItem'

const userMenu: MenuItem[] = [
  { title: 'perfil', icon: <AccountCircleOutlined /> },
  { title: 'Mis Ordenes', icon: <ConfirmationNumberOutlined /> },
  {
    title: 'Hombres', icon: <MaleOutlined />, props: {
      sx: { display: { xs: '', sm: 'none' } }
    }
  },
  {
    title: 'Mujer', icon: <WomanOutlined />, props: {
      sx: { display: { xs: '', sm: 'none' } }
    }
  },
  {
    title: 'Niños', icon: <EscalatorWarningOutlined />, props: {
      sx: { display: { xs: '', sm: 'none' } }
    }
  },
  { title: 'ingresar', icon: <VpnKeyOutlined /> },
  { title: 'salir', icon: <LoginOutlined /> },

]

const adminMenu: MenuItem[] = [
  { title: 'Productos', icon: <CategoryOutlined /> },
  { title: 'Ordenes', icon: <ConfirmationNumberOutlined /> },
  { title: 'Usuarios', icon: <AdminPanelSettings /> },
]

const sideBarNav: Menu = {
  user: userMenu,
  admin: adminMenu
}


export const ListMenu = () => {
  return (
    <>
      {
        sideBarNav.user.map((item: MenuItem, index: number) => (
          <Item item={item} key={index} />
        ))
      }
      
      <Divider />
      <ListSubheader>Admin Panel</ListSubheader>
      {
        sideBarNav.admin.map((item: MenuItem, index: number) => (
          <Item item={item} key={index} />
        ))
      }
    </>
  )
}
