import React from "react";
export default (props) => {
  return (
    <div className="IdCard justify-btw">
      <div className="w-30">
        <img src={`./images/cards/${props.img}`} alt="image" width="50" />
      </div>
      <div className="w-70" style={{ marginLeft: "15px" }}>
        <p>{props.title}</p>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};
