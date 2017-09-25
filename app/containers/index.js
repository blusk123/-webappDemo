import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore.js'
import { CITYNAME } from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo.js'


class App extends React.Component {
	constructor(props, content) {
		super(props, content);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			done: false 
		}
	}
	render() {
		return (
			<div>
				{ 	
					this.state.done?
					this.props.children
					: <p> 加载中 </p>
				 }
			</div>
		)
	}
	componentDidMount() {
		//从localstorage中获取信息
		let cityName = LocalStore.getItem(CITYNAME)
		if (cityName == null) {
			cityName = "杭州"
		}

		// 将信息存储到Redux中
		this.props.userInfoActions.update({
			cityName: cityName
		})
		//更改状态
		this.setState({
			done: true
		})
	}
}

function mapStateToProps(state) {
	return {

	}

}

function mapDispatchToprops(dispatch) {
	return {
		userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToprops
)(App)