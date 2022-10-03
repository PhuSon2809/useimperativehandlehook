import React from "react";
import clsx from "clsx";
import styles from "./Paragraph.module.css";

function Button({ primary }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    "d-flex": false,
  });

  return <button className={classes}>Button</button>;
}

export default Button;
