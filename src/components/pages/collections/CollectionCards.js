import React from "react";
import Button from "../../common/Button";

export default (props) => {
  const handleClicked = () => {};
  return (
    <div className="justify-center">
      <div className="collection-card  justify-center">
        <div style={{ display: props.showBtn }}>
          <Button
            type="arrowbtn"
            title="Buy"
            onButtonClicked={() => handleClicked("")}
          />
        </div>
        <div className="w-90">
          <div className="header-img">
            <img src={`./images/collection cards/${props.img}`} alt="img" />
          </div>
          <div className="justify-btw">
            <div>
              <h3>{props.title}</h3>
            </div>
            <div className="btc justify-center">{props.btc} BTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};
