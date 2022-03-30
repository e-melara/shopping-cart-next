import { Drawer, Box, List, ListItem, Input, InputAdornment, IconButton } from "@mui/material"

import { SearchOutlined } from "@mui/icons-material"

import { ListMenu } from './side-bar-nav'


export const SideMenu = () => {
  return (
    <Drawer open={false} anchor='right' sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5 ease-in' }}>
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input type='text' placeholder="Buscar ..." endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            } />
          </ListItem>
          {/* Component de Menu personalizado */}
          <ListMenu />
        </List>
      </Box>
    </Drawer>
  )
}
