"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem, { menuItemClasses } from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import pdImage from "/app/public/project divert logo.png";
import { AppBar, IconButton, Menu, MenuList, Toolbar } from "@mui/material";

const encoreBlue = '#3382c4';
const encoreRed = '#f04e43';
const encorePurple = '#883995';
const encoreGreen = '#93bf3e';
const encoreGrey = '#444c52';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/charity">
        Project Divert
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function validateQuantity(quantity: string) {
  const companyNameRegex = new RegExp(/^[0-9]+$/);
  return companyNameRegex.test(quantity);
}

export default function AddItem() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorNav(null);
    };

  const [errors, setErrors] = useState<any>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const itemName = data.get("itemName") as string;
    const quantity = data.get("quantity") as string;
    const weight = data.get("weight") as string;
    const dimensions = data.get("dimensions") as string;

    if (itemName == "") {
      setErrors(
        <Alert
          key={uuidv4()}
          className="z-10"
          severity="error"
          onClose={() => {
            setErrors(null);
          }}
        >
          Please enter an item name
        </Alert>
      );
      return;
    }

    if (category == "") {
      setErrors(
        <Alert
          key={uuidv4()}
          className="z-10"
          severity="error"
          onClose={() => {
            setErrors(null);
          }}
        >
          Please select a category
        </Alert>
      );
      return;
    }

    if (!validateQuantity(quantity)) {
      setErrors(
        <Alert
          key={uuidv4()}
          className="z-10"
          severity="error"
          onClose={() => {
            setErrors(null);
          }}
        >
          Please enter a quantity
        </Alert>
      );
      return;
    }

  };

  const [category, setCategory] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "#93bf3e" }}>
        <Toolbar sx={{ alignContent: "centers" }}>

          <Box>
            <a href="http://localhost:3000/clientPage">
              <Image alt="Encore" src={companyImage} width={110} />
            </a>
          </Box>

          <Typography variant="h6" component="div" flexGrow={1} align="center">
            Add an item to your site
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
                <a href="http://localhost:3000/login"><MenuItem>Logout</MenuItem></a>
              </MenuList>
            </Menu>
          </Box>

        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className=" w-20 h-20">
            <Image alt="pd" src={pdImage} />
          </div>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="itemName"
                  label="Item Name"
                  name="itemName"
                  autoComplete="itemName"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="itemCategoryLabel" required>
                    Category
                  </InputLabel>
                  <Select
                    labelId="itemCategoryLabel"
                    id="category"
                    value={category}
                    label="category"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Seating</MenuItem>
                    <MenuItem value={2}>Desking</MenuItem>
                    <MenuItem value={3}>Storage</MenuItem>
                    <MenuItem value={4}>Flooring</MenuItem>
                    <MenuItem value={5}>Lighting</MenuItem>
                    <MenuItem value={5}>Electronic Goods</MenuItem>
                    <MenuItem value={6}>White Goods</MenuItem>
                    <MenuItem value={7}>Stationary</MenuItem>
                    <MenuItem value={8}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="quantity"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="weight"
                  label="Weight in KG"
                  name="weight"
                  autoComplete="weight"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="dimensions"
                  label="Dimensions"
                  name="dimensions"
                  autoComplete="dimensions"
                />
              </Grid>

              <Grid item xs={12}>
                <div>
                  <input type="file" accept="image/jpeg, image/png, image/jpg" />
                </div>
              </Grid>


            </Grid>
            {errors}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              href="http://localhost:3000/workSite"
            >
              Add Item
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>

        <Copyright sx={{ mt: 2 }} />
      </Container>

    </>
  );
}
