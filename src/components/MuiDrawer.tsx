import { Drawer, Box, Typography, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"
export const MuiDrawer = () => {
    const [isDrawerOpen, setisDrawerOpen] = useState(false)

    return (
        <>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setisDrawerOpen(true)} >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClick={() => setisDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component={"div"}>Side Panel </Typography>
                </Box>
            </Drawer >
        </>

    )
}
