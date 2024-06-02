import React from "react";
export default (props) => {
  return (
    <div>
      {props.type == "contained" && (
        <div className="contained">
          <button style={{ height: props.height }}>{props.title}</button>
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
