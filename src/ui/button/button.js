import React from "react";
import styles from "./button.module.css";
import cx from "clsx";

function Button({ type, className, onClick, children }) {
  return (
    <div>
      <button
        type={type}
        className={cx(styles["button"], className)}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;