import React from 'react';
import Songs from './Songs';


export default function (props) {
	// console.log("props inside station: ", props);
	return (
		<div>
			<h3>{props.station} Station</h3>
			<Songs 
			songs={props.songs} 
	        currentSong={props.currentSong} 
	        isPlaying={props.isPlaying} 
	        toggleOne={props.toggleOne}/>
		</div>
	)
}