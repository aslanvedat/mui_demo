import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

export const MuiLayout = () => {
    return (
        <Paper sx={{ padding: "32px" }} elevation={10}>{/*Paper:kart ozelligi ayrıca golgelendirme icin elecation kullanılır  */}
            <Stack sx={{
                border: "1px solid",

            }} spacing={2} direction={"row"}
                divider={<Divider orientation="vertical" flexItem />}/*flexItem araya bir cizgi atar */
            >
                {/*Box default olarak div ozelliklidir ama component anatation sayesinde degistirilebilir*/}
                <Box  /*component={"span"}*/
                    sx={{
                        backgroundColor: "primary.main",
                        color: "white",
                        height: "100px",
                        width: "100px",
                        padding: "16px",
                        "&:hover": {
                            backgroundColor: "primary.light",
                        },

                    }}>
                    Codevolution

                </Box>
                <Box display={"flex"} height={"100px"} width={"100px"} bgcolor={"success.light"} p={2}/*p=2 mui'de 16px esittir  */  >

                </Box>
            </Stack>

            <Grid container my={4} rowSpacing={2} columnSpacing={1}>{/*spacingler le satir ve sutun aralarina bosluklar veriyoruz */}
                <Grid item xs={12} sm={6}>{/*sm sayesinde telefon modunda alt alta siralanir  */}
                    <Box bgcolor={"primary.light"} p={2}>item 1</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor={"primary.light"} p={2}>item 2</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor={"primary.light"} p={2}>item 3</Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box bgcolor={"primary.light"} p={2}>item 4</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}
