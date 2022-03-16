import React from 'react';
import Scrollspy from 'react-scrollspy';
import NavButton from './NavButton';
import { NavigationLink } from './NavigationDrawer';
import to from '../utils/to';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   navLink: {
      minWidth: 96,
      padding: '0.9375rem',
      fontWeight: 400,
      fontSize: 13.5,
      textTransform: 'uppercase',
      '&:hover,&:focus': {
         color: 'inherit',
         background: 'rgba(200, 200, 200, 0.2)',
      },
      [theme.breakpoints.down('xs')]: {
         minWidth: 0,
      },
   },
   activeSection: {
      color: theme.palette.secondary.light,
   },
}));

type Props = {
   links: NavigationLink[];
};

export default function NavigationBarButtons({ links }: Props) {
   const classes = useStyles();

   return (
      <Scrollspy
         items={['vellmar', 'kassel', 'kurse', 'ueber-uns']}
         currentClassName={classes.activeSection}
         style={{ marginTop: 0, marginBottom: 0, paddingLeft: 0 }}
      >
         {links.map((x) => (
            <NavButton {...to(x.to)} className={classes.navLink} key={x.to}>
               {x.title}
            </NavButton>
         ))}
      </Scrollspy>
   );
}
