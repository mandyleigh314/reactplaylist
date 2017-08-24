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
      songNotes: ''
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
addToList = (e) => {
    e.preventDefault()
    const { userName, songTitle, songArtist, songNotes } = this.state
    let listItem = JSON.stringify({ userName, songTitle, songArtist, songNotes });

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
).then(response => response.json())
.then(data => {
  this.setState({userName: '', songArtist: '', songTitle: '', songNotes: ''})
  this.fetchData(e)
})
.catch(err => {
    console.log(err, "boo!");
  });
this.setState({userName: '', songArtist: '', songTitle: '', songNotes: ''})
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
    <div className="playlist">
      <Playlistform addToList={this.addToList} _name={this._name}
        userName={this.state.userName} _artist={this._artist} songArtist={this.state.songArtist} _title={this._title} songTitle={this.state.songTitle} _notes={this._notes} songNotes={this.state.songNotes} />
    </div>
  <form onSubmit={this.fetchData}>
    <input type="submit" value="Update Playlist" />
  </form>
  <div className="results">
   <Playlistitem songs={this.state.songs} />
 </div>
 </div>)
}


}

export default Playlist
