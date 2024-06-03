import React from "react";
import TopPanelComponent from "../dashboard/TopPanelComponent";
import CollectionCards from "./CollectionCards";
export default () => {
  return (
    <div className="collection-container centered-flex">
      <div className=" w-85 mt-5">
        <div>
          <TopPanelComponent
            caption="Night sky collection"
            title="With the Stars"
            content="Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo"
          />
        </div>
        <div style={{ marginTop: "70px", marginBottom: "30px" }}>
          <h1>NFTs</h1>
        </div>
        <div className="collection-container-cards centered-flex ">
          <CollectionCards
            title="Night is comming"
            btc="0.12"
            img="Mask group 1.png"
          />
          <CollectionCards
            title="With the stars"
            btc="0.12"
            img="Mask group 2.png"
          />
          <CollectionCards title="Summer" btc="0.12" img="image 10.png" />
        </div>
        <div className="collection-container-cards centered-flex mt-5">
          <CollectionCards title="Quiet" btc="0.14" img="Mask group 3.png" />
          <CollectionCards title="Travel" btc="0.12" img="image 13.png" />
          <CollectionCards title="The rain" btc="0.18" img="Mask group 4.png" />
        </div>
      </div>
    </div>
  );
};
