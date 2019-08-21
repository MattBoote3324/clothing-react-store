import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={
      "custom-button " +
      (isGoogleSignIn ? "google-sign-in" : null) +
      (inverted ? "inverted" : null)
    }
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
