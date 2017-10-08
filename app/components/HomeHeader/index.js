import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

import SearchInput from '../SearchInput/index.js'

import { Link, hashHistory } from 'react-router'


class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <ul className='home-header'>
            	<li className='lf home-header-left'>
                    <Link style={{textDecoration:'none'}} to='/city'> {this.props.cityName} </Link>
            		<i className='icon-angle-down'></i>
            	</li>

            	<li className='rt home-header-right'>
                    <Link to='/login'><i className='icon-user'></i></Link>
            	</li>
            	<li className='home-header-middle'>
            		<SearchInput value="" enterFn={this.enterHandle.bind(this)} />
            	</li>
            </ul>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/'+ encodeURIComponent(value))
    }
}

export default HomeHeader
