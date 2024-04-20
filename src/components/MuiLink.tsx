import { Link, Stack, Typography } from "@mui/material"

export const MuiLink = () => {
    return (
        <Stack spacing={4} direction={"row"} m={4}>

            <Link href="#" variant="body2">Link</Link>
            <Typography variant="h6">
                <Link href="#"
                    color={"secondary"}
                    underline="hover"// alt cizgiyi yazilana gore gosteriyor veya gostermiyor (bu ornekte sadece fare uzerine gelirse calistiriyor )
                >secondary</Link>
            </Typography>
        </Stack >
    )
}
