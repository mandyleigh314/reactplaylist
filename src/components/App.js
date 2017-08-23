import React, { Component } from 'react'
import '../styles/App.css'
import Playlist from './Playlist'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Playlist />
      </div>
    );
  }
}

export default App;
