import React, { Component } from 'react'
import '../styles/App.css'
import Playlistitem from './Playlistitem'
import Playlistform from './Playlistform'

class Playlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: '',
      song: {}
    }
  }
_name = (e) => {
  this.setState({userName: e.target.value})
}
_artist = (e) => {
  this.setState({songArtist: e.target.value})
}
_title = (e) => {
  this.setState({songTitle: e.target.value})
}
_notes = (e) => {
  this.setState({songNotes: e.target.value})
}
_submit = (e) => {
  e.preventDefault()
  this.setState({userName: this.state.userName, songArtist: this.state.songArtist, songTitle: this.state.songTitle, songNotes: this.state.songNotes, song: {userName: this.state.userName, songArtist: this.state.songArtist, songTitle: this.state.songTitle, songNotes: this.state.songNotes}})
}

fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }

componentDidMount() {
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
}

render() {
  return (  <div className="app">
      <Playlistform _name={this._name} _artist={this._artist} _title={this._title} _notes={this._notes} _submit={this._submit}/>
  <form onSubmit={this.fetchData}>
    <input type="submit" value="Update Playlist" />
  </form>
   <Playlistitem songs={this.state.songs} /></div>)
}


}

export default Playlist
