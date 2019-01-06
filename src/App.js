import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withPermit from './withPermit';
import Indexpage from './components/index';
import Login from './components/login';
import Register from './components/register';
import Startup from './components/startup';
import Selection from './components/selection';

class App extends Component {
  componentDidMount(){
    fetch('http://localhost:5678/checkPermit')
      .then(res => console.log(res.text())).catch(err=>console.log(err))
  }
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path='/' component={Indexpage}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/startup' component={withPermit(Startup)}/>
          <Route path='/selection' component={withPermit(Selection)}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
