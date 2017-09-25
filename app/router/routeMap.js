import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/index.js'
import City from '../containers/City/city.js'
import Detail from '../containers/Detail/detail.js'
import Home from '../containers/Home/home.js'
import Search from '../containers/Search/search.js'
import User from '../containers/User/user.js'
import NotFound from '../containers/404.js'

class RouteMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					<IndexRoute component={Home} />
					<Route path='/city' component={City} />
					<Route path='/user' component={User} />
					<Route path='/search' component={Search} />
					<Route path='/detail' component={Detail} />
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

export default RouteMap