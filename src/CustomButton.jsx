import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const CustomStyledButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const customButtonStyles = {
    backgroundColor: isHovered ? "pink" : "purple",
    color: "white",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        style={customButtonStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Custom Styled Button
      </Button>
    </div>
  );
};

export default CustomStyledButton;
