import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const handleClicked = () => {
    navigate("/account", { state: { AccountActive: "Account" } });
  };
  return (
    <div className="connect-wallet ">
      <div className="justify-center">
        <h1>Choose the wallet to connect</h1>
      </div>
      <div className="justify-center">
        <div className="wallet-container" onClick={handleClicked}>
          {" "}
          <h1>Wallet 1</h1>
        </div>
        <div className="wallet-container" onClick={handleClicked}>
          {" "}
          <h1>Wallet 2</h1>
        </div>
        <div className="wallet-container" onClick={handleClicked}>
          {" "}
          <h1>Wallet 3</h1>
        </div>
      </div>
    </div>
  );
};
