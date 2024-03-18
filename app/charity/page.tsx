"use client"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Icon from "@mdi/react";
import { mdiAccount, mdiEmail, mdiMapMarker, mdiMenu, mdiPhone } from '@mdi/js';
import { useEffect } from 'react';
import { AppBar, Box, IconButton, Pagination, Toolbar } from '@mui/material';
import { SideDrawer } from '@/components/components';
import values from "../../values.json"

export default function Home() {

    const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]//, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (

        <div className='w-full'>
            <AppBar position="sticky">
                <Toolbar sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
                    <SideDrawer />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Title
                    </Typography>

                </Toolbar>
            </AppBar>
            <div className='flex grid-cols-1 lg:grid-cols-3 grid gap-4 m-4'>
                {list.map((value, index) => (
                    <Item key={index} data={values.items[index % 6]} index={index} />
                ))}
            </div>
            <Pagination count={11} defaultPage={1} className="my-4 w-fit mx-auto" />
        </div>

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
