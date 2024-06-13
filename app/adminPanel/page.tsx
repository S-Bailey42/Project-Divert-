"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SideDrawer } from "@/components/components";
import { useState, useEffect } from "react";
import axios from "axios";
import { fetchAccountRequests } from "../utils/api";

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

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [selectedRows, setSelectedRows] = useState<Array<number>>([]);

  useEffect(() => {
    const loadAccountRequests = async () => {
      try {
        const data = await fetchAccountRequests();
        setRows(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    loadAccountRequests();
  }, [])



  function handleClick() {
    setRows(rows.filter((value) => !selectedRows.includes(value.id)));
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading account requests: {error.message}</p>

  return (
    <div id="parent">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#85c433" }}>
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <SideDrawer />
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: 'center', sm: 'left' },
                order: { xs: 2, sm: 1 }
              }}
            >
              Accounts Requesting Access
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                order: { xs: 1, sm: 2 },
                width: { xs: '100%', sm: 'auto' },
                mb: { xs: 1, sm: 0 }
              }}
            >
              <Button
                variant="contained"
                color="success"
                onClick={handleClick}
                sx={{ m: 1 }}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleClick}
                sx={{ m: 1 }}
              >
                Reject
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          style={{
            border: "solid",
            minWidth: "100%",
            height: "95vh",
          }}
          sx={{ flex: 1 }}
          rows={rows}
          columns={columns}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => setSelectedRows(newSelection)}
        />
      </Box>
    </div>
  );
};

export default Page;
