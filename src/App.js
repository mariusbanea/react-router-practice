import React from 'react';
import './App.css';
import Error from './Component/Error'
import Search from './Component/Search'
import Home from './Component/Home'
import Navigation from './Component/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <h2>Router Practice</h2>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />          
          <Route path='/search' component={Search} />
          <Route  component={Error}/>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
