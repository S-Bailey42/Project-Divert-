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
  CardActions,
  Icon,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import companyImage from "/app/public/encore.png";
import Image from "next/image";
import chairImage from "/app/public/chair.png";
import MenuIcon from "@mui/icons-material/Menu";
import CardContent from "@mui/material/CardContent";
import carpetImage from "/app/public/carpet.png";
import AddIcon from '@mui/icons-material/Add';
import { mdiAccount, mdiMapMarker, mdiPhone } from "@mdi/js";
import values from "../../values.json";
import { useState } from "react";

const encoreBlue = '#3382c4';
const encoreRed = '#f04e43';
const encorePurple = '#883995';
const encoreGreen = '#93bf3e';
const encoreGrey = '#444c52';

function App() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

  const ItemArea = ({ itemView, items }: { itemView: string; items: any }) => {
    if (itemView == "list") {
      return (
        <div className="box m-4">
          {items.map((value: any, index: number) => (
            <GridItem
              key={index}
              data={values.items[index % 6]}
              index={index}
            />
          ))}
        </div>
      );
    }
  };
  return (
    <>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#93bf3e" }}>
        <Toolbar>

          <Box>
            <a href="http://localhost:3000/clientPage">
              <Image alt="Encore" src={companyImage} width={110} />
            </a>
          </Box>

          <Typography variant="h6" component="div" flexGrow={1} align="center">
            *Your site*
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
                <a href="http://localhost:3000/login"><MenuItem>Logout</MenuItem></a>
              </MenuList>
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>

      <Button sx={{ color: "#6e6e6e" }} href="http://localhost:3000/addAnItem">
        Add Item
      </Button>

      <div className="box m-4">
        {values.items.map((value, index) => (
          <GridItem key={index} data={value} index={index} />
        ))}
      </div>
    </>
  );
}



const GridItem = ({ index, data }: { index: number; data: any }) => (
  <Card>
    <CardMedia
      image={`/${(index % 6) + 1}.jpg`}
      sx={{ height: 200 }}
      title="skip"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {`(${data.quantity}) ${data.item}`}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >
        <Icon path={mdiAccount} size={1.0} />
        {data.company}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >
        <Icon path={mdiMapMarker} size={1.0} />
        {data.location}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >
        <Icon path={mdiPhone} size={1.0} />
        {data.phoneNumber}
      </Typography>
    </CardContent>
    <CardActions>
      <Button>More info</Button>
    </CardActions>
  </Card>
);

export default App;
