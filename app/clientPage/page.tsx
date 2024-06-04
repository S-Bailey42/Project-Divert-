"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuList,
  MenuItem,
  Alert,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

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
          <IconButton
            color="inherit"
            size="large"
            edge="start"
            aria-label="addItem"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <DashboardIcon />
          </IconButton>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" edge="start" onClick={openMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuList>
                <MenuItem>Help</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <Typography variant="h6" component="div" flexGrow={1}>
            Site Dashboard
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Image alt="Encore" src={companyImage} width={110} />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Help</Button>
            <Button color="inherit">Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu open={Boolean(settingsNav)}>
        <Alert
          severity="error"
          action={
            <>
            <Button color="inherit" size="small" onClick={closeSettings}>
              Yes
            </Button>
            <Button color="inherit" size="small" onClick={closeSettings}>
              No
            </Button>
            </>
          }
        >
          Are you sure you want to remove this site?
        </Alert>
      </Menu>

      <Button sx={{ color: "#6e6e6e" }} href="http://localhost:3000/createSite">Add new site</Button>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}> Brandon Road </Button>
          subheader="N7 9AA"
        />
      </Card>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}>Prince William School </Button>
          subheader="PE8 4BS"
        />
      </Card>

      <Card sx={{}}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}>MKUH Radiotherapy </Button>
          subheader="MK6 5LD"
        />
      </Card>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}>Little Reddings Primary School </Button>
          subheader="WD23 3PR"
        />
      </Card>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}> Harwell Campus </Button>
          subheader="OX"
        />
      </Card>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}> Purchase Street </Button>
          subheader="NW1 1HW"
        />
      </Card>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}> 29 Marylebone Road </Button>
          subheader="N7 9AA"
        />
      </Card>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button sx={{ color: "black", fontSize: 20 }} href={`http://localhost:3000/workSite`}>Crawley Innovation Centre </Button>
          subheader="RH10 9QL"
        />
      </Card>
    </Box>
  );
}

export default App;
