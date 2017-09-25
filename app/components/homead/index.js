import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
let ad = require('./img/ad01.png')

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data;
        return (
        	<div className="ad-container">
        		<h2>超值优惠</h2>
        		<div className='clr'>
	            	{ data.map((item ,index) => {
	            		return (
		            		<div className='lf ad-item' key={index}>
		            			<a href="#" target='_blank'>
		            				<img src={ad} title={item.title}/>
		            			</a>
		            		</div>
	            		)
	            	})}
            	</div>
        	</div>
        )
    }
}


export default HomeAd
