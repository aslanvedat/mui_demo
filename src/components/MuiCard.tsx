import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
//direk kullanilabilecek bir yapi
export const MuiCard = () => {
    return (
        <Box width={"300px"}>
            <Card>
                <CardMedia component={"img"} height={"140"} image="http://source.unsplash.com/random" alt="unsplash image" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component={"div"} >React</Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis fugit non quo necessitatibus illo repudiandae modi, eaque doloribus. Enim quasi maiores fuga vitae ea? Suscipit voluptas pariatur totam quas.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>

                </CardActions>
            </Card>
        </Box>
    )
}
