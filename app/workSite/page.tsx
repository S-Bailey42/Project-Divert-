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
import CardMedia from "@mui/material/CardMedia";
import companyImage from "/app/public/encore.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CardContent from "@mui/material/CardContent";
import { mdiAccount, mdiMapMarker, mdiPhone } from "@mdi/js";
import values from "../../values.json";
import { useEffect, useState } from "react";
import withAuth from "@/components/withAuth";
import { deleteToken } from "../utils/token";
import { useRouter } from "next/navigation";
import { getItems } from "../utils/getItems";

const encoreBlue = '#3382c4';
const encoreRed = '#f04e43';
const encorePurple = '#883995';
const encoreGreen = '#93bf3e';
const encoreGrey = '#444c52';

interface Item {
  id: string;
  Name: string;
  SiteID: string;
  ItemTypeID: number;
  Quantity: number;
  KgPerItem: number;
  Carbon: number;
  Dimensions: string;
  Taken: false;
}

function viewSite() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemList: Item[] = await getItems();
        setItems(itemList);
      } catch(error) {
        console.error("Error fetching items", error)
      }
    };

    fetchItems();
  }, [])

  const router = useRouter();

  const handleLogout = (event: any) => {
    event.preventDefault();
    router.push("/login");
    deleteToken();
  }

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
              <a href="http://localhost:3000/siteHistory"><MenuItem>View Site History</MenuItem></a>
                <MenuItem>Help</MenuItem>
                <a onClick={handleLogout}><MenuItem>Logout</MenuItem></a>
              </MenuList>
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>

      <Button sx={{ color: "#6e6e6e" }} href="http://localhost:3000/addAnItem">
        Add Item
      </Button>

      {/* <div className="box m-4">
        {items.map((item) => (
          <GridItem key={item.id} data={item} />
        ))}
      </div> */}
    </>
  );
}



const GridItem = ({ data }: { data: Item }) => (
  <Card>
    <CardMedia
      //image={`/${(index % 6) + 1}.jpg`}
      sx={{ height: 200 }}
      title="skip"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {`(${data.Quantity}) ${data.Name}`}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >
        
        {data.SiteID}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >
        
        {data.KgPerItem}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >
        
        {data.Taken}
      </Typography>
    </CardContent>
    <CardActions>
      <Button>More info</Button>
    </CardActions>
  </Card>
);

export default withAuth(viewSite, [1, 3]);
