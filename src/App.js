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
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/child' component={Child} />
          <Route path="/grand-child/:meta" component={GrandChild} />
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
