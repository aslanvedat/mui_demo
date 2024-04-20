import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography, useAutocomplete } from "@mui/material"
import CatchhingPokemonIcon from "@mui/icons-material/CatchingPokemon"
import { useState } from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export const MuiNavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchhingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>POKEMON APP</Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit"
                        id="resources-button"
                        onClick={handleClick}
                        aria-control={open ? "resources-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}
                        endIcon={<KeyboardArrowDownIcon />}

                    >Resources</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{ "aria-labelledby": "resources-button", }} onClose={handleClose}


                    //alttaki 2 ozellik resources altindaki acilan popapi sagdan acmaya yariyor kaldirilabilir
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}> Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar >
    )
}
