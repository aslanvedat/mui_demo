import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

const MuiBotton = () => {
    const [formats, setFormats] = useState<string | null>(null);
    console.log({ formats, })
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
        setFormats(updatedFormats)
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">{/*spacing: araya bosluk eklemek icin row:alt alta sirali olmak yerine yan yana siralamak icin */}
                <Button variant="text" href="https://gogle.com">Text</Button>{/*href ile direk butonu linke yonlenirebiliyoruz */}
                {/* kart kutu gibi yerlere link verirken kullanilmasi iyi olur*/}
                <Button variant="contained">Contained</Button>{/* giris yaparken guzel bir gorunume sahip */}
                <Button variant="outlined">Outlined</Button>{/* metin icinde link verirken kullanilmasi veya geri cikis dugmesi icin iyi olabilir*/}

            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="error">error</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="success">success</Button>

            </Stack>
            <Stack display={"block"} spacing={2} direction={"row"}>{/*display block butonlarin farkli boyutta olmasina izin verir*/}
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>

            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" startIcon={<SendIcon />} disableRipple>start</Button>{/*disableRipple  default olarak tiklanma sonrasi gelen dalgalanma ozelligini engeller  */}
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>end</Button>{/*disableelevation default gelen golgelendirmeyi kaldirir*/}
                <IconButton aria-label="send" color="success" size="large">
                    <SendIcon />
                </IconButton>

                <Button variant="contained" color="success" href="https://web.whatsapp.com/" startIcon={<WhatsAppIcon />} >Contect</Button>
            </Stack>
            <Stack direction={"row"}>
                <ButtonGroup variant="outlined" orientation="vertical" size="small" color="secondary">
                    <Button variant="contained" onClick={() => alert("left clicked")}>left</Button>
                    <Button variant="contained">center</Button>
                    <Button variant="contained">right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction={"row"}>
                <ToggleButtonGroup aria-label="text-formatting" value={formats} onChange={handleFormatChange} orientation="vertical" color="success" size="large" exclusive>
                    <ToggleButton value={"bold"} aria-label="bold" ><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value={"italic"} aria-label="italic"><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value={"underlined"} aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiBotton