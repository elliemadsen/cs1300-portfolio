import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import InterfaceRedesign from './InterfaceRedesign';
import WebsiteRedesign from './WebsiteRedesign';
import InternReviews from './InternReviews';
import CarbonChain from './CarbonChain';
import ScrollToTop from './ScrollToTop';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
           <BrowserRouter>
           <ScrollToTop/>
            <div>
                <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/InterfaceRedesign" component={InterfaceRedesign}/>
                <Route path="/WebsiteRedesign" component={WebsiteRedesign}/>
                <Route path="/InternReviews" component={InternReviews}/>
                <Route path="/CarbonChain" component={CarbonChain}/>
              </Switch>
            </div> 
      </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
