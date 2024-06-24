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
import withAuth from '@/components/withAuth';
import { useSearchParams } from 'next/navigation';






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
      <div className="box m-4 flex ">
        {items.map((value: any, index: number) => (
          <GridItem key={index} data={value} index={index} />
        ))}
      </div>
    )
  }
}

function Home() {

  const list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]//, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  const [items, setItems] = useState<any[]>([])

  const searchParams = useSearchParams()

  useEffect(() => {
    async function getItems(count: number, pageNumber: number) {
      let token: string | null | object = localStorage.getItem("authToken");
      if (!token) {
        //console.error("No auth token found");
        throw new Error("No auth token found");
      }

      let token_obj = JSON.parse(token);

      if (!("access_token" in token_obj)) {
        throw new Error("No auth token found");
      }

      const response: any = await fetch(`http://127.0.0.1:8000/items`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token_obj.access_token}`,
          "Content-Type": "application/json",
        },
        //credentials: "include",
      });

      //console.log(token)
      //console.log(response)

      if (!response.ok) {
        //console.error(`HTTP error! status: ${response.status}`);
        throw new Error(`Error fetching account requests:, ${response.status}`);
      }



      if (response.ok) {
        let data = await response.json()


        let temp_items = [...data.items]
        temp_items = temp_items.map(async (value, index) => {
          const response: any = await fetch(`http://127.0.0.1:8000/items/images?item_id=${value.id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token_obj.access_token}`,
              "Content-Type": "application/json",
            },
            //credentials: "include",
          });

          let images = await response.json()

          let v = { ...value, images }
          return v
        })
        temp_items = await Promise.all(temp_items).then((v) => v)
        console.log(temp_items)
        setItems(temp_items)
      }

    }



    getItems(12, 0)
  }, [])

  useEffect(() => {

  }, [items])



  const [itemView, setItemView] = useState("list")

  return (
    <div className='h-[100px]  z-10'>
      <AppBar position="fixed" color="transparent">
        <SearchMenuMobile />
      </AppBar>
      <div className="pb-[52px]" />
      <div className='h-[100vh] w-full flex-col flex'>


        <ItemArea itemView={itemView} items={items} />

        <Pagination count={11} defaultPage={1} className=" w-fit mt-auto mb-0 self-end mx-auto" />
      </div>
    </div>
  )
}



const ItemInfo = ({ data }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.images.length;

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
          {data.Name}
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
            {data.images.map((step, index) => (
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
                      height:"200px"
                    }}
                    src={`http://localhost:8000/items/image/${step}`}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <MobileStepper
            variant={data.images.length > 10 ? "progress" : "dots"}
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
          {JSON.stringify(data, null, 2)}
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
        {data.Name}
      </Typography>
      <Typography variant="body1" component="div">
        {`Quantity: ${data.Quantity}`}
      </Typography>
    </CardContent>
    <CardActions>
      <ItemDialog data={data} />
    </CardActions>
  </Card>
)

export default withAuth(Home, [2, 3])
