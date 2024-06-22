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
import { useState, MouseEvent, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import withAuth from "@/components/withAuth";
import { deleteToken } from "../utils/token";
import { useRouter } from "next/navigation";
import { getSites } from "../utils/getSites";
import { getToken } from "../utils/token";


const encoreBlue = "#3382c4";
const encoreRed = "#f04e43";
const encorePurple = "#883995";
const encoreGreen = "#93bf3e";
const encoreGrey = "#444c52";

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

function ClientApp() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [sites, setSites] = useState<Site[]>([]);
  const [settingsNav, setSettingsNav] = useState<null | HTMLElement>(null);
  const [siteIdToRemove, setSiteIdToRemove] = useState<string | null>(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const sitesList: Site[] = await getSites();
        setSites(sitesList);
      } catch (error) {
        console.error("Error fetching sites", error)
      }
    };
    fetchSites();
  }, [])

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

  const openSettings = (event: MouseEvent<HTMLElement>) => {
    setSettingsNav(event.currentTarget);
  };
  const closeSettings = () => {
    setSettingsNav(null);
  };

  async function removeSite() {
    if (!siteIdToRemove) return;

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
    const deleteUrl = `http://127.0.0.1:8000/worksite/delete/?worksite_id=${siteIdToRemove}`;
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
        throw new Error(`Failed to delete site with ID ${siteIdToRemove}: ${errorData.message || response.statusText}`);
      }

      setSites(sites.filter((site) => site.id !== siteIdToRemove));
      setSiteIdToRemove(null);
      closeSettings();
      console.log(`Site with ID ${siteIdToRemove} has been successfully deleted`);
    } catch (error: any) {
      console.error("Error deleting site:", error);
      alert(`Error deleting site: ${error.message}`);
    }
  }

  const handleSiteClick = (siteId:any) => {
    router.push(`/workSite/${siteId}`)
  }

  

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
              <Button color="inherit" size="small" onClick={removeSite}>
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

      {sites.map((site) => (
        <Card key={site.id}>
          <CardHeader
            title={<button className="hover:underline"
              onClick={() => handleSiteClick(site.id)}
            >
              {site.SiteName}
            </button>}

            subheader={`${site.Postcode}`}
            action={
              <IconButton aria-label="settings"
                onClick={(e) => {
                  setSiteIdToRemove(site.id);
                  openSettings(e);
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        </Card>
      ))}


    </Box>

  );
}



export default withAuth(ClientApp, [1, 3]);
