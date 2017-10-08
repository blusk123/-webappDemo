import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star/index.js'

let detailinfo = require('./img/detailinfo.png')

import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data;
    	
        return (
            <div className='detail-info'>
            	<div className="info-container clr">
                    <div className="info-img-container lf">
                        <img src={detailinfo}/>
                    </div>
                    <div className="info-content rt">
                        <h1>{data.title}</h1>
                        <div className="star-container">
                        	<Star star={data.star}/>
                            <span className="price">￥{data.price}</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                    </div>
                </div>
                 <p className="info-desc">
                 	{data.desc.yinye}<br />
                 	{data.desc.dianhua}<br />
                 	{data.desc.wangluo}
                 </p>
            </div>
        )
    }
}


export default DetailInfo
