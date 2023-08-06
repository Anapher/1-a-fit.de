import {
   AppBar,
   Box,
   IconButton,
   makeStyles,
   Toolbar,
   useMediaQuery,
   useScrollTrigger,
   useTheme,
} from '@material-ui/core';
import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import LogoIcon from '../assets/logo_full.svg';
import LogoIconWhite from '../assets/logo_full_white.svg';
import { container, logoProportion } from '../style/shared';
import NavigationBarButtons from './NavigationBarButtons';
import NavigationDrawer, { NavigationLink } from './NavigationDrawer';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
   appbar: {
      transition: 'all 150ms ease 0s',
      backgroundColor: '#fff',
      color: theme.palette.text.primary,
   },
   toolbar: {
      ...container,
      display: 'flex',
   },
   appbarTransparent: {
      backgroundColor: 'transparent !important',
      boxShadow: 'none',
      paddingTop: 25,
      color: '#FFFFFF',
   },
   fixed: {
      position: 'fixed',
      zIndex: 1100,
   },
   logo: {
      width: 60,
      height: 60 * logoProportion,
      display: 'block',
      [theme.breakpoints.down('xs')]: {
         width: 45,
         height: 45 * logoProportion,
      },
      [theme.breakpoints.down(330)]: {
         width: 30,
         height: 30 * logoProportion,
      },
   },
   menuList: {
      marginTop: 0,
      marginBottom: 0,
      [theme.breakpoints.down(330)]: {
         paddingLeft: 0,
      },
   },
}));

type Props = {
   transparent?: boolean;
   fixed?: boolean;
   transparentUntil?: number;
};

const links: NavigationLink[] = [
   { title: 'Vellmar', to: '/location/vellmar' },
   { title: 'Kassel', to: '/location/kassel' },
   { title: 'Calden', to: '/location/calden' },
   { title: 'Kurse', to: '/#kurse' },
   { title: 'Über uns', to: '/ueber-uns' },
];

export default function Header({ transparent, fixed, transparentUntil }: Props) {
   const classes = useStyles();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

   const [drawerOpen, setDrawerOpen] = useState(false);

   const onToggleDrawer = () => setDrawerOpen((v) => !v);

   const trigger = useScrollTrigger({
      threshold: isMobile ? 45 : transparentUntil,
      disableHysteresis: true,
   });

   return (
      <AppBar
         position="relative"
         className={classNames([
            classes.appbar,
            {
               [classes.appbarTransparent]: transparent && !trigger,
               [classes.fixed]: fixed,
            },
         ])}
      >
         <Toolbar className={classes.toolbar}>
            {isMobile && (
               <IconButton size="medium" edge="start" color="inherit" aria-label="Menü öffnen" onClick={onToggleDrawer}>
                  <MenuIcon />
               </IconButton>
            )}
            <Link to="/">
               {trigger || !transparent ? (
                  <LogoIcon className={classes.logo} />
               ) : (
                  <LogoIconWhite className={classes.logo} />
               )}
            </Link>
            {!isMobile && (
               <Box display="flex" flexDirection="column" alignItems="flex-end" flexGrow={1}>
                  <NavigationBarButtons links={links} />
               </Box>
            )}
            {isMobile && <NavigationDrawer links={links} onClose={onToggleDrawer} open={drawerOpen} />}
         </Toolbar>
      </AppBar>
   );
}
