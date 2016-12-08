import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lyrics from '../components/Lyrics';

import {searchLyrics} from '../action-creators/lyrics';


function mapStateToProps(state) {
    return {
      lyrics: state.lyrics
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      fetchLyrics: function (artist, song) {
        dispatch(searchLyrics(artist, song));
      }
    };
  }

export default connect (mapStateToProps, mapDispatchToProps)(

  class extends Component {

  constructor() {

    super();

    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchLyrics(this.state.artistQuery, this.state.songQuery);
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        lyrics={this.props.lyrics}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

);









