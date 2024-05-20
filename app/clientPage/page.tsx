"use client"

import { AppBar, Box, Button, IconButton, Toolbar, Typography, Menu, MenuList, MenuItem } from "@mui/material";
import { useState, MouseEvent } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function App() {

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  }

  const [settingsNav, setSettingsNav] = useState<null | HTMLElement>(null);

  const openSettings = (event: MouseEvent<HTMLElement>) => {
    setSettingsNav(event.currentTarget);
  };
  const closeSettings = () => {
    setSettingsNav(null);
  };

  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#85c433" }}>
        <Toolbar>
          <IconButton color='inherit' size="large" edge='start' aria-label="addItem" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <DashboardIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge='start' onClick={openMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MenuList>
                <MenuItem>Upload Item</MenuItem>
                <MenuItem>Help</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Typography variant="h6" component='div' flexGrow={1}>Site Dashboard</Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Image alt="Encore" src={companyImage} width={110} />
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton color="inherit"><AddAPhotoIcon /></IconButton>
            <Button color="inherit">Help</Button>
            <Button color="inherit">Logout</Button>
          </Box>

        </Toolbar>
      </AppBar>

      <Menu open={Boolean(settingsNav)} onClose={closeSettings}>
        <MenuList>
        <MenuItem>Edit site</MenuItem>
        <MenuItem>Delete Site</MenuItem>
        </MenuList>
      </Menu>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Brandon Road"
        subheader="N7 9AA"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Prince William School"
        subheader="PE8 4BS"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="MKUH Radiotherapy"
        subheader="MK6 5LD"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Little Reddings Primary School"
        subheader="WD23 3PR"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Harwell Campus"
        subheader="OX"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Purchase Street"
        subheader="NW1 1HW"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="29 Marylebone Road"
        subheader="N7 9AA"
        />
      </Card>

      <Card>
        <CardHeader 
        action={
          <IconButton aria-label="settings" onClick={openSettings}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Crawley Innovation Centre"
        subheader="RH10 9QL"
        />
      </Card>

    </Box>
  )
}

export default App;