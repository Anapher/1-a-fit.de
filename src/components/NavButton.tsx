import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles({
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: "transparent",
    color: "inherit",
    boxShadow: "none",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: 12,
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#999999",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle",
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
      },
    },
  },
  fullWidth: {
    width: "100%",
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none",
  },
});

type Props = {
  fullWidth?: boolean;
  disabled?: boolean;
  children?: any;
  className?: string;

  href?: string;
  target?: string;
  rel?: string;
} & React.ComponentProps<typeof Button>;

const NavButton = React.forwardRef((props: Props, ref) => {
  const { color, children, fullWidth, disabled, className, ...rest } = props;

  const classes = useStyles();

  const btnClasses = classNames(
    {
      [classes.button]: true,
      [classes.fullWidth]: fullWidth,
      [classes.disabled]: disabled,
    },
    className
  );

  return (
    <Button {...rest} ref={ref as any} className={btnClasses}>
      {children}
    </Button>
  );
});

export default NavButton;
