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
               Dein 1a fit hat mit Einschränkungen geöffnet (2G+).
               <br />
               <br />
               Falls du <b>Geboostert</b> bist, musst du nichts weiter beachten.
               <br />
               Geimpfte oder Genesene müssen einen Test vorweisen
            </DialogContentText>
            <DialogActions>
               <Button onClick={handleClose}>Schließen</Button>
            </DialogActions>
         </DialogContent>
      </Dialog>
   );
}
