import { SpeedDial, SpeedDialIcon } from "@mui/material"
import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"
export const MuiSpeedDial = () => {
    return (
        //bu ozellik te calismayan bazi kisimlar var birdaha bak video 26
        <SpeedDial ariaLabel="Navigation speed dial"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />} >
            <SpeedDialIcon icon={<CopyIcon />} />
            <SpeedDialIcon icon={<PrintIcon />} />
            <SpeedDialIcon icon={<ShareIcon />} />
        </SpeedDial >
    )
}
