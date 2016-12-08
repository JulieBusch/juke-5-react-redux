import React, {Component} from 'react';
import {connect} from 'react-redux';

import Albums from '../components/Albums';

function mapStateToProps(state){
  return {
    albums: state.albums.list
  }
}

function mapDispatchToProps(dispatch) {
    return {};
  }

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
