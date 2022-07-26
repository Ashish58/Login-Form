import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import About from './Components/About';

function App () {
  return (

    <Router>
      <div>

        <main>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path='/about' element={<About/>}></Route>
          </Switch>
        </main>
      </div>
    </Router>

  )
}

export default App;
