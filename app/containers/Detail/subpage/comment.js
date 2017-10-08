import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className='comment-container'>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            	<span>这是一个评论...</span>
            </div>
        )
    }
}


export default Comment
