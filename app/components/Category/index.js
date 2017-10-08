import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import { Link } from 'react-router'

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
	            			<Link to='/search/jingdian'><li className="lf jingdian">景点</li></Link>
	            			<Link to='/search/ktv'><li className="lf ktv">KTV</li></Link>
	            			<Link to='/search/gouwu'><li className="lf gouwu">购物</li></Link>
	            			<Link to='/search/shenghuofw'><li className="lf shenghuofw">生活服务</li></Link>
	            			<Link to='/search/sports'><li className="lf sports">健身运动</li></Link>
	            			<Link to='/search/meifa'><li className="lf meifa">美发</li></Link>
	            			<Link to='/search/qinzi'><li className="lf qinzi">亲子</li></Link>
	            			<Link to='/search/xiaochi'><li className="lf xiaochi">小吃快餐</li></Link>
	            			<Link to='/search/zizhu'><li className="lf zizhu">自助餐</li></Link>
	            			<Link to='/search/bar'><li className="lf bar">酒吧</li></Link>
	            		</ul>
	            	</div>
	            	<div className="carousel-item">
	            		<ul className="clr">
	            			<Link to='/search/meishi'><li className="lf meishi">美食</li></Link>
	            			<Link to='/search/movie'><li className="lf movie">电影</li></Link>
	            			<Link to='/search/jiudian'><li className="lf jiudian">酒店</li></Link>
	            			<Link to='/search/xiuxianyule'><li className="lf xiuxianyule">休闲娱乐</li></Link>
	            			<Link to='/search/waimai'><li className="lf waimai">外卖</li></Link>
	            			<Link to='/search/huoguo'><li className="lf huoguo">火锅</li></Link>
	            			<Link to='/search/liren'><li className="lf liren">丽人</li></Link>
	            			<Link to='/search/dujia'><li className="lf dujia">度假旅游</li></Link>
	            			<Link to='/search/zuliao'><li className="lf zuliao">足疗</li></Link>
	            			<Link to='/search/zhoubianyou'><li className="lf zhoubianyou">周边游</li></Link>
	            		</ul>
	            	</div>
	            	<div className="carousel-item">
	            		<ul className="clr">
	            			<Link to='/search/ribencai'><li className="lf ribencai">日本菜</li></Link>
	            			<Link to='/search/SPA'><li className="lf SPA">SPA</li></Link>
	            			<Link to='/search/jiehun'><li className="lf jiehun">结婚</li></Link>
	            			<Link to='/search/xuexipeixun'><li className="lf xuexipeixun">学习培训</li></Link>
	            			<Link to='/search/xican'><li className="lf xican">西餐</li></Link>
	            			<Link to='/search/huochejipiao'><li className="lf huochejipiao">火车机票</li></Link>
	            			<Link to='/search/shaokao'><li className="lf shaokao">烧烤</li></Link>
	            			<Link to='/search/jiazhuang'><li className="lf jiazhuang">家装</li></Link>
	            			<Link to='/search/chongwu'><li className="lf chongwu">宠物</li></Link>
	            			<Link to='/search/quanbufenlei'><li className="lf quanbufenlei">全部分类</li></Link>
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