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
import chairImage from "/app/public/chair.png";
import CardContent from "@mui/material/CardContent";
import carpetImage from "/app/public/carpet.png";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { mdiAccount, mdiMapMarker, mdiPhone } from "@mdi/js";
import values from "../../values.json";

function App() {
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
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#85c433" }}>
        <Toolbar sx={{ alignContent: "centers" }}>
          <Typography variant="h6" component="div" flexGrow={1}>
            Items on *Your site*
          </Typography>
          <IconButton color="inherit" size="large">
            <AddAPhotoIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
