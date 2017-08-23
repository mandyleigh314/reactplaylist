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
    e.preventDefault();
    // this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
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

}
// _submit = (e) => {
//   e.preventDefault()
//   const song = {userName: this.state.userName, songArtist: this.state.songArtist, songTitle: this.state.songTitle, songNotes: this.state.songNotes}
//   this.setState({userName: '', songArtist: '', songTitle: '', songNotes: '', songs: [song, ...this.state.songs]})
// }

fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        console.log(data)
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
      <Playlistform addToList={this.addToList} _name={this._name} _artist={this._artist} _title={this._title} _notes={this._notes} _submit={this._submit}/>
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
