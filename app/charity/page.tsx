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

import { Modal, AppBar, Box, Divider, Drawer, IconButton, InputBase, Pagination, Paper, Slider, Stack, TextField, Toolbar, MobileStepper } from '@mui/material';
import { SideDrawer } from '@/components/components';
import { useEffect, useState } from 'react';
import values from "../../values.json"
import SwipeableViews from 'react-swipeable-views';

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },



];

const TopBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
        <SideDrawer />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

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

  const [items, setItems] = useState(list)

  useEffect(() => {
    async function getItems(count: number, pageNumber: number) {
      let response = await fetch("http://127.0.0.1:8000/items")
      const data = await response.json()

      if (response.ok) {
        setItems(data)
      }
    }


  }, [])

  useEffect(() => {
    console.log(items)
  }, [items])



  const [itemView, setItemView] = useState("list")

  return (
    <>
      <AppBar position="fixed">
        <SearchMenuMobile />
      </AppBar>
      <div className="pb-[52px]"/>
      <div className='h-[100vh] w-full flex-col flex'>


        <ItemArea itemView={itemView} items={items} />

        <Pagination count={11} defaultPage={1} className="debug-border w-fit mt-auto mb-0 self-end mx-auto" />
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
      <CardContent className=" my-auto  w-fit">
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
    <CardActions className=' grid ml-auto mr-0   gap-2'>
      <Button variant="outlined" size="large">
        More info
      </Button>
    </CardActions>
  </Card>
)

const ItemInfo = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (

    <Card sx={{ height: "90%", margin: "auto", maxWidth: "600px", marginTop: 5 }}>
      <CardContent sx={{ height: "100%" }} >
        <Typography gutterBottom variant="h3">
          more info
        </Typography>
        <Box
          sx={{

            display: 'block',
            maxWidth: 600,
            overflow: 'hidden',
            width: '100%',
          }}>
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div className="" key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    className=""
                    component="img"
                    sx={{
                      margin: "auto",
                      display: 'block',
                      maxWidth: 600,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant={images.length > 10 ? "progress" : "dots"}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
            }
          />
        </Box>
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
        <Button variant="contained">
          Request
        </Button>
      </CardContent>



    </Card >
  )
}

const ItemDialog = ({ data }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        More info
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <ItemInfo data={data} />
      </Modal >
    </>
  )
}

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
      <ItemDialog data={data} />
    </CardActions>
  </Card>
)
