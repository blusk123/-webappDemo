import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from '../SearchInput/index.js'

import { hashHistory } from 'react-router'

import './style.less'

import '../../static/css/font.css'

class SearchHead extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='search-head-container clr'>
            	<span className="icon-chevron-left lf back-icon" onClick={this.clickHandle.bind(this)}></span>
            	<SearchInput  value={this.props.category || ""} enterFn={this.enterHandle.bind(this)}/>
            </div>
        )
    }
    clickHandle() {
    	window.history.back()
    }
    enterHandle(value) {
    	hashHistory.push('search/'+ encodeURIComponent(value))
    }
}


export default SearchHead
