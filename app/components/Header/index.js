import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import '../../static/css/font.css'

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='header-container'>
            	<i className='icon-chevron-left left-icon' onClick={this.clickHandle}></i>
            	<span>{this.props.title}</span>
            </div>
        )
    }

    clickHandle() {
    	window.history.back();
    }
}

export default Header
