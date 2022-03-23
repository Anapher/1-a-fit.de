import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function CoronaPopup() {
   const [open, setOpen] = useState(true);

   const handleClose = () => setOpen(false);

   return (
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Corona Informationen</DialogTitle>
         <DialogContent>
            <DialogContentText>
            Das 1a fit hat für dich geöffnet. Nach den Vorgaben der hessischen Landesregierung gilt 3G.
            </DialogContentText>
            <DialogActions>
               <Button onClick={handleClose}>Schließen</Button>
            </DialogActions>
         </DialogContent>
      </Dialog>
   );
}
