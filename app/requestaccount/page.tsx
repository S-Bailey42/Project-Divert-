"use client";

import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem, { menuItemClasses } from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import Image from "next/image";
import companyImage from "/app/public/project divert logo.png";
import { FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import { useRouter } from "next/navigation";

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
  const companyNameRegex = new RegExp(/^[A-Za-z0-9\s]+$/);
  return companyNameRegex.test(companyName);
}

export default function SignUp() {
  const router = useRouter();
  const [errors, setErrors] = useState<any>(null);
  const [userTypes, setUserType] = useState<Array<object>>([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://127.0.0.1:8000/resource/userTypes");
      const data = await response.json();
      if (response.ok) {
        setUserType(data);
      }
    }

    fetchMyAPI();
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const companyName = data.get("companyName") as string;
    const password = data.get("password") as string;
    const phone = data.get("phone") as string;

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
    }

    if (phone == null) {
      setErrors(
        <Alert
          key={uuidv4()}
          className="z-10"
          severity="error"
          onClose={() => {
            setErrors(null);
          }}
        >
          Please enter a phone number
        </Alert>
      );
    }

    if (accountType == "") {
      setErrors(
        <Alert
          key={uuidv4()}
          className="z-10"
          severity="error"
          onClose={() => {
            setErrors(null);
          }}
        >
          Please select an account type
        </Alert>
      );
      return;
    } else {
      const response = await fetch("http://127.0.0.1:8000/request/account", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: companyName,
          email: email,
          userType: accountType,
        }),
      });

      switch (response.status) {
        case 200:
          router.push("/thanks");
          break;

        case 422:
          setErrors(
            <Alert
              key={uuidv4()}
              className="z-10"
              severity="error"
              onClose={() => {
                setErrors(null);
              }}
            >
              422 - Unprocessable Content
            </Alert>
          );
          break;

        case 404:
          setErrors(
            <Alert
              key={uuidv4()}
              className="z-10"
              severity="error"
              onClose={() => {
                setErrors(null);
              }}
            >
              404 - Not found
            </Alert>
          );
          break;
      }

      return;
    }
  };

  const [accountType, setAccountType] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAccountType(event.target.value as string);
  };


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 1,
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
                label="Organisation Name"
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
                type="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Contact Number"
                name="phone"
                type="tel"
                autoComplete="phone"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="selectAccountInputLabel" required>
                  Account Type
                </InputLabel>
                <Select
                  labelId="selectAccountLabel"
                  id="selectAccount"
                  value={accountType}
                  label="accountType"
                  onChange={handleChange}
                >
                  {userTypes.map((type) => (
                    <MenuItem key={uuidv4()} value={type.id}>
                      {type.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>


          <FormControl>
      <FormLabel id="transport-storage-radio-group">Please tick all that apply if you are a beneficiary</FormLabel>
      <RadioGroup
        aria-labelledby="transport-storage-radio-group"
        name="transport-storage-radio-group"
        row
      >
        <FormControlLabel value="transport" control={<Radio />} label="We have our own transport" />
        <FormControlLabel value="storage" control={<Radio />} label="We have our own storage" />
        <FormControlLabel value="both" control={<Radio />} label="We have our own both" />
        <FormControlLabel value="neither" control={<Radio />} label="We have neither" />
       
      </RadioGroup>
    </FormControl>

          {errors}

          <Button
            className="bg-[#0473ba] font-bold hover:bg-[#ae1182] "
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1 }}
          >
            Request Access
          </Button>
          <Grid container justifyContent="flex-end"></Grid>
        </Box>
      </Box>

      <Copyright sx={{ mt: 2 }} />
    </Container>
  );
}
