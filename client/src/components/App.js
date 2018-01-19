import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
// import index from '../containers/index'
import Admin from '../containers/Admin'
import Login from '../containers/Login'
import Dashboard from '../containers/Dashboard'
import Header from '../containers/Header'

const history = createBrowserHistory({ basename: '/' });

const App = () =>(
  <div>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path="/" component = {Dashboard} history={history}/>
        <Route exact path="/admin" component = {Admin} history={history}/>
        <Route exact path="/login" component = {Login} history={history}/>
        <Route exact path="/dashboard" component = {Dashboard} history={history}/>
      </Switch>
    </div>
  </div>
)
  


export default App;
