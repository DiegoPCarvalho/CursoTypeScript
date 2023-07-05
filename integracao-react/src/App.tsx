import React from 'react';
import './App.css';
import Contador from './components/Contador';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Contador valorInicial={9876}/>
      </div>
    )
  }
}

export default App;
