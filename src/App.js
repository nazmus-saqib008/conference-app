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
        <h1><b>Conferences</b></h1>
        <Switch>
          <Route exact path="/">
            <ContentBox country='All' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/us">
            <ContentBox country='United States' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/in">
            <ContentBox country='India' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/fr">
            <ContentBox country='France' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/jp">
            <ContentBox country='Japan' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/gr">
            <ContentBox country='Germany' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/nt">
            <ContentBox country='Netherlands' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/sp">
            <ContentBox country='Singapore' sort='None' timestamp='All' />
          </Route>
          <Route exact path="/jun">
            <ContentBox country='All' sort='None' timestamp='2023-06' />
          </Route>
          <Route exact path="/may">
            <ContentBox country='All' sort='None' timestamp='2023-05' />
          </Route>
          <Route exact path="/aug">
            <ContentBox country='All' sort='None' timestamp='2023-08' />
          </Route>
          <Route exact path="/apr">
            <ContentBox country='All' sort='None' timestamp='2023-04' />
          </Route>
          <Route exact path="/dec">
            <ContentBox country='All' sort='None' timestamp='2023-12' />
          </Route>
          <Route exact path="/oct">
            <ContentBox country='All' sort='None' timestamp='2023-10' />
          </Route>
          <Route exact path="/sep">
            <ContentBox country='All' sort='None' timestamp='2023-09' />
          </Route>
          <Route exact path="/nov">
            <ContentBox country='All' sort='None' timestamp='2023-11' />
          </Route>
          <Route exact path="/may24">
            <ContentBox country='All' sort='None' timestamp='2024-05' />
          </Route>
          <Route exact path="/sortAsc">
            <ContentBox country='All' sort='Asc' timestamp='All' />
          </Route>
          <Route exact path="/sortDesc">
            <ContentBox country='All' sort='Desc' timestamp='All' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
