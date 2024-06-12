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
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import withAuth from "@/components/withAuth";
import { deleteToken } from "../utils/token";
import { useRouter } from "next/navigation";

const encoreBlue = '#3382c4';
const encoreRed = '#f04e43';
const encorePurple = '#883995';
const encoreGreen = '#93bf3e';
const encoreGrey = '#444c52';

function siteHistory() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const router = useRouter();

  const handleLogout = (event: any) => {
    event.preventDefault();
    router.push("/login");
    deleteToken();
  }

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
      <AppBar position="static" elevation={0} sx={{ bgcolor: encoreGreen }}>
        <Toolbar>
          <Box>
            <a href="http://localhost:3000/clientPage">
              <Image alt="Encore" src={companyImage} width={110} />
            </a>
          </Box>

          <Typography variant="h6" component="div" flexGrow={1} align="center">
            Site History
          </Typography>

          <Box>
            <IconButton size="large" edge="start" onClick={openMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
            >
              <MenuList>
                <MenuItem>Help</MenuItem>
                <a onClick={handleLogout}><MenuItem>Logout</MenuItem></a>
              </MenuList>
            </Menu>
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

      <Card>
        <CardHeader
          title=<Button sx={{ color: "black", fontSize: 20 }}
            href={`http://localhost:3000/workSite`}> Norfolk Road Industrial Estate </Button>
          subheader="N7 9AA"
        />
      </Card>

      <Card>
        <CardHeader
          title=<Button sx={{ color: "black", fontSize: 20 }}
            href={`http://localhost:3000/workSite`}>St Peters Church </Button>
          subheader="PE8 4BS"
        />
      </Card>

      <Card sx={{}}>
        <CardHeader
          title=<Button sx={{ color: "black", fontSize: 20 }}
            href={`http://localhost:3000/workSite`}>80 New Bond Street </Button>
          subheader="MK6 5LD"
        />
      </Card>

      <Card>
        <CardHeader
          title=<Button sx={{ color: "black", fontSize: 20 }}
            href={`http://localhost:3000/workSite`}>Avebury House </Button>
          subheader="WD23 3PR"
        />
      </Card>

    </Box>
  );
}

export default withAuth(siteHistory, [1, 3]);
