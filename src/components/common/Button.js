import React from "react";
export default (props) => {
  return (
    <div>
      {props.type == "contained" && (
        <div className="contained">
          <button
            style={{ height: props.height }}
            onClick={props.onButtonClicked}
          >
            {props.title}
          </button>
        </div>
      )}
      {props.type == "outlined" && (
        <div className="outlined">
          <button
            style={{ height: props.height }}
            onClick={props.onButtonClicked}
          >
            {props.title}
          </button>
        </div>
      )}
      {props.type == "arrowbtn" && (
        <div className="arrowbtn">
          <button
            style={{ height: props.height }}
            onClick={props.onButtonClicked}
          >
            {props.title}{" "}
            <img src="images/arrow.png" width="20" className="ml-5" />
          </button>
        </div>
      )}
    </div>
  );
};
