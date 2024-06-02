import React from "react";
import DetailsCardComponent from "./DetailsCardComponent";
import TopPanelComponent from "./TopPanelComponent";

export default () => {
  return (
    <div className="centered-flex mt-5">
      <div className="w-85">
        <div className="centered-flex">
          <div className="horizontal-container">
            <TopPanelComponent />
          </div>
        </div>
        <div className="collections">
          <div className=" mt-5">
            <h2>Collections</h2>
          </div>
          <div className="centered-flex">
            <DetailsCardComponent
              name="Léa Jacquot"
              cardImg="Rectangle 10.png"
              title="Night Sky"
              ntf="120"
              img="image 8.png"
              priceRange="0.12BTC - 0.18BTC"
              content="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor..."
            />
            <DetailsCardComponent
              name="Julien"
              cardImg="Rectangle 13.png"
              title="Future"
              ntf="120"
              img="Mask group.png"
              priceRange=" 0.12BTC - 0.18BTC"
              content="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor..."
            />
            <DetailsCardComponent
              name="Maria"
              cardImg="Rectangle 10.png"
              title="Mother Nature"
              ntf="120"
              img="Mask group 2.png"
              priceRange="0.12BTC - 0.18BTC"
              content="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
