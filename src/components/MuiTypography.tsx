import { Typography } from "@mui/material"

const MuiTypography = () => {
    return (
        <div>
            <Typography variant="h1">deneme h1 </Typography>
            <Typography variant="h2">deneme h2 </Typography>
            <Typography variant="h3" gutterBottom>deneme h3 </Typography>{/*  gutterBottom alta margin(kenar boslugu) eklemeye yarar  */}
            <Typography variant="h6">deneme h6 </Typography>
            <Typography variant="h6" component="h1" >deneme h6 component h1 </Typography>
            <Typography variant="subtitle1">subtitele1 </Typography>
            <Typography variant="subtitle2">subtitle2 </Typography>
            <Typography variant="body1">{/*paragraf yerine kullanilir */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio autem itaque consequuntur quae ratione impedit odit voluptas provident magnam inventore! Sit incidunt aut amet! Fuga expedita doloribus magni dignissimos aliquam! </Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit, cupiditate excepturi impedit accusamus, laborum doloremque, aspernatur illum quas blanditiis officia ea dicta harum soluta optio assumenda porro eius corporis! </Typography>


        </div>
    )
}

export default MuiTypography