import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Icon from "@mdi/react";
import { mdiAccount, mdiEmail, mdiPhone } from '@mdi/js';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';


export default function Home() {

    const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (
        <>
            <div className='h-[200px] w-full bg-slate-300 sticky top-0 z-10 flex flex-row'>
                <Typography variant="h1" className="pl-8 w-fit h-fit my-auto">
                    SkipHub
                </Typography>
                <div className='mr-0 ml-auto flex flex-row gap-4'>
                    <Button size="large">
                        abc
                    </Button>
                    <Button size="large">
                        abc
                    </Button>
                    <a href="/login">Login</a>
                    <Button size="large">
                        abc
                    </Button>
                    <Button size="large">
                        abc
                    </Button>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 gap-4 w-fit mx-auto sm:grid-cols-2  p-5'>
                {list.map((value, index) => (
                    <Item key={index} index={index} />
                ))}
            </div>
            <Pagination count={10} className='mx-auto w-fit mb-4'></Pagination>
        </>
    )
}

function Toolbar() {
    return (
        <></>
    )
}

function Item({ index }: { index: number }) {



    return (
        <>

            <Card sx={{ maxWidth: 500, minWidth: 400 }}>
                <CardMedia
                    image={`/${index % 6 + 1}.jpg`}
                    sx={{ height: 150 }}
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
