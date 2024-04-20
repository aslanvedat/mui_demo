import { Box, Tab } from "@mui/material"
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite"


export const MuiTabs = () => {
    const [value, setValue] = useState("1")

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }
    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider", width: "500px" }}>
                    <TabList aria-label="Tabs example" onChange={handleChange} textColor="secondary" centered variant="scrollable" scrollButtons="auto">
                        <Tab label="Tab One" value="1" icon={<FavoriteIcon />} iconPosition="start" />
                        <Tab label="Tab two" value="2" disabled />
                        <Tab label="Tab three" value="3" />
                        <Tab label="Tab four" value="4" />
                        <Tab label="Tab five" value="5" />
                        <Tab label="Tab six" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">Panel 1</TabPanel>
                <TabPanel value="2">Panel 2</TabPanel>
                <TabPanel value="3">Panel 3</TabPanel>
                <TabPanel value="4">Panel 4</TabPanel>
                <TabPanel value="5">Panel 5</TabPanel>
                <TabPanel value="6">Panel 6</TabPanel>
            </TabContext>
        </Box>
    )
}
