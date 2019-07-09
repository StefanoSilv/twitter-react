import React, {Component} from 'react';
import './App.css';
import Sidebar1 from './Sidebar1'
import Sidebar2 from './Sidebar2'
import Topbar from './Topbar'
import Content from './Content'


class App extends Component {
	// Data
	state = {

	}
	// Functions

	// Render
	render() {
		return (
			<div>
			<Topbar />
			<Sidebar1 />
			<Content />
			<Sidebar2 />
			</div>
		)
	}
}

export default App;
