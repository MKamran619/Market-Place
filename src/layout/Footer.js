import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTwitter,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <div className="footer justify-btw">
      <h2 className="ml-5">MARKETPLACE.</h2>
      <div style={{ width: "300px" }}>
        <FontAwesomeIcon icon={faFacebook} className="mr-10" />
        <FontAwesomeIcon icon={faTwitter} className="mr-10" />
        <FontAwesomeIcon icon={faGithub} className="mr-10" />
        <FontAwesomeIcon icon={faInstagram} className="mr-10" />
      </div>
    </div>
  );
};
