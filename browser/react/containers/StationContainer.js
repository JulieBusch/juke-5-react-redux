import React from 'react';
import {connect} from 'react-redux';

import Station from '../components/Station';
import { convertSong } from '../utils';




function mapStateToProps(state, ownProps) {
    const genreName = ownProps.params.genreName;
    return {
      station: genreName,
      songs: state.songs.filter(song => {
        if (song.genre === genreName) return true
      }).map(convertSong),
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying
    };
  }

function mapDispatchToProps(dispatch, ownProps) {
    return {};
  }

export default connect (mapStateToProps, mapDispatchToProps)(Station);
