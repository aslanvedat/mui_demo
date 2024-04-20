import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
export const MuiList = () => {
    return (
        <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
            <List>

                <ListItem disablePadding>
                    <ListItemButton>{/*buton haline gelmesi icin kullanilir */}
                        <ListItemIcon>
                            <ListItemAvatar>{/*mail icon altindaki yuvarlak bu ozellikle yapildi */}
                                <Avatar>
                                    <MailIcon />{/*mail icon burda tanimlandi*/}
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="List item 1" secondary="secondary text" />
                    </ListItemButton>
                </ListItem>
                <Divider />{/* list itemler arasina cizgi atarak bir birinden ayrildigi yeri gosterir */}
                <ListItem>
                    <ListItemIcon> <ListItemAvatar><Avatar><MailIcon /></Avatar></ListItemAvatar></ListItemIcon>

                    <ListItemText primary="List item 2" secondary="secondary text" />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemIcon> <ListItemAvatar><Avatar><MailIcon /></Avatar></ListItemAvatar></ListItemIcon>
                    <ListItemText primary="List item 3" secondary="secondary text" />
                </ListItem>
            </List>
        </Box >

    )
}
