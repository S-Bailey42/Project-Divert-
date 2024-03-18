"use-client"
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { Box, Button, Drawer, IconButton } from "@mui/material"
import { useState } from "react"

export function SideDrawer() {
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen)
    };



    const [open, setOpen] = useState(false)
    const DrawerList = (
        <div>
            <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <Icon size={1.0} path={mdiMenu} />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

                </Box>
            </Drawer>
        </div>
    )

    return (
        <>
            {DrawerList}
        </>
    )
}