import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ben', age: '24', belt: 'black', id: 1},
      {name: 'Ted', age: '39', belt: 'yellow', id: 2},
      {name: 'John', age: '15', belt: 'green', id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas = {this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
