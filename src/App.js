import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from './header/Header.js'
import LogoArea from './logo-area/LogoArea.js'
import Cards from './cards/Cards.js';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("root"));


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      avatars: [],
      props_match: props,
    };
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/kandebonfim/2efe731004c9311d1237e88a656a425f/raw/c3befc78feb7454f4cccb5308d38319ac77be71e/makers.json')
    .then(result => result.json())
    .then(avatars=>this.setState({avatars}));
  }

  render() {
    return (
      <div>
        <LogoArea value={this.props} />
        <Header />
        <Cards value={this.props} />
      </div>
    );
  }
}

export default App;
