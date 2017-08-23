import React, { Component } from 'react'
import '../styles/App.css'

class Playlistform extends Component {
  constructor(props) {
    super(props)

  }

render() {
  return (
    <form>
      <div className="form-group-row">
        <label>User Name</label>
        <input onChange={this.props._name} type="text" name="userName" placeholder="User Name" value={this.props.userName} />
      </div>
      <div className="form-grouprow">
      <label>Artist/Band</label>
      <input onChange={this.props._artist} type="text" name="songArtist" placeholder="Artist or Band Name" value={this.props.songArtist} />
      </div>
      <div className="form-grouprow">
      <label>Song Title</label>
      <input onChange={this.props._title} type="text" name="songTitle" placeholder="Song Title" value={this.props.songTitle} />
      </div>
      <div className="form-grouprow">
      <label>Notes About Song</label>
      <input onChange={this.props._notes}type="text" name="songNotes" value={this.props.songNotes} />
      </div>
      <input onSubmit={this.props._submit} type="submit" value="Submit" />
    </form>
  )
}


}

export default Playlistform
