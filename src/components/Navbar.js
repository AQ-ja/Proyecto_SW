import React from "react";
import icons from './icons.png';
import logo from './logo.png';
import "./nav.css"

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div id="div-header">
          <div id="Logo">
          <img src={logo} alt="logo" width="100px" height="25px" />
          </div>
          <div id="pr">
            PRODUCTS
          </div>
          <div id="os">
            ODM SOLUTIONS
          </div>
          <div id="co">
            COMMUNITY
          </div>
          <div id="wn">
            WHAT'S NEW
          </div>
          <div id="su">
            SUPPORT
          </div>
          <img id="icons" src={icons} alt="icons" />
        </div>
      </nav>
    )
  }
}
