import React from 'react';
import {connect} from 'react-redux';

import Station from '../components/Station';
import { toggleSong} from '../action-creators/player';
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
    return {
      toggleOne: function (song, list){
        dispatch(toggleSong(song, list));
      }
    };
  }

export default connect (mapStateToProps, mapDispatchToProps)(Station);
