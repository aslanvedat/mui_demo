import { IconButton, Tooltip } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
export const MuiTooltip = () => {
    return (
        <Tooltip title="Delete"
            placement="top" //bu ozellik title'in konumunu ayarlar
            arrow
            enterDelay={500}//butonun uzerine geldikten 500ms sonra title gozukur
            leaveDelay={300}//butonun uzerinden gittikten 300ms sonra ya kadar title gozukmeye devam eder 
        >
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}
