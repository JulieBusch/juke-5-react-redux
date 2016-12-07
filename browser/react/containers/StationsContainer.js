import React from 'react';
import {connect} from 'react-redux';

import Stations from '../components/Stations';

function convertSongsToStations(songsArray) {
  var stations = {};
  songsArray.forEach(function(song) {
    if (stations[song.genre]) {
      stations[song.genre].push(song);
    } else {
      stations[song.genre] = [song];
    }
  });
  return stations;
}

function mapStateToProps(state) {
    return {
      stations: convertSongsToStations(state.songs)
    };
  }

function mapDispatchToProps(dispatch) {
    return {};
  }

export default connect (mapStateToProps, mapDispatchToProps)(Stations);


