import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='list-more'>
            	{
            		this.props.isLoadingMore 
            		? <div>加载中...</div>
            		: <div onClick={this.loadHandle.bind(this)} ref='loading'>点击加载更多</div>
            	}
            </div>
        )
    }

    loadHandle() {
    	this.props.loadMoreFn();
    }

    componentDidMount() {
    	const load = this.refs.loading
    	const handle = this.props.loadMoreFn;
    	const callback = function() {
    		const top = load.getBoundingClientRect().top
    		const HEIGHT = window.screen.height
    		if(top && top < HEIGHT) {
    			handle()
    		}
    	} 
    	let timeoutId;
    	window.addEventListener('scroll', () => {
    		if(this.props.isLoadingMore) {
    			return;
    		}
    		if(timeoutId) {
    			clearTimeout(timeoutId)
    		}
    		timeoutId = setTimeout(callback, 60)
    	}, false)
    }
}


 export default LoadMore
