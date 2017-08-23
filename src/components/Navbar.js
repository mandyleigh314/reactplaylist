import React, { Component } from 'react'
import '../styles/App.css'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

render() {
  return (
    <div className="jumbotron">
      <h1 id="navhead">REACT(ive) Playlist!</h1>
    </div>
    )
}


}

export default Navbar
