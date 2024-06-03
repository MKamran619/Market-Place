import React from "react";
import { useNavigate } from "react-router-dom";
export default (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/collections");
  };
  return (
    <div>
      {props.type == "contained" && (
        <div className="contained">
          <button style={{ height: props.height }} onClick={handleClick}>
            {props.title}
          </button>
        </div>
      )}
      {props.type == "outlined" && (
        <div className="outlined">
          <button style={{ height: props.height }}>{props.title}</button>
        </div>
      )}
    </div>
  );
};
