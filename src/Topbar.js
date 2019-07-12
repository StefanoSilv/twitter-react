import React, {Component} from 'react';
import './Topbar.css';

class Topbar extends Component {
	// Data
	state = {

	}
	// Functions
	//it refresh the page and clean the hashtag filters
	topbar_redirect = (e) => {
		if(e){
			window.location.href = '/'
		}
	}

	// Render
	render() {
		return (
			<div id="topbar" onClick={ (e) => this.topbar_redirect(e)}><h1>TORTUGA TWITTER</h1></div>
		)
	}
}

export default Topbar;
