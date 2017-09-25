import React from 'react'
import { render } from 'react-dom'
import Perf from 'react-addons-perf'
import RouteMap from './router/routeMap.js'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './static/css/common.less'
import './static/css/font.css'


//性能测试
// if(__DEV__) {
// 	window.Perf = Perf
// }

const store = configureStore();

render(
	<Provider store={store}>
		<RouteMap history={hashHistory} />
	</Provider>
	,
	document.getElementById('root')
)