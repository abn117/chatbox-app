import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="message">
          <Message/>
          <Message/>
          <Message/>
        </div>
        <Form/>

      </Fragment>
      


    );
  }
}

export default App;
