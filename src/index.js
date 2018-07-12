import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timeline from './timeline/Timeline';

/*import registerServiceWorker from './registerServiceWorker';*/

import { BrowserRouter as Router, Route } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;
ReactDOM.render(
  <Router>
      <div>
        <Route exact path={baseUrl + "/"} component={App} />
        <Route path={baseUrl + "/timeline/:cardTwitter"} component={Timeline} />
      </div>
  </Router>,
  document.getElementById('root'));
/*registerServiceWorker();*/
