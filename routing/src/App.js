import React, { Component } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './component/About';
import Contact from './component/Contact';

import Newpost from './component/Newpost';
import Conn from './component/Conn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path = '/Conn' component={Conn} />
          <Route path = '/About' component={About} />
          <Route path = '/Contact' component={Contact} />
          <Route path = '/:post_id' component={Newpost} />
          </Switch>      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;