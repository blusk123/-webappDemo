import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
import { Link } from 'react-router'

const listImg = require('./img/list.png');
const searchImg = require('./img/search.png')


class ListCom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
    	const data = this.props.data;
    	const search = this.props.search;
        return (
        	<div>
        		{search? '': <h2 className="list-title">猜你喜欢</h2>}
	        	
	        	<div className="list-container">
		            {
		            	data.map((item, index) => {
		            		return (
		            			<Link to={'/detail/'+index} key={index}>
			            			<div className="list-item clr">
			            				<img src={search?searchImg:listImg} alt=""/>
			            				<ul className="rt list-item-right">
			            					<li className="clr">
			            						<h2 className="lf" style={{color: '#333'}}>{item.title}</h2>
			            						<span className="rt" style={{color:'#999'}}>{item.distance}</span>
			            					</li>
			            					<li style={{fontSize:'14px',color:'#999'}}>
			            						{item.subTitle}
			            					</li>
			            					<li>
			            						<div className="lf" style={{color:'#e9203d',fontWeight:'700'}}>&yen;{item.price}</div>
			            						<div className="rt" style={{color:'#bbb'}}>已售{item.mumber}</div>
			            					</li>
			            				</ul>
			            			</div>
		            			</Link>
		            		)
		            	})
		            }
	            </div>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
 export default ListCom
