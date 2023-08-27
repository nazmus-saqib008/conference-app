import './App.css';
import Navbar from './Components/Navbar'
import ContentBox from './Components/ContentBox'

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ContentBox country='All' timestamp='All' />
          </Route>
          <Route exact path="/us">
            <ContentBox country='United States' timestamp='All' />
          </Route>
          <Route exact path="/in">
            <ContentBox country='India' timestamp='All' />
          </Route>
          <Route exact path="/fr">
            <ContentBox country='France' timestamp='All' />
          </Route>
          <Route exact path="/jp">
            <ContentBox country='Japan' timestamp='All' />
          </Route>
          <Route exact path="/gr">
            <ContentBox country='Germany' timestamp='All' />
          </Route>
          <Route exact path="/nt">
            <ContentBox country='Netherlands' timestamp='All' />
          </Route>
          <Route exact path="/sp">
            <ContentBox country='Singapore' timestamp='All' />
          </Route>
          <Route exact path="/jun">
            <ContentBox country='All' timestamp='2023-06' />
          </Route>
          <Route exact path="/may">
            <ContentBox country='All' timestamp='2023-05' />
          </Route>
          <Route exact path="/aug">
            <ContentBox country='All' timestamp='2023-08' />
          </Route>
          <Route exact path="/apr">
            <ContentBox country='All' timestamp='2023-04' />
          </Route>
          <Route exact path="/dec">
            <ContentBox country='All' timestamp='2023-12' />
          </Route>
          <Route exact path="/oct">
            <ContentBox country='All' timestamp='2023-10' />
          </Route>
          <Route exact path="/sep">
            <ContentBox country='All' timestamp='2023-09' />
          </Route>
          <Route exact path="/nov">
            <ContentBox country='All' timestamp='2023-11' />
          </Route>
          <Route exact path="/may24">
            <ContentBox country='All' timestamp='2024-05' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
