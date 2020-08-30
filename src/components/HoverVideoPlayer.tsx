import React, { useState, useRef } from "react";

type Props = React.VideoHTMLAttributes<any>;

export default function HoverVideoPlayer(props: Props) {
  const [mouseOver, setMouseOver] = useState(false);
  const videoRef = useRef(null);

  return (
    <video
      ref={videoRef}
      autoPlay={mouseOver}
      muted
      loop
      {...props}
      onMouseEnter={() => {
        setMouseOver(true);
        videoRef.current.play();
      }}
      onMouseLeave={() => {
        setMouseOver(false);
        videoRef.current.pause();
      }}
    />
  );
}
