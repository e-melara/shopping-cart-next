import { FC } from 'react'
import { ListItemText, ListItemIcon, ListItem, capitalize } from '@mui/material'

import { MenuItem as Menu } from 'src/interfaces'

interface Props {
  item: Menu
}

export const MenuItem: FC<Props> = ({ item }) => {
  return (
    <ListItem button {...item.props}>
      <ListItemIcon>
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={capitalize(item.title)} />
    </ListItem>
  )
}
