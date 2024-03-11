import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Icon from "@mdi/react";
import { mdiAccount, mdiEmail, mdiMenu, mdiPhone } from '@mdi/js';
import { useEffect, useState } from 'react';
import { AppBar, Box, IconButton, Pagination, Toolbar } from '@mui/material';

export default function Home() {

    const list = [0, 0, 0, 0]//, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (

        <div className='w-full'>
            <AppBar position="sticky">
                <Toolbar sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Icon size={1.0} path={mdiMenu} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Title
                    </Typography>

                </Toolbar>
            </AppBar>
            <div className='flex flex-col gap-4 mt-4'>
                {list.map((value, index) => (
                    <Item key={index} index={index} />
                ))}
            </div>
            <Pagination count={11} defaultPage={1} className="my-4 w-fit mx-auto" />
        </div>

    )
}

function Drawer() {
    const [open,setOpen] = useState(false)
    const toggleDrawer = (newOpen:boolean) => () => {
        setOpen(newOpen)
    };
    const DrawerList = (
        <Box sx={{width:250}} role="presentation" onClick={toggleDrawer(false)}>
            
        </Box>
    )
}

function Item({ index }: { index: number }) {



    return (
        <>

            <Card >
                <CardMedia
                    image={`/${index % 6 + 1}.jpg`}
                    sx={{ height: 200 }}
                    title="skip"
                ></CardMedia>


                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        12 random items
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="flex flex-row gap-2">
                        <Icon path={mdiAccount} size={1.0} />
                        Building company name
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="flex flex-row gap-2">
                        <Icon path={mdiEmail} size={1.0} />
                        Name@Website.com
                    </Typography>
                    <Typography variant="body1" color="text.secondary" className="flex flex-row gap-2">
                        <Icon path={mdiPhone} size={1.0} />
                        07534 123445
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
