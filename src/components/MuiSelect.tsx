import { Box, MenuItem, TextField } from "@mui/material"
import { HtmlHTMLAttributes, useState } from "react";
export const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    console.log({ countries });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === "string" ? value.split(",") : value)
    }
    return (
        <Box width="250px" >
            <TextField label="select country" select value={countries} onChange={handleChange} fullWidth SelectProps={{ multiple: true }} size="small" color="secondary" helperText="please select your country">
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="AU">Austraia</MenuItem>
            </TextField>
        </Box >
    )
}
