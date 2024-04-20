import { Badge, Stack } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"
export const MuiBadge = () => {
    return (
        <Stack spacing={2} direction={"row"}>
            <Badge badgeContent={5} color="primary">{/*badge content icine tanimlanan sayi bildirim sayisidir*/}
                <MailIcon />
            </Badge>
            <Badge badgeContent={7} color="success">
                <MailIcon />
            </Badge>
            <Badge badgeContent={0} color="success" showZero>{/*showZero ile 0 gosteriliri yoksa sifirda bildirim olmaz*/}
                <MailIcon />
            </Badge>
            <Badge variant="dot" color="primary" invisible={true}>{/*variant ile bildirim sekliyle oynuyoruz invisible ile kapatiyoruz*/}
                <MailIcon />
            </Badge>
        </Stack>
    )
}
