import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'


class HeadSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	value : ''
        }
    }
    render() {
        return (
            <div>
            	<div className='search-container'>
	            	<i className='icon-search'></i>
	            	<input className="search-input" placeholder='请输入关键字' 
	            		value={this.state.value}
	            		onChange={this.changeHandle.bind(this)}
	            		onKeyUp={this.keyUpHandle.bind(this)}/>
            	</div>
            </div>
        )
    }

    componentDidMount() {
        // 默认value
        this.setState({
            value:this.props.value
        })
    }
    changeHandle(e) {
    	this.setState({
    		value: e.target.value
    	})
    }
    keyUpHandle(e) {
    	if(e.keyCode==13){
    		this.props.enterFn(e.target.value)
    	}
    }	
}

export default HeadSearch