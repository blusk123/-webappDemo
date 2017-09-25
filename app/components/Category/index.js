import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	index : 0
        }
    }
    render() {
    	let opt = {
        		auto : 4000,
        		callback: function (index) {
        			this.setState({
        				index: index
        			})
        		}.bind(this)
        	} 
        return (
        	<div className='main-carousel'>
        		<ReactSwipe className='carousel' swipeOptions={opt}>
	            	<div className="carousel-item">
	            		<ul className="clr">
	            			<li className="lf jingdian">景点</li>
	            			<li className="lf ktv">KTV</li>
	            			<li className="lf gouwu">购物</li>
	            			<li className="lf shenghuofw">生活服务</li>
	            			<li className="lf sports">健身运动</li>
	            			<li className="lf meifa">美发</li>
	            			<li className="lf qinzi">亲子</li>
	            			<li className="lf xiaochi">小吃快餐</li>
	            			<li className="lf zizhu">自助餐</li>
	            			<li className="lf bar">酒吧</li>
	            		</ul>
	            	</div>
	            	<div className="carousel-item">
	            		<ul className="clr">
	            			<li className="lf meishi">美食</li>
	            			<li className="lf movie">电影</li>
	            			<li className="lf jiudian">酒店</li>
	            			<li className="lf xiuxianyule">休闲娱乐</li>
	            			<li className="lf waimai">外卖</li>
	            			<li className="lf huoguo">火锅</li>
	            			<li className="lf liren">丽人</li>
	            			<li className="lf dujia">度假旅游</li>
	            			<li className="lf zuliao">足疗</li>
	            			<li className="lf zhoubianyou">周边游</li>
	            		</ul>
	            	</div>
	            	<div className="carousel-item">
	            		<ul className="clr">
	            			<li className="lf ribencai">日本菜</li>
	            			<li className="lf SPA">SPA</li>
	            			<li className="lf jiehun">结婚</li>
	            			<li className="lf xuexipeixun">学习培训</li>
	            			<li className="lf xican">西餐</li>
	            			<li className="lf huochejipiao">火车机票</li>
	            			<li className="lf shaokao">烧烤</li>
	            			<li className="lf jiazhuang">家装</li>
	            			<li className="lf chongwu">宠物</li>
	            			<li className="lf quanbufenlei">全部分类</li>
	            		</ul>
	            	</div>
	            </ReactSwipe>
	            <div className='carousel-container'>
	            	<ul className='carousel-foot'>
	            		<li className={this.state.index===0 ? 'active' : ''}></li>
	            		<li className={this.state.index===1 ? 'active' : ''}></li>
	            		<li className={this.state.index===2 ? 'active' : ''}></li>
	            	</ul>
	            </div>
        	</div>    
        )
    }
}

module.exports = Category