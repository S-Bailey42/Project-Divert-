"use client"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Icon from "@mdi/react";
import { mdiAccount, mdiChevronDown, mdiChevronUp, mdiEmail, mdiMagnify, mdiMapMarker, mdiMenu, mdiPhone, mdiTune } from '@mdi/js';
import { useEffect } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, InputBase, Pagination, Paper, Stack, TextField, Toolbar } from '@mui/material';
import { SideDrawer } from '@/components/components';
import { useState } from 'react';
import values from "../../values.json"

const TopBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
                <SideDrawer />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Title
                </Typography>

            </Toolbar>
        </AppBar>
    )
}

const SearchMenu = () => {

    const [open, setOpen] = useState(false)

    const TopBar = () => (

        <Paper component="form" sx={{ p: "2px 4px", borderRadius: 0, display: "flex", alignItems: "center", width: "full" }}>

            <IconButton sx={{ p: "10px" }}>
                <Icon path={mdiMenu} size={1.0} />
            </IconButton>
            <InputBase placeholder='Search for products' sx={{ ml: 1, flex: 1 }} />
            <IconButton >
                <Icon path={mdiMagnify} size={1.0} />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
            <IconButton onClick={() => setOpen(!open)}>
                <Icon path={mdiTune} size={1.0} />
            </IconButton>

        </Paper>

    )

    const SearchDrawer = () => (
        <Drawer anchor={"bottom"} open={open} onClose={() => setOpen(false)}>
            <Box>
                <Button>abc</Button>
            </Box>
        </Drawer>
    )

    return (
        <AppBar position="sticky">
            <TopBar />
            <SearchDrawer />
        </AppBar>

    )
}


export default function Home() {

    const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]//, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (
        <>

            <div className='w-full'>
                <AppBar position="sticky">
                    <SearchMenu />
                </AppBar>


                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 m-4'>
                    {list.map((value, index) => (
                        <Item key={index} data={values.items[index % 6]} index={index} />
                    ))}
                </div>
                <Pagination count={11} defaultPage={1} className="my-4 w-fit mx-auto" />
            </div>
        </>

    )
}

function Item({ index, data }: { index: number, data: any }) {

    return (
        <>
            <Card >
                <CardMedia
                    image={`/${index % 6 + 1}.jpg`}
                    sx={{ height: 200 }}
                    title="skip"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {`(${data.quantity}) ${data.item}`}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="flex flex-row gap-2">
                        <Icon path={mdiAccount} size={1.0} />
                        {data.company}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="flex flex-row gap-2">
                        <Icon path={mdiMapMarker} size={1.0} />
                        {data.location}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="flex flex-row gap-2">
                        <Icon path={mdiPhone} size={1.0} />

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                        More info
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
