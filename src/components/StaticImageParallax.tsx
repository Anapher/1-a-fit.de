import { makeStyles } from '@material-ui/core';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useLayoutEffect, useRef, useState } from 'react';
import clsx from 'classnames';

const useStyles = makeStyles({
   root: {
      position: 'relative',
      overflow: 'hidden',
   },
   imageContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -6000,
   },
});

type Props = React.HTMLAttributes<HTMLDivElement> & {
   image: React.ReactNode;
   aspectRatio: number;
   parallaxScroll?: number;
};

export default function StaticImageParallax({
   image,
   children,
   aspectRatio,
   className,
   parallaxScroll = 200,
   ...props
}: Props) {
   const classes = useStyles();

   const [elementTop, setElementTop] = useState(0);
   const ref = useRef(null);

   const { scrollY } = useViewportScroll();

   const y = useTransform(scrollY, [elementTop, elementTop + 1000], [0, -parallaxScroll], {});

   useLayoutEffect(() => {
      const element = ref.current;
      setElementTop(element.offsetTop);
   }, [ref]);

   return (
      <div ref={ref} className={clsx(classes.root, className)} {...props}>
         <motion.div
            className={classes.imageContainer}
            style={{
               y,
               height: `calc(100% + ${parallaxScroll}px)`,
               width: `calc(100% + ${parallaxScroll * aspectRatio}px)`,
            }}
         >
            {image}
         </motion.div>
         {children}
      </div>
   );
}
