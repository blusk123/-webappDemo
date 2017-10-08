import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index.js'

import Info from './subpage/Info.js'
import Comment from './subpage/comment.js'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const id = this.props.params.id;
        return (
            <div>
                <Header title='商品详情'/>
                <Info id={id}/>
                <Comment />
            </div>
        )
    }
}

export default Detail
