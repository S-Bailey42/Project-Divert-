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
  CardHeader,
  Alert,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import companyImage from "/app/public/encore.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CardContent from "@mui/material/CardContent";
import { mdiAccount, mdiMapMarker, mdiPhone } from "@mdi/js";
//import values from "C:/Users/Samue/OneDrive/project-divert-frontend/values.json";
import { useEffect, useState } from "react";
import withAuth from "@/components/withAuth";
import { deleteToken, getSiteId, getToken } from "@/app/utils/token";
import { useRouter } from "next/navigation";
import { getItems } from "@/app/utils/getItems";
import DeleteIcon from "@mui/icons-material/Delete";

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

interface Site {
  id: string;
  SiteName: string;
  Coordinates: string;
  Address: string;
  Postcode: string;
  SiteManager: string;
  PhoneNumber: string;
  IsActive: boolean;
  StartDate: string;
  Email: string;
}

function viewSite() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  let [items, setItems] = useState<Item[]>([]);
  const [itemIdToRemove, setItemIdToRemove] = useState< string | null>(null);
  const [deleteMenu, setDeleteMenu] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        items = await getItems(getSiteId());
        setItems(items);
      } catch (error) {
        console.error("Error fetching items", error)
      }
    };

    fetchItems();
  }, [])

  const router = useRouter();

  const openDeleteMenu = (event: React.MouseEvent<HTMLElement>, itemId: string) => {
    setItemIdToRemove(itemId);
    setDeleteMenu(event.currentTarget);
  }

  const closeDeleteMenu = () => {
    setDeleteMenu(null);
    setItemIdToRemove(null);
  }

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

  async function removeItem() {
    if (!itemIdToRemove) return;

    const token = getToken();
    if (!token) {
      throw new Error("No auth token found");
    }

    let token_obj: { access_token: string };
    try {
      token_obj = JSON.parse(token);
    } catch (e) {
      throw new Error("Invalid auth token format");
    }

    if (!("access_token" in token_obj)) {
      console.log(token_obj);
      throw new Error("No auth token found in the object");
    }
    const deleteUrl = `http://127.0.0.1:8000/worksite/remove/item?item_id=${itemIdToRemove}`;
    console.log("Deleting site with URL:", deleteUrl);

    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token_obj.access_token}`,
      },
    };

    try {
      const response = await fetch(deleteUrl, requestOptions);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to delete item with ID ${itemIdToRemove}: ${errorData.message || response.statusText}`);
      }

      setItems(items.filter((item) => item.id !== itemIdToRemove));
      setItemIdToRemove(null);
      closeDeleteMenu();
      console.log(`Item with ID ${itemIdToRemove} has been successfully deleted`);
    } catch (error: any) {
      console.error("Error deleting item:", error);
      alert(`Error deleting item: ${error.message}`);
    }
  }

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
            {"Your Site"}
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

      <Menu open={Boolean(deleteMenu)} onClose={closeDeleteMenu}>
        <Alert
          severity="error"
          action={
            <>
              <Button color="inherit" size="small" onClick={removeItem}>
                Yes
              </Button>
              <Button color="inherit" size="small" onClick={closeDeleteMenu}>
                No
              </Button>
            </>
          }
        >
          Are you sure you want to remove this item?
        </Alert>
      </Menu>

      <Button sx={{ color: "#6e6e6e" }} href="http://localhost:3000/addAnItem">
        Add Item
      </Button>

      <Box m={4}>
        {items.map((item) => (
          <GridItem key={item.id} data={item} index={0} openDeleteMenu={openDeleteMenu} />
        ))}
      </Box>
    </>
  );
}



const GridItem = ({ index, data, openDeleteMenu }: { index: number, data: Item, openDeleteMenu: 
  (event: React.MouseEvent<HTMLElement>, itemId: string) => void }) => (
  <Card>
    <CardMedia
      image={`/${(index % 6) + 1}.jpg`}
      sx={{ height: 200 }}
      title="skip"
    />
     <IconButton
     onClick={(e) => {
      openDeleteMenu(e, data.id);
    }}
  >
        <DeleteIcon />
      </IconButton>

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {`${data.Name}`}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >

        {`Quantity: ${data.Quantity}`}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >

        {`Weight Per Item (KG): ${data.KgPerItem}`}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="flex flex-row gap-2"
      >

        {`Available: ${data.Taken}`}
      </Typography>
    </CardContent>
    <CardActions>
      <Button>More info</Button>
    </CardActions>
  </Card>
);

export default withAuth(viewSite, [1, 3]);
