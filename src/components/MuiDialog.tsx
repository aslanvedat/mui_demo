import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState } from 'react'
export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}> Open dialog</Button>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
                <DialogTitle id="dialog-title">submit the test</DialogTitle>
                <DialogContent>
                    <DialogContentText>are you sure you want to test? you will not be able to edit after submitting</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button autoFocus>submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
