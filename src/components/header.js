import React, { Component, Fragment } from 'react';
import '../global.css';
import logo from '../res/zikom_logo.jpg';


class Header extends Component {
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render() {
    return(
      <Fragment>
      <div id="header">
        <img src={logo} alt="Logo" width="20%" height="20%" />   &nbsp; Baza Wiedzy
        </div>
        <br/><br/>
      </Fragment>
    );
  }
}

export default Header;
