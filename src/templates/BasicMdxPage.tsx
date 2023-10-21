import React from 'react';

import Layout from '../components/Layout';
import { container } from '../style/shared';
import { makeStyles } from '@material-ui/core';
type Props = {
   children: React.ReactNode;
};
const useStyles = makeStyles({
   container: {
      ...container,
      paddingTop: 32,
      paddingBottom: 32,
   },
});
export default function Offer({ children }: Props) {
   const classes = useStyles();
   return (
      <Layout>
         <div className={classes.container}>{children}</div>
      </Layout>
   );
}
