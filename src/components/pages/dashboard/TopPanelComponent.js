import React from "react";
import IdCards from "../../common/IdCards";
import Button from "../../common/Button";
export default () => {
  return (
    <div className="top-panel centered-flex">
      <div className=" center-vertical-left ml-5 w-60">
        <div>
          <div className="trending centered-flex">
            <h5>Trending Now</h5>
          </div>
          <div className="top-panel-content">
            <p>Night sky collection</p>
            <h1>With the Stars</h1>
          </div>
          <div style={{ marginBottom: "-10px", margntTop: "-10px" }}>
            <IdCards title="Artist" name="Léa Jacquot" img="Rectangle 10.png" />
          </div>
          <div className="center-vertical-left">
            <div>
              {" "}
              <Button type="contained" title="Buy" height="40px" />
            </div>
            <div className="ml-5">
              {" "}
              <Button type="outlined" title="See Collection" height="40px" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-40 ">
        <div>
          <img src="./images/Rectangle 3.png" alt="img" width="350" />
        </div>
      </div>
    </div>
  );
};
