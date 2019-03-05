import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: false },
        { id: 2, name: 'Build an Awesome app', isComplete: false },
        { id: 3, name: 'Ship It', isComplete: false }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </header>
        <div className="Todo-App">
          <form action=''>
            <input type='text' />
          </form>
        </div>
        <div className='Todo-List'>
          <ul>
            <li><input type='checkbox' />Learn JSX</li>
            <li><input type='checkbox' />Build an Awesome App</li>
            <li><input type='checkbox' />Ship It!</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
