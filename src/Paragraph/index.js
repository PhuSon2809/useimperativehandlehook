import React from "react";
import styles from "./Paragraph.module.css";
import clsx from "clsx";
import Button from "./Button";

//classnames
//clsx

function Paragraph() {
  // Dùng nhiều class trong module css
  return (
    <div className={`${styles.paragraph} ${styles.red}`}>
      Paragraph
      <button
        className={clsx(styles.btn, styles.border, {
          [styles.green]: true,
        })}
      >
        Click me!
      </button>
<Button primary/>
      
    </div>
  );
}

export default Paragraph;
