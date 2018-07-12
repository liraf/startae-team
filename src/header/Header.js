import React, { Component } from 'react';

class Header extends React.Component {

  constructor(props) {
    super();
    this.state = {
      avatars: [],
    };
  }

  render() {
    return (
      <section id="header-section">
        <div className="container">
          <p className="header-title animated fadeInDown">Meet our team</p>
          <p className="header-subtitle">We are a group of multi-skilled individuals who are entrepreneurial by nature and live to make digital products and services that people love to use.</p>
          <div className="twitter-intro">
            <img src={this.props.value.match.path + "img/logo-twitter.svg"} alt="" />
            <p>Latest tweets from our team</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
