"use client"

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
import { useState, MouseEvent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import pdImage from "/app/public/project divert logo.png";
import backgroundImage from "/app/public/background.jpg";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ScaleIcon from '@mui/icons-material/Scale';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const encoreBlue = '#3382c4';
const encoreRed = '#f04e43';
const encorePurple = '#883995';
const encoreGreen = '#93bf3e';
const encoreGrey = '#444c52';

export default function Home() {

    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const openMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorNav(event.currentTarget);
    };
    const closeMenu = () => {
        setAnchorNav(null);
    };


    return (
        <>
            <AppBar position="static" sx={{ bgcolor: encoreGreen }}>
                <Toolbar>
                    <Box paddingRight={5}>
                        <a href="http://localhost:3000/clientPage">
                            <Image alt="Encore" src={companyImage} width={110} />
                        </a>
                    </Box>

                    <Box flexGrow={1}>
                        <a href="http://localhost:3000/clientPage">
                            <Image alt="Encore" src={pdImage} width={50} />
                        </a>
                    </Box>

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

            <div className="flex">
                <Image alt="background" src={backgroundImage} className=" object-fill opacity-75 absolute" />
            </div>

            <div className="relative top-24 flex justify-center items-center overflow-y-hidden overflow-x-hidden">

                <div className=" pr-16">
                    <IconButton>
                        <CurrencyPoundIcon style={{ color: "white", scale: 2 }}></CurrencyPoundIcon>
                    </IconButton>
                    <div>
                       <p style={{color: "white"}}>£60k+ saved</p> 
                    </div>
                </div>

                <div className=" pr-16">
                    <IconButton>
                        <VolunteerActivismIcon style={{ color: "white", scale: 2 }}></VolunteerActivismIcon>
                    </IconButton>
                    <div>
                        <p style={{color: "white"}}>148 charities helped </p>
                    </div>
                </div>

                <div className=" pr-16">
                    <IconButton>
                        <ScaleIcon style={{ color: "white", scale: 2 }}></ScaleIcon>
                    </IconButton>
                    <div>
                        <p style={{color: "white"}}>44k+ kgCO2 saved </p>
                    </div>
                </div>

                <div className=" pr-16">
                    <IconButton>
                        <EmojiEmotionsIcon style={{ color: "white", scale: 2 }}></EmojiEmotionsIcon>
                    </IconButton>
                    <div>
                        <p style={{color: "white"}}>100% social value</p>
                    </div>
                </div>
            </div>

        </>
    )
}