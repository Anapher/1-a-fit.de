import { makeStyles } from '@material-ui/core';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import clsx from 'classnames';

const useStyles = makeStyles({
   root: {
      height: '90vh',
   },
   imageContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -6000,
   },
   content: {
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
});

type Props = {
   image: React.ReactNode;
   parallaxScroll?: number;
   className?: string;
   children?: React.ReactNode;
};

export default function LandingPageParallax({ image, children, className }: Props) {
   const classes = useStyles();

   const [elementTop, setElementTop] = useState(0);
   const ref = useRef(null);

   const { scrollY } = useViewportScroll();

   const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, 1 / 3], { clamp: false });

   useLayoutEffect(() => {
      const element = ref.current;
      setElementTop(element.offsetTop);
   }, [ref]);

   return (
      <motion.div
         className={clsx(classes.root, className)}
         ref={ref}
         style={{
            y,
         }}
      >
         <div className={classes.content}>
            <div className={classes.imageContainer}>{image}</div>
            {children}
         </div>
      </motion.div>
   );
}
