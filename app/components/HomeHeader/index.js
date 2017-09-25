import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

import { Link } from 'react-router'

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
            		<i className='icon-user'></i>
            	</li>
            	<li className='home-header-middle'>
            		<div className='search-container'>
	            		<i className='icon-search'></i>
	            		<input placeholder='请输入关键字' />
            		</div>
            		
            	</li>
            </ul>
        )
    }
}

export default HomeHeader
