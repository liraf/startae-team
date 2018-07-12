import React, { Component } from 'react';

import LogoArea from '../logo-area/LogoArea.js'


class Timeline extends Component {

  constructor(props) {
    super();
    this.state = {
      cards: [],
      card: [],
      divStyle: [],
      twitter: [],
    };
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/kandebonfim/2efe731004c9311d1237e88a656a425f/raw/c3befc78feb7454f4cccb5308d38319ac77be71e/makers.json')
    .then(result => result.json())
    .then(cards=>this.setCardsState(cards));
    window.scrollTo(0, 0);
  }

  setCardsState(cards){
    var card;
    for (var i = 0; i < cards.length; i++) {
      var value = cards[i];
      if (value.twitter.substring(20) == this.props.match.params.cardTwitter) {
        card = value;
      }
    }
    var divStyle_pre = {
      backgroundImage: 'url(' + card.avatar + ')',
    };
    var twitter_pre = card.twitter.substring(20);
    this.setState({
      cards: cards,
      card: card,
      divStyle: divStyle_pre,
      twitter: twitter_pre,
    });

    this.card_main = card;
  }

  render() {
    return (
      <div>
        <LogoArea value={this.props} />
        <section id="title-section">
          <div className="container">
            <p className="timeline-title animated wow fadeInDown">{this.state.card.name}</p>
            <p className="timeline-subtitle">{this.state.card.role}</p>
          </div>
        </section>
        <section id="timeline-section">
          <div className="container">
            <div className="wrapper">
              <div className="timeline-twitter-intro">
                <img src="img/logo-twitter.svg" alt="" />
                <p>@{this.state.twitter}</p>
              </div>
              <div className="timeline">
              <dl className="timeline-entry">
                <dt className="timeline-card animated wow fadeInRight">
                  <div className="timeline-avatar-container">
                    <div className="timeline-avatar" style={this.state.divStyle}></div>
                    <div className="hide-on-med-and-down">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span>1</span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-tweet-time hide-on-med-and-down">5h</p>
                    <p className="timeline-tweet">"{this.state.card.tweet}"</p>
                    <div className="hide-on-large-only">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span className="likes-span-mobile">1</span>
                      <p className="hours-passed-mobile">5h ago</p>
                    </div>
                  </div>
                </dt>
              </dl>
              <dl className="timeline-entry">
                <dt className="timeline-card animated wow fadeInRight">
                  <div className="timeline-avatar-container">
                    <div className="timeline-avatar" style={this.state.divStyle}></div>
                    <div className="hide-on-med-and-down">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span>1</span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-tweet-time hide-on-med-and-down">5h</p>
                    <p className="timeline-tweet">"{this.state.card.tweet}"</p>
                    <div className="hide-on-large-only">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span className="likes-span-mobile">1</span>
                      <p className="hours-passed-mobile">5h ago</p>
                    </div>
                  </div>
                </dt>
              </dl>
              <dl className="timeline-entry">
                <dt className="timeline-card animated wow fadeInRight">
                  <div className="timeline-avatar-container">
                    <div className="timeline-avatar" style={this.state.divStyle}></div>
                    <div className="hide-on-med-and-down">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span>1</span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-tweet-time hide-on-med-and-down">5h</p>
                    <p className="timeline-tweet">"{this.state.card.tweet}"</p>
                    <div className="hide-on-large-only">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span className="likes-span-mobile">1</span>
                      <p className="hours-passed-mobile">5h ago</p>
                    </div>
                  </div>
                </dt>
              </dl>
              <dl className="timeline-entry">
                <dt className="timeline-card animated wow fadeInRight">
                  <div className="timeline-avatar-container">
                    <div className="timeline-avatar" style={this.state.divStyle}></div>
                    <div className="hide-on-med-and-down">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span>1</span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <p className="timeline-tweet-time hide-on-med-and-down">5h</p>
                    <p className="timeline-tweet">"{this.state.card.tweet}"</p>
                    <div className="hide-on-large-only">
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                      <span className="likes-span-mobile">1</span>
                      <p className="hours-passed-mobile">5h ago</p>
                    </div>
                  </div>
                </dt>
              </dl>
                <dl className="timeline-entry">
                  <dt className="timeline-card animated wow fadeInRight">
                    <div className="timeline-avatar-container">
                      <div className="timeline-avatar" style={this.state.divStyle}></div>
                      <div className="hide-on-med-and-down">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                        <span>1</span>
                      </div>
                    </div>
                    <div className="timeline-content">
                      <p className="timeline-tweet-time hide-on-med-and-down">5h</p>
                      <p className="timeline-tweet">"{this.state.card.tweet}"</p>
                      <div className="hide-on-large-only">
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.0559 6.86495C11.4971 7.52756 10.9607 8.12391 6.69189 11.4811C2.4007 8.12391 1.88665 7.52756 1.3279 6.86495C-0.728294 4.43538 -0.169545 1.69659 1.462 0.54807C2.91475 -0.467932 4.97094 -0.0924529 6.69189 1.8512C8.41283 -0.0703659 10.469 -0.467932 11.9218 0.54807C13.5533 1.69659 14.1344 4.43538 12.0559 6.86495Z" transform="translate(0.0522461 0.996094)" fill="#A7B8C3"/> </svg>
                        <span className="likes-span-mobile">1</span>
                        <p className="hours-passed-mobile">5h ago</p>
                      </div>
                    </div>
                  </dt>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Timeline;
