import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo.js'
import { hashHistory } from 'react-router'

import LoginComponent from '../../components/Login/index.js'

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	checked: true
        }
    }
    render() {
        return (
            <div>
            	<Header title='登录' />
            	{
            		this.state.checked ? <div></div>
            		: <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
            	}
            </div>
        )
    }
    componentDidMount() {
    	this.doCheck()
    }

    //登录之后的处理

    loginHandle(username) {

    	//保存用户名
    	const actions = this.props.userInfoActions
    	let userinfo = this.props.userinfo
    	userinfo.username = username
    	actions.update(userinfo)

    	// 跳转
    	const params = this.props.params
    	const router = params.router
    	if( router ){
    		hashHistory.push('/router')
    	}else {
    		this.goUserPage()
    	}

    }
    doCheck() {
    	const userinfo = this.props.userinfo
    	if(userinfo.username) {
    		//跳转
    		this.goUserPage()
    	}else {
    		//显示登录组件
    		this.setState({
    			checked: false
    		})
    	}
    }
    goUserPage() {
    	hashHistory.push('/user')
    }
}


//绑定react-redux

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
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
)(Login)

