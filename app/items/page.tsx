"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import { SideDrawer } from "@/components/components";
import { useState } from "react";
import { FitScreen } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: "id", headerName: "User ID", width: 200 },
  { field: "itemID", headerName: "Item ID", width: 200 },
  { field: "requestedBy", headerName: "Requested By", width: 200 },
  {
    field: "requestedFrom",
    headerName: "Requested From",
    width: 200,
  },
  {
    field: "siteID",
    headerName: "Site ID",
    width: 200,
  },
];

const Page = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      requestedBy: "Salvation Army",
      itemID: "244",
      requestedFrom: "Brandon Road",
      siteID: "NN6 8HJ",
    },
    {
      id: 2,
      requestedBy: "Sue Ryder",
      itemID: "523",
      requestedFrom: "Little Reddings",
      siteID: "OX5 2FG",
    },
    {
      id: 3,
      requestedBy: "British Heart Foundation",
      itemID: "883",
      requestedFrom: "WAE Technologies",
      siteID: "SH15 8JJ",
    },
    {
      id: 4,
      requestedBy: "Cancer Research",
      itemID: "117",
      requestedFrom: "Great Portland Street",
      siteID: "G6 7HU",
    },
    {
      id: 5,
      requestedBy: "Return MK",
      itemID: "96",
      requestedFrom: "88 Kings Way",
      siteID: "MK8 EDU",
    },
    {
      id: 6,
      requestedBy: "Age UK",
      itemID: "589",
      requestedFrom: "Cubist Systematic",
      siteID: "LL60 UNZ",
    },
    {
      id: 7,
      requestedBy: "Graeae",
      itemID: "255",
      requestedFrom: "Slack Street",
      siteID: "BG02 MWM",
    },
    {
      id: 8,
      requestedBy: "Accommodation Concern",
      itemID: "23",
      requestedFrom: "Honour Road",
      siteID: "KM05 AUL",
    },
    {
      id: 9,
      requestedBy: "Spencer Contact",
      itemID: "64",
      requestedFrom: "12 Baker Court",
      siteID: "HY59 MXB",
    },
    {
      id: 10,
      requestedBy: "Spruce Carpets",
      itemID: "299",
      requestedFrom: "Prince William School",
      siteID: "KA54 PKR",
    },
    {
      id: 11,
      requestedBy: "The Wipers Foundation",
      itemID: "56",
      requestedFrom: "Princes Street",
      siteID: "PF04 LZE",
    },
    {
      id: 12,
      requestedBy: "Shelter",
      itemID: "25",
      requestedFrom: "Hammond Avenue",
      siteID: "TW4 T00",
    },
  ]);

  return (
    <div id="parent">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <SideDrawer />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Items Being Requested
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ height: "FitScreen", width: "100%", minHeight: "100%" }}>
        <DataGrid
          style={{
            border: "solid",
            minWidth: "100%",
            height: "95vh",
          }}
          sx={{ flex: 1 }}
          rows={rows}
          columns={columns}
          autoHeight={true}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 20 },
            },
          }}
          pageSizeOptions={[20, 40]}
        />
      </Box>
    </div>
  );
};

export default Page;
