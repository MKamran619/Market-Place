import React from "react";

export default (props) => {
  return (
    // <div className="collection-card">
    //   <div>
    //     <img src={`./images/collection cards/${props.img}`} alt="img" />
    //   </div>
    // </div>
    <div className="centered-flex">
      <div className="collection-card  centered-flex">
        <div className="w-90">
          <div className="header-img">
            <img src={`./images/collection cards/${props.img}`} alt="img" />
          </div>
          <div className="justify-btw">
            <div>
              <h3>{props.title}</h3>
            </div>
            <div className="btc centered-flex">{props.btc} BTC</div>
          </div>
        </div>
      </div>
    </div>
  );
};
