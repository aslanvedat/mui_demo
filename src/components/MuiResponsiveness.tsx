import { Box } from "@mui/material"
//45. video sonunda dokumanin gosterilen yerine tekrar goz at boyutlandirmalarla alakali güzel ayrintilar var!!!
export const MuiResponsiveness = () => {
    return (
        <Box sx={{
            height: "300px",
            width: {
                xs: 100, sm: 200, md: 300, lg: 400, xl: 500
            },
            bgcolor: "primary.main",

        }}> </Box>
    )
}
