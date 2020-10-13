import React, { Component } from 'react';
import Navbar from './components/NavBar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Search from './components/search/Search';
import Counter from './components/counter/Counter';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/counter/" component={Counter}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;