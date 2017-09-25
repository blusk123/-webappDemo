import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '../../../fetch/home/home.js'
import ListCom from '../../../components/List/index.js'

import LoadMore from '../../../components/LoadMore/index.js'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data : [],
        	hasMore: false,  //是否有更多数据要加载
            isLoadingMore: false,  // 组件的加载状 ‘加载中’或 ‘点击加载更多’
            page: 1  
        }
    }
    render() {
    	let data = this.state.data;
        return (
            <div>
       			{
       				data.length ? <ListCom data={data} /> : '加载中...'
       			}
                {
                    this.state.hasMore 
                    ? <LoadMore loadMoreFn={ this.loadMorePageData.bind(this) } isLoadingMore={this.state.isLoadingMore} /> 
                    : <div></div>
                }		
            </div>
        )
    }
    componentDidMount() {
    	this.loadFirstPageData();
    }
    //获取首屏数据
    loadFirstPageData() {
    	const cityName = this.props.cityName;
    	const result = getListData(cityName, 0);
    	this.resulthandle(result);
    }

    //获取更多数据

    loadMorePageData() {
        this.setState({
            isLoadingMore: true,
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resulthandle(result);

        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    //数据处理
    resulthandle(result) {
    	result.then(res =>{
    		return res.json()
    	}).then(json => {
    		let data = json.data;
    		let hm = json.hasMore;
    		this.setState({
    			data: this.state.data.concat(data),
    			hasMore: hm
    		})
    	})
    }
}

export default List
