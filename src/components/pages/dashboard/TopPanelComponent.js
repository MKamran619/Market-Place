import React from "react";
import IdCards from "../../common/IdCards";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
export default (props) => {
  const navigate = useNavigate();
  const onClickedBuyBtn = () => {
    navigate("/collections");
  };
  return (
    <div className="top-panel justify-center">
      <div className="top-panel-left w-60 ml-5">
        <div className="justify-vertical-left ml-5 ">
          <div className="">
            <div className="trending justify-center">
              <h5>Trending Now</h5>
            </div>
            <div className="top-panel-content">
              <p>{props.caption}</p>
              <h1>{props.title}</h1>
              <div className="w-85" style={{ marginBottom: "40px" }}>
                <p>{props.content}</p>
              </div>
            </div>
            <div style={{ marginBottom: "-10px", margntTop: "-10px" }}>
              <IdCards
                title="Artist"
                name="Léa Jacquot"
                img="Rectangle 10.png"
              />
            </div>
            {props.showBtn && (
              <div className="top-panel-btn justify-vertical-left">
                <div>
                  {" "}
                  <Button
                    type="contained"
                    title="Buy"
                    height="40px"
                    onButtonClicked={onClickedBuyBtn}
                  />
                </div>
                <div className="top-panel-btn-right ml-5">
                  {" "}
                  <Button
                    type="outlined"
                    title="See Collection"
                    height="40px"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="top-panel-right w-40  ">
        <div>
          <img src="./images/Rectangle 3.png" alt="img" width="330" />
        </div>
      </div>
    </div>
  );
};
