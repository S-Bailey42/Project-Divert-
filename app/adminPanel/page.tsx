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
  { field: "companyName", headerName: "Company Name", width: 400 },
  { field: "email", headerName: "Email", width: 300 },
  {
    field: "accountType",
    headerName: "Account Type",
    type: "number",
    width: 100,
  },
  {
    field: "postCode",
    headerName: "Post Code",
    width: 100,
  },
];

const Page = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      email: "deyor96485@haislot.com",
      companyName: "Morgan Sindall",
      accountType: 2,
      postCode: "NN6 8HJ",
    },
    {
      id: 2,
      email: "gaiaferran@pastipass.com",
      companyName: "Accomodation Concern",
      accountType: 1,
      postCode: "OX5 2FG",
    },
    {
      id: 3,
      email: "opera315@alimoh.cloud",
      companyName: "Return MK",
      accountType: 1,
      postCode: "SH15 8JJ",
    },
    {
      id: 4,
      email: "cremnyov@rutory.com",
      companyName: "The Wipers Foundation",
      accountType: 1,
      postCode: "G6 7HU",
    },
    {
      id: 5,
      email: "mcmick@btcmod.com",
      companyName: "Spencer Contact",
      accountType: 1,
      postCode: "MK8 EDU",
    },
    {
      id: 6,
      email: "tkkolian3@loranerobinson.info",
      companyName: "Overbury",
      accountType: 2,
      postCode: "LL60 UNZ",
    },
    {
      id: 7,
      email: "elhechicero@naverly.com",
      companyName: "Modus",
      accountType: 2,
      postCode: "BG02 MWM",
    },
    {
      id: 8,
      email: "dakelenafranc@cjutro.de",
      companyName: "Graeae",
      accountType: 1,
      postCode: "KM05 AUL",
    },
    {
      id: 9,
      email: "pr1geetoe20@lushily.top",
      companyName: "Emmaus",
      accountType: 1,
      postCode: "HY59 MXB",
    },
    {
      id: 10,
      email: "bexrider@chantellegribbon.com",
      companyName: "Cast Interiors",
      accountType: 2,
      postCode: "KA54 PKR",
    },
    {
      id: 11,
      email: "madugala@clonevnmail.com",
      companyName: "The Daylight Centre",
      accountType: 1,
      postCode: "PF04 LZE",
    },
    {
      id: 12,
      email: "lilyjoe@audrianaputri.com",
      companyName: "Todd",
      accountType: 1,
      postCode: "TW4 T00",
    },
  ]);

  const [selectedRows, setSelectedRows] = useState<Array<number>>([]);

  function handleClick() {
    setRows(rows.filter((value) => !selectedRows.includes(value.id)));
  }

  return (
    <div id="parent">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <SideDrawer />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Accounts Requesting Access
            </Typography>
            <Button
              variant="contained"
              color="success"
              className=" absolute right-10"
              onClick={handleClick}
            >
              Accept
            </Button>
            <Button variant="contained" color="error">
              Reject
            </Button>
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
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          onRowSelectionModelChange={(e) => setSelectedRows(e)}
        />
      </Box>
    </div>
  );
};

export default Page;
