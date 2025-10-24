import React, { useState } from "react";

const ApplyButton = () => {
  const [isApplied, setIsApplied] = useState(false);

  const handleClick = () => {
    setIsApplied(!isApplied);
  };

  const text = isApplied ? "Aplicado" : "Aplicar";
  //const buttonClass = isApplied ? "is-applied" : "";

  return (
    <button className="button-apply-job" onClick={handleClick}>
      {text}
    </button>
  );
};

export default ApplyButton;
