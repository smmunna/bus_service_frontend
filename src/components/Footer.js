import React from "react";
import "../App.css"
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="App">
      <div className="footer-nav">
        <nav class="navbar fixed-bottom">
          <div class="container-fluid">
            <p className="footer">
              Designed & Developed by <a className="flink" href="https://www.facebook.com/smmunna21">Sm Munna</a> {year}&copy;
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
