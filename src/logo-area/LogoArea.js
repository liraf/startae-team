import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom'

class LogoArea extends React.Component {

  constructor(props) {
    super();
    console.log(props);
  }

  render() {
    return (
      <section id="logo-section">
        <div className="container">
        <Link to={this.props.value.match.url.substr(0, this.props.value.match.url.indexOf('timeline'))}>
          <img className="logo-symbol" src={this.props.value.match.url.substr(0, this.props.value.match.url.indexOf('timeline')) + "img/logo-symbol.svg"} alt="" />
          <img className="logo-type" src={this.props.value.match.url.substr(0, this.props.value.match.url.indexOf('timeline')) + "img/logo-type.svg"} alt="" />
        </Link>
        </div>
      </section>
    );
  }
}

export default LogoArea;
