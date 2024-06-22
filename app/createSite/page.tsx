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
    Alert,
} from "@mui/material";
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
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import withAuth from "@/components/withAuth";
import { deleteToken } from "../utils/token";
import { useRouter } from "next/navigation";
import { getToken } from "../utils/token";

const encoreBlue = '#3382c4';
const encoreRed = '#f04e43';
const encorePurple = '#883995';
const encoreGreen = '#93bf3e';
const encoreGrey = '#444c52';


function isEmail(email: string) {
    const emailRegex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    return emailRegex.test(email);
}

function validateSiteName(siteName: string) {
    const companyNameRegex = new RegExp(/^[A-Za-z0-9\s]+$/);
    return companyNameRegex.test(siteName);
}

function validatePostCode(postCode: string) {
    const companyNameRegex = new RegExp(/^[A-Za-z0-9\s]+$/);
    return companyNameRegex.test(postCode);
}

function validateManagerName(projectManager: string) {
    const companyNameRegex = new RegExp(/^[A-Za-z\s]+$/);
    return companyNameRegex.test(projectManager);
}

function validatePhoneNumber(phone: string) {
    const companyNameRegex = new RegExp(/^[0-9]+$/);
    return companyNameRegex.test(phone);
}

function createSite() {
    const router = useRouter();

    const handleLogout = (event: any) => {
        event.preventDefault();
        router.push("/login");
        deleteToken();
    }

    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorNav(null);
    };

    const [errors, setErrors] = useState<any>(null);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const startDate = formatDate(data.get("startDate") as string);
        const endDate = formatDate(data.get("endDate") as string);
        const email = data.get("email") as string;
        const siteName = data.get("siteName") as string;
        const phone = data.get("phone") as string;
        const postCode = data.get("postCode") as string;
        const projectManager = data.get("projectManager") as string;

        function formatDate(dateString: string): string {
            const date = new Date(dateString);
            const isoDateString = date.toISOString().split('T')[0];
            return isoDateString;
        }

        if (!validateSiteName(siteName)) {
            setErrors(
                <Alert
                    key={uuidv4()}
                    className="z-10"
                    severity="error"
                    onClose={() => {
                        setErrors(null);
                    }}
                >
                    Please enter a site name
                </Alert>
            );
            return;
        }

        if (!validateManagerName(projectManager)) {
            setErrors(
                <Alert
                    key={uuidv4()}
                    className="z-10"
                    severity="error"
                    onClose={() => {
                        setErrors(null);
                    }}
                >
                    Please enter a Project Manager
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

        if (!validatePhoneNumber(phone)) {
            setErrors(
                <Alert
                    key={uuidv4()}
                    className="z-10"
                    severity="error"
                    onClose={() => {
                        setErrors(null);
                    }}
                >
                    Please enter a contact number
                </Alert>
            );
            return;
        }

        if (!validatePostCode(postCode)) {
            setErrors(
                <Alert
                    key={uuidv4()}
                    className="z-10"
                    severity="error"
                    onClose={() => {
                        setErrors(null);
                    }}
                >
                    Please enter a Post Code
                </Alert>
            );
            return;
        }

        const token = getToken();
        if(!token) {
            throw new Error("No auth token found")
        }

        let token_obj: {access_token: string };
        try {
            token_obj = JSON.parse(token);
        } catch (e) {
            throw new Error("Invalid auth token format")
        };

        const newSite = {
            Coordinates: "", // Assuming you want to set coordinates to empty or get them from somewhere
        Address: "", // Assuming you want to set address to empty or get it from somewhere
        Postcode: postCode,
        SiteName: siteName,
        SiteManager: projectManager,
        PhoneNumber: phone,
        IsActive: true,
        StartDate: startDate,
        Email: email, 
        EndDate: endDate,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/worksite/create", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token_obj.access_token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newSite),
            });
        

         if (!response.ok) {
            throw new Error(`Error adding site: ${response.statusText}`)
         }

         router.push("/clientPage")

        } catch (error: any) {
            setErrors(
                <Alert
                    key={uuidv4()}
                    className="z-10"
                    severity="error"
                    onClose={() => {
                        setErrors(null);
                    }}
                >
                    {error.message}
                </Alert>
            );
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
                        Create New Site
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

            <Container component="main" maxWidth="xs"> <CssBaseline />
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={1}>
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
                                id="projectManager"
                                label="Project Manager"
                                name="projectManager"
                                autoComplete="projectManager"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="postCode"
                                label="Post Code"
                                name="postCode"
                                type="tel"
                                autoComplete="postCode"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Contact Email"
                                name="email"
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
                                autoComplete="phone"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Project Start Date" name="startDate" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Project End Date" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    {errors}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3 }}
                    >
                        Add Site to Dashboard
                    </Button>
                </Box>

            </Container >

        </>

    )

}

export default withAuth(createSite, [1, 3]);