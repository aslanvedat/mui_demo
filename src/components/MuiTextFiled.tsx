import { Stack, TextField } from "@mui/material"
import { useState } from "react"

export const MuiTextFiled = () => {
    const [value, setValue] = useState("");
    return (
        <Stack spacing={4} >
            <Stack direction={"row"} spacing={2}>
                <TextField label="Name" variant="outlined"></TextField>
                <TextField label="Name" variant="filled"></TextField>
                <TextField label="Name" variant="standard"></TextField>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="Small secondary" size="small" color="secondary"></TextField>
                <TextField label="Medium error" size="medium" color="error"></TextField>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <TextField label="Form Input" type="password" required value={value} onChange={(e) => setValue(e.target.value)} error={!value}
                    helperText={!value ? "requerid" : "do not share your password with anyone"}
                />{/*required = doldurulmasi gereken alan etiketi*/}
                <TextField label="password" type="password" disabled helperText="Do not share your password with anyone" />{/*helperText=input alani altina bilgi notu  disabled:textFiled'i devre disi birakir*/}
                <TextField label="read only " InputProps={{ readOnly: true }} />{/*icine herhangi bisey yazamazsin(cok gerekli degil) ! */}

            </Stack>
        </Stack>
    )
}
