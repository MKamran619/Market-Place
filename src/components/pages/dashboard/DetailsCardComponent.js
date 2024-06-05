import React from "react";
import IdCards from "../../common/IdCards";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

export default (props) => {
  const navigate = useNavigate();
  const handleClicked = () => {
    navigate("/collections");
  };
  return (
    <div className="justify-center">
      <div className="detail-card  justify-center">
        <div style={{ display: props.showBtn }}>
          <Button
            type="arrowbtn"
            title="Go to collection"
            onButtonClicked={() => handleClicked("")}
          />
        </div>
        <div className="w-90">
          <div className="header-img">
            <img src={`./images/card details/${props.img}`} />
          </div>

          <div className="justify-btw">
            <div>
              <h3>{props.title}</h3>
            </div>
            <div className="ntf justify-center">{props.ntf} NTF</div>
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
