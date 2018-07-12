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
        <Link to={this.props.value.match.url}>
          <img className="logo-symbol" src="/img/logo-symbol.svg" alt="" />
          <img className="logo-type" src="/img/logo-type.svg" alt="" />
        </Link>
        </div>
      </section>
    );
  }
}

export default LogoArea;
