"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import {v4 as uuidv4} from 'uuid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";
import companyImage from "/app/public/project divert logo.png";

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

function isEmail(email: string) {
  const emailRegex = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return emailRegex.test(email);
}
function validateCompanyName(companyName: string) {
  const companyNameRegex = new RegExp(/^[A-Za-z0-9]+$/);
  return companyNameRegex.test(companyName);
}

export default function SignUp() {
  const [errors, setErrors] = useState<any>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const companyName = data.get("companyName") as string;
    const radioButton = data.get("radio-buttons-group");

    if (!validateCompanyName(companyName)) {
      setErrors(
        <Alert
            key={uuidv4()}
            className="z-10"
            severity="error"
            onClose={() => {
              setErrors(null);
            }}
          >
            Please enter a valid company name
          </Alert>
      );
      return;
    } else {
      console.log({
        companyName: companyName,
      });
    }
    if (!isEmail(email)) {
      setErrors(
        <Alert
            key={uuidv4()}
            className="z-10"
            severity="error"
            onClose={() => {          
              setErrors(null);
            }}
          >
            Please enter a valid email
          </Alert>
      );
      return;
    } else {
      console.log({
        email: email,
      });
    }
    if (radioButton == null) {
      setErrors(<Alert
        key={uuidv4()}
        className="z-10"
        severity="error"
        onClose={() => {
          setErrors(null);
        }}
      >
        Please select an account type
      </Alert>);
      return;
    } else {
      console.log({
        radioButton:radioButton,
      })
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

        <Typography component="h1" variant="h5" className=" pt-5">
          Request Your Account
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                autoComplete="companyName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Account Type
                </FormLabel>
                <RadioGroup
                  id="accType"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="Beneficiary"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Work Site"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          {errors}

          <Button
            className="bg-[#0473ba] font-bold hover:bg-[#ae1182] "
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Request Access
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </Box>
      </Box>

      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
