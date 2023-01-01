import React from "react";
import { useGlobalContext } from "../context/Context";

const Alert = () => {
  const { alert } = useGlobalContext();
  return (
    alert && (
      <div>
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      </div>
    )
  );
};

export default Alert;
