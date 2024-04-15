"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Image from "next/image";
import companyImage from "/app/public/project divert logo.png";
import { stringify } from "querystring";

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

function validatePassword(newPassword: string) {
  const passwordRegex = new RegExp(
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
  );
}

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newPassword = data.get("new-password") as string;

    if (!validatePassword(newPassword)) {
      console.log("Not a valid password, please match password criteria");
    } else {
      console.log({
        currentPassowrd: data.get("current-password"),
        newPassword: newPassword,
        confirmNewPassword: data.get("confirm-new-password"),
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className=" w-20 h-20">
          <Image alt="pd" src={companyImage} />
        </div>

        <Typography component="h1" variant="h6" className=" pt-5">
          For security reasons please reset your password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="currentPassword"
                label="Current Password"
                type="password"
                name="currentPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="newPassword"
                label="New Password"
                type="password"
                id="newPassword"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmNewPassword"
                label="Confirm New Password"
                type="password"
                id="confirmNewPassword"
              />
            </Grid>
          </Grid>
          <Button
            className="bg-[#0473ba] font-bold hover:bg-[#ae1182] "
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => alert("hello world")}
          >
            Reset
          </Button>

          <Grid container justifyContent="flex-end"></Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
