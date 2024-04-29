"use-client";
import Icon from "@mdi/react";
import { mdiMenu, mdiLogout } from "@mdi/js";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export function SideDrawer() {
  const [open, setOpen] = useState(false),
    handleDrawerOpen = () => setOpen(true),
    handleDrawerClose = () => setOpen(false);

  const OpenButton = () => (
    <IconButton
      onClick={handleDrawerOpen}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
  );

  const DrawerList = () => (
    <Drawer open={open} onClose={handleDrawerClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerClose}>
        <Button
          sx={{ mt: "auto", mb: 0 }}
          startIcon={<Icon path={mdiLogout} size={1} />}
          color="error"
        >
          Log out
        </Button>
        <div className="mb-0 mt-auto flex w-10 h-10 debug-border"></div>
      </Box>
    </Drawer>
  );

  return (
    <>
      <OpenButton />
      <DrawerList />
    </>
  );
}
