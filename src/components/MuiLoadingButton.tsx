import { Stack } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import SaveIcon from "@mui/icons-material/Save"
export const MuiLoadingButton = () => {
    return (
        <Stack spacing={2} direction={"row"}>
            <LoadingButton variant="outlined">submit</LoadingButton>
            <LoadingButton loading variant="outlined" >submit</LoadingButton>
            <LoadingButton variant="outlined" loadingIndicator="loading..."> Fetch data</LoadingButton>
            <LoadingButton loading variant="outlined" loadingIndicator="loading..."> Fetch data</LoadingButton>
            <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveIcon />}>Save</LoadingButton>
            <LoadingButton variant="outlined" loading loadingPosition="start" startIcon={<SaveIcon />}>Save</LoadingButton>
        </Stack>
    )
}
