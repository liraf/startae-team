import React, { Component } from 'react';
import Timeline from '../timeline/Timeline.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link, NavLink, Redirect } from 'react-router-dom'

function CardImage(props) {
  var value = 'url(' + props.value + ')';
  var divStyle = {
    backgroundImage: value,
  };
  return (
    <div className="card-avatar" style={divStyle}></div>
  );
}

class Cards extends React.Component {

  constructor(props) {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/kandebonfim/2efe731004c9311d1237e88a656a425f/raw/c3befc78feb7454f4cccb5308d38319ac77be71e/makers.json')
    .then(result => result.json())
    .then(cards=>this.setState({cards}));
  }


  render() {
    return (
      <section id="card-section">
        <div className="container">
          <div className="row">
          {this.state.cards.map(card=>
            <div className="col l3 m4 s6">
              <Link to={`${this.props.value.match.url}timeline/${card.twitter.substring(20)}`}  className="card hvr-overline-from-left">
                <CardImage
                  value={card.avatar}
                />
                <p className="card-name">{card.name}</p>
                <p className="card-social hide-on-small-only">@{card.twitter.substring(20)}</p>
                <p className="card-function hide-on-small-only">{card.role}</p>
                <p className="card-function hide-on-med-and-up">{card.role}</p>
                <p className="card-social hide-on-med-and-up">@{card.twitter.substring(20)}</p>
                <p className="card-tweet">"{card.tweet}"</p>
                <div className="card-likes-container">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                  <span>1</span>
                </div>
              </Link>
            </div>)}
          </div>
        </div>
        <Route path={`${this.props.value.match.url}/timeline/:cardTwitter`}
           render={ (data, props) => <Timeline data={this.state.cards} {...props} />} />
      </section>
    );
  }
}

export default Cards;
