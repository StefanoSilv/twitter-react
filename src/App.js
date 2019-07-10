import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
			<div id="wrap">
				<Topbar />
				<div class="container-fluid">
					<div class="row no-gutters">
						<Sidebar1 />
						<div id="content" class="col-6">
							<div class="row no-gutters d-flex flex-column">
								<Content />
							</div>
						</div>
						<Sidebar2 />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
