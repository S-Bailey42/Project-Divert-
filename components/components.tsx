"use-client"
import Icon from "@mdi/react";
import { mdiMenu, mdiLogout } from "@mdi/js";
import { Box, Button, Drawer, IconButton } from "@mui/material"
import { useState } from "react"

export function SideDrawer() {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  };



  const [open, setOpen] = useState(false)

  const OpenButton = () => (
    <IconButton
      onClick={toggleDrawer(true)}
      size="large"
      edge="start"
      aria-label="menu"
      sx={{ m: 0 }}
    >
      <Icon size={1.0} path={mdiMenu} />
    </IconButton>
  )

  const DrawerList = () => (


    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <Button sx={{ mt: "auto", mb: 0 }} startIcon={<Icon path={mdiLogout} size={1} />} color="error">
          Log out
        </Button>
        <div className="mb-0 mt-auto flex w-10 h-10 debug-border" ></div>

      </Box>
    </Drawer>

  )

  return (
    <>
      <OpenButton />
      <DrawerList />
    </>
  )
}