import { AlertClassKey, AlertProps, Button, Snackbar, Alert } from "@mui/material"
import { useState, forwardRef } from "react"

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnacbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

export const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return
        }
        setOpen(false)
    }

    return (
        <>
            <Button onClick={() => setOpen(true)}>submit</Button>
            {/* <Snackbar message="Form submitted successfully!"
                autoHideDuration={4000} open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }} />*/}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity="success">
                    Form submitted successfully!
                </SnackbarAlert>
            </Snackbar>
        </>
    )
}
