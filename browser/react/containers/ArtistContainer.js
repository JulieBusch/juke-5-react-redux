import React, {Component} from 'react';
import {connect} from 'react-redux';
import Artist from '../components/Artist';

import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
    return {
      selectedArtist: state.artists.selected,
      songs: state.player.currentSongList,
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying,
      children: ownProps.children.props.children
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      toggleOne: (song, list) => dispatch(toggleSong(song, list))
    };
  }

export default connect (mapStateToProps, mapDispatchToProps)(Artist);





