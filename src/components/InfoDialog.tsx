import Dialog from '@material-ui/core/Dialog';
import React from 'react';

type Props = {
   open: boolean;
   onClose: () => void;
   children?: React.ReactNode;
};

export default function InfoDialog({ open, onClose, children }: Props) {
   return (
      <Dialog fullWidth maxWidth="md" open={open} onClose={onClose} scroll="paper">
         {children}
      </Dialog>
   );
}
