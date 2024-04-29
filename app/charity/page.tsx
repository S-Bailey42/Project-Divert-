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
import { AppBar, Box, Divider, Drawer, IconButton, InputBase, Pagination, Paper, Slider, Stack, TextField, Toolbar } from '@mui/material';
import { SideDrawer } from '@/components/components';
import { useState } from 'react';
import values from "../../values.json"

const TopBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
        <SideDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Title
        </Typography>

      </Toolbar>
    </AppBar>
  )
}

const SearchMenuMobile = () => {

  const [openSearchMenu, setOpenSearchMenu] = useState(false),
    handleSearchMenuOpen = () => setOpenSearchMenu(true),
    handleSearchMenuClose = () => setOpenSearchMenu(false)

  const TopBar = () => (
    <Paper
      elevation={0}
      component="form"
      sx={{ p: "2px 4px", borderRadius: 0, display: "flex", alignItems: "center", width: "full" }}
    >
      <SideDrawer />
      <InputBase placeholder='Search for products' sx={{ ml: 1, flex: 1 }} />
      <IconButton >
        <Icon path={mdiMagnify} size={1.0} />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton onClick={handleSearchMenuOpen}>
        <Icon path={mdiTune} size={1.0} />
      </IconButton>
    </Paper>
  )

  const SearchDrawer = () => (
    <Drawer anchor={"bottom"} open={openSearchMenu} onClose={handleSearchMenuClose}>
      <Box >
        <Button>abc</Button>
        <Button>abc</Button>
      </Box>
    </Drawer>
  )

  return (
    <>
      <TopBar />
      <SearchDrawer />
    </>
  )
}

const ItemArea = ({ itemView, items }: { itemView: string, items: any }) => {
  if (itemView == "list") {
    return (
      <div className="box m-4">
        {items.map((value: any, index: number) => (
          <GridItem key={index} data={values.items[index % 6]} index={index} />
        ))}
      </div>
    )
  }
}

export default function Home() {

  const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]//, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const [itemView, setItemView] = useState("list")

  return (
    <>
      <div className='w-full'>
        <AppBar position="sticky">
          <SearchMenuMobile />
        </AppBar>

        <ItemArea itemView={itemView} items={list} />

        <Pagination count={11} defaultPage={1} className="my-4 w-fit mx-auto" />
      </div>
    </>
  )
}

const ListItem = ({ index, data }: { index: number, data: any }) => (

  <Card sx={{ display: 'flex', width: "full" }}>
    <CardMedia
      component="img"
      image={`/${index % 6 + 1}.jpg`}
      sx={{ height: 250, width: 350 }}
      title="skip"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent className=" my-auto debug-border w-fit">
        <Typography sx={{ flex: "none" }} gutterBottom variant="h5"  >
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
          {data.phoneNumber}
        </Typography>
      </CardContent>
    </Box>
    <CardActions className='debug-border grid ml-auto mr-0   gap-2'>
      <Button variant="outlined" size="large">
        More info
      </Button>
    </CardActions>
  </Card>
)


const GridItem = ({ index, data }: { index: number, data: any }) => (
 
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
        {data.phoneNumber}
      </Typography>
    </CardContent>
    <CardActions>
      <Button>
        More info
      </Button>
    </CardActions>
  </Card>
)
