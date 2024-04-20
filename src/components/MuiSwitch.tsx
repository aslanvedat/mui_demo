import { Box, FormControlLabel, Switch } from "@mui/material"
import { useState } from "react"

export const MuiSwitch = () => {
    const [checked, SetChecked] = useState(false)
    console.log({ checked })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        SetChecked(event.target.checked)
    }
    return (
        <Box>
            <FormControlLabel label="Dark mode" control={<Switch checked={checked} onChange={handleChange} />} />
        </Box>
    )
}
