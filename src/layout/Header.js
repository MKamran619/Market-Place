import React from "react";
import Button from "../components/common/Button";
export default () => {
  return (
    <div className="justify-btw ml-10 mr-10">
      <h1>MARKETPLACE.</h1>
      <div>
        <Button type="outlined" title="Connect Wallet" />
        {/* <Button type="contained" title="Connect Wallet" /> */}
      </div>
    </div>
  );
};
