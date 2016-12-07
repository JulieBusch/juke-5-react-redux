import React from 'react';
import { Link } from 'react-router';

export default function (props) {

  // const DUMMY_STATIONS_DATA = [
  //   { name: '90s Hip Hop' },
  //   { name: 'Death Metal' },
  //   { name: 'Classical' }
  // ];
  console.log("props.stations in Stations.js ", props.stations);

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={'fill/me/in/later'}>{station}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
