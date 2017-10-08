import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoginComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	value : ''
        }
    }
    render() {
        return (
            <div className='login-container'>
            	<div className='login-item clr'>
            		<i className='icon-phone lf'></i>
            		<input  placeholder='输入电话号码' value={this.state.value} onChange={this.changeHandle.bind(this)} />
            	</div>
            	<div className='login-item clr'>
            		<i className='icon-key lf'></i>
            		<input placeholder='输入验证码'/>
            		<a href="#" className='rt'>发送验证码</a>
            	</div>
            	<button className='login-btn' onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )
    }

    clickHandle() {
    	const username = this.state.value
    	this.props.loginHandle(username)
    }

    changeHandle(e) {
    	this.setState({
    		value : e.target.value 
    	})
    }
}


export default LoginComponent
