import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
        	<div>
	        	<div className="city-choose">选择你的城市:</div>
	            <ul className="citylist-container clr">
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'北京')}>北京</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'上海')}>上海</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'广州')}>广州</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'深圳')}>深圳</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'杭州')}>杭州</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'宁波')}>宁波</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'南京')}>南京</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'苏州')}>苏州</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'天津')}>天津</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'青岛')}>青岛</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'成都')}>成都</span>
	            	</li>
	            	<li className="lf">
	            		<span onClick={this.clickHandle.bind(this,'重庆')}>重庆</span>
	            	</li>
	            </ul>
	        </div>
        )
    }
    clickHandle(cityName) {
    	this.props.changeCityFn(cityName)
    }

}


 export default CityList
