import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from "./components/SignUp"
import ErrorP from './components/ErrorP'
import Home from './components/Home'
import NavBar from './components/NavBar'
import backg from './backg.jpg'
import {BrowserRouter} from 'react-router-dom'

function App() {
    return(
      <div style={{ backgroundImage:`url(${backg})` , height: '720px',backgroundSize:"cover" }} >
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path = "/" component= {Home} />
          <Route path = "/SignIn" component= {SignIn} />
          <Route path = "/SignUp" component= {SignUp} />
          <Route path = "/Home" component= {Home} />
          
          <Route component={ErrorP} />
        </Switch>
        </BrowserRouter>
      </div>
    )
  }

export default App