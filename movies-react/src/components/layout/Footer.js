import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_container"></div>
        <div className="row">
          <p className="col-sm">
          July &copy;{new Date().getFullYear()} | montjoie75
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
