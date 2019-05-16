import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Ben', age: '24', belt: 'black', id: 1},
      {name: 'Ted', age: '39', belt: 'yellow', id: 2},
      {name: 'John', age: '15', belt: 'green', id: 3},
    ]
  }
  addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas: ninjas
      })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas = {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
}

export default App;
