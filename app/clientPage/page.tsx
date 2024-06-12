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
import DeleteIcon from "@mui/icons-material/Delete";
import withAuth from "@/components/withAuth";
import { deleteToken } from "../utils/token";
import { useRouter } from "next/navigation";

const encoreBlue = "#3382c4";
const encoreRed = "#f04e43";
const encorePurple = "#883995";
const encoreGreen = "#93bf3e";
const encoreGrey = "#444c52";

function ClientApp() {
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
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#93bf3e" }}>
        <Toolbar>
          <Box>
            <a href="http://localhost:3000/clientPage">
              <Image alt="Encore" src={companyImage} width={110} />
            </a>
          </Box>

          <Typography variant="h6" component="div" flexGrow={1} align="center">
            Site Dashboard
          </Typography>

          <Box>
            <IconButton size="large" edge="start" onClick={openMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <Menu open={Boolean(anchorNav)} onClose={closeMenu}>
              <MenuList>
                <a href="http://localhost:3000/siteHistory">
                  <MenuItem>View Site History</MenuItem>
                </a>
                <MenuItem>Help</MenuItem>
                <a onClick={handleLogout}>
                  <MenuItem>Logout</MenuItem>
                </a>
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

      <Button sx={{ color: "#6e6e6e" }} href="http://localhost:3000/createSite">
        Add new site
      </Button>

      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={openSettings}>
              <DeleteIcon />
            </IconButton>
          }
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            {" "}
            Brandon Road{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            Prince William School{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            MKUH Radiotherapy{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            Little Reddings Primary School{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            {" "}
            Harwell Campus{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            {" "}
            Purchase Street{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            {" "}
            29 Marylebone Road{" "}
          </Button>
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
          title=<Button
            sx={{ color: encoreGrey, fontSize: 20 }}
            href={`http://localhost:3000/workSite`}
          >
            Crawley Innovation Centre{" "}
          </Button>
          subheader="RH10 9QL"
        />
      </Card>
    </Box>
  );
}

export default withAuth(ClientApp, [1, 3]);
