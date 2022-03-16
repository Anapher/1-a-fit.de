import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import to from '../utils/to';

export type NavigationLink = {
   title: string;
   to: string;
};

type Props = {
   open: boolean;
   onClose: () => void;
   links: NavigationLink[];
};

export default function NavigationDrawer({ open, onClose, links }: Props) {
   return (
      <Drawer anchor="left" open={open} onClose={onClose}>
         <List style={{ width: 280 }}>
            {links.map((link) => (
               <ListItem button {...to(link.to)} key={link.title}>
                  <ListItemText
                     primary={link.title}
                     primaryTypographyProps={{ style: { fontWeight: 'bold', fontSize: 15, marginLeft: 1 } }}
                  />
               </ListItem>
            ))}
         </List>
      </Drawer>
   );
}
