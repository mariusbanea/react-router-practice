import React from 'react';
import './App.css';
import Error from './Component/Error'
import Child from './Component/Child'
import GrandChild from './Component/GrandChild'
import Home from './Component/Home'
import Navigation from './Component/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <h2>React Router Practice</h2>
        {/* un-routed component */}
        <Navigation />
        <Switch>
          {/* static routes */}
          <Route exact path='/' component={Home} />
          <Route path='/child' component={Child} />
          {/* dynamic route */}
          <Route path="/grand-child/:variable_name" component={GrandChild} />
          {/* error route */}
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
