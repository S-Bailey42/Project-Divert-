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
    CssBaseline,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import companyImage from "/app/public/encore.png";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function App() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const startDate = data.get("startDate") as string;
        console.log({
            startDate: startDate,
        })
    }

    return (

        <>
            <AppBar position="static" elevation={0} sx={{ bgcolor: "#85c433" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        edge="start"
                        aria-label="addItem"
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <DashboardIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" edge="start" >
                        </IconButton>
                    </Box>

                    <Typography variant="h6" component="div" flexGrow={1}>
                        Create New Site
                    </Typography>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <Image alt="Encore" src={companyImage} width={110} />
                    </Box>

                </Toolbar>
            </AppBar>

            <Container component="main" maxWidth="xs"> <CssBaseline />
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="siteName"
                                label="Site Name"
                                name="siteName"
                                autoComplete="siteName"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="siteAddress"
                                label="Site Address"
                                name="siteAddress"
                                autoComplete="siteAddress"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="postCode"
                                label="Post Code"
                                name="postCode"
                                autoComplete="postCode"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Project Start Date" name="startDate"/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Project End Date"/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3 }}
                        //href="http://localhost:3000/clientPage"
                    >
                        Add Site to Dashboard
                    </Button>
                </Box>

            </Container >

        </>

    )

}

export default App;