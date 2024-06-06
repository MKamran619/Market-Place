import React, { useState } from "react";
import Button from "../components/common/Button";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { AccountActive, boughtItem } = location?.state || {
    AccountActive: "Connect Wallet",
    boughtItem: null,
  };

  const [connection, setConnection] = useState("Connect Wallet");
  const [color, setColor] = useState("none");
  const [showDialog, setShowDialog] = useState("none");
  const [Item, setItem] = useState();

  const handleClicked = (value) => {
    setShowDialog(value);
  };
  const onClickedShopingStart = (value) => {
    navigate("/collections");
    setShowDialog("none");
  };

  React.useEffect(() => {
    setConnection(AccountActive);
    setColor("#fff");
  }, [AccountActive]);

  React.useEffect(() => {
    setItem(boughtItem);
    setColor("#fff");
  }, [boughtItem]);

  const onClickedBtn = () => {
    if (connection === "Connect Wallet") {
      setColor("#e6e9f2");
      navigate("/connect-wallet");
    } else if (connection === "Account") {
      setShowDialog("");
    }
  };
  return (
    <div style={{ backgroundColor: color }}>
      <div className="header justify-btw ml-10 mr-10">
        <h1>MARKETPLACE.</h1>
        <div className="justify-center">
          <Button
            type="outlined"
            title={connection}
            onButtonClicked={() => onClickedBtn("")}
          />
        </div>
        <div className="account-card" style={{ display: showDialog }}>
          <div
            className="flex"
            style={{
              position: "absolute",
              marginLeft: "8px",
              marginTop: "25px",
            }}
          >
            <img
              src="images/account card/Group 39986.png"
              alt="img"
              width="8"
              style={{ cursor: "pointer" }}
              onClick={() => handleClicked("none")}
            />
            <img
              src="images/account card/Group 39986.png"
              alt="img"
              width="8"
              style={{ cursor: "pointer" }}
              onClick={() => handleClicked("none")}
            />
          </div>

          <div className="account-card-content">
            <div className="justify-btw w-90 ml-5">
              <div className="justify-center">
                <img
                  src="images/account card/Ellipse 431.png"
                  alt="img"
                  width="30"
                  className="ml-5"
                />
                <h6 className="ml-5">STV6Q...4Z7WD</h6>
                <img
                  className="ml-5"
                  src="images/account card/zondicons_copy.png"
                  alt="img"
                  width="12"
                />
              </div>
              <div>
                <img
                  className="ml-5"
                  src="images/account card/Sign_in.png"
                  alt="img"
                  width="20"
                  onClick={() => handleClicked("none")}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="ml-10">
              <div
                style={{
                  marginBottom: "-15px",
                  color: "#7B7B7B",
                  fontSize: "12px",
                }}
              >
                <p>In your wallet</p>
              </div>
              <h2>0.129 BTC</h2>
            </div>
            <div
              className="ml-10"
              style={{ marginTop: "50px", fontSize: "12px" }}
            >
              <h1>Your NTFs</h1>
              <div
                style={{
                  color: "#7B7B7B",
                  fontSize: "14px",
                  marginTop: "50px",
                  marginLeft: "20px",
                  display: Item ? "none" : "",
                }}
              >
                <div>
                  <p>You don’t own any NFTs yet</p>
                </div>
                <div style={{ marginTop: "70px" }}>
                  <Button
                    type="contained"
                    title="Start Shoping"
                    onButtonClicked={() => onClickedShopingStart("")}
                  />
                </div>
              </div>
              <div style={{ marginLeft: "-7px", display: Item ? "" : "none" }}>
                <img
                  src={`images/collection cards/${Item}`}
                  alt="img"
                  width="230"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
