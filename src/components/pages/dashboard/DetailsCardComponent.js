import React from "react";
import IdCards from "../../common/IdCards";

export default (props) => {
  return (
    <div className="centered-flex">
      <div className="detail-card  centered-flex">
        <div className="w-90">
          <div className="header-img">
            <img src={`./images/card details/${props.img}`} />
          </div>

          <div className="justify-btw">
            <div>
              <h3>{props.title}</h3>
            </div>
            <div className="ntf centered-flex">{props.ntf} NTF</div>
          </div>
          <div className="priceRange">
            <p>Price Range : {props.priceRange}</p>
          </div>
          <div className="content">
            <h5>{props.content}</h5>
          </div>
          <div style={{ width: "20px", marginBottom: "-35px" }}>
            <IdCards title="Artist" name={props.name} img={props.cardImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
