import React, { Component } from 'react'
import '../styles/App.css'

class Playlistitem extends Component {
render() {
    let displaySongs = this.props.songs.map(song => {
      return (
      <div className="col-sm-4">
      <div className="card">
        <div className="card-block">
        <h4 className="card-title">Song: {song.songTitle}</h4>
        <h5 className="card-subtitle">Artist/Band: {song.songArtist}</h5>
        <p>User: {song.userName}</p>
        <p>Notes: {song.songNotes}</p>
      </div>
    </div>
    </div>
    )}
  )
  return (
    <div className="app">{displaySongs}
  </div>)
}


}

export default Playlistitem
