import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getSearchData } from '../../../fetch/search/search.js'

import ListCom from '../../../components/List/index.js'
import LoadMore from '../../../components/LoadMore/index.js'

const initialState = {
        	hasMore: false,
        	data: [],
        	page: 0,
        	isLoadingMore: false
        }

class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = initialState
    }
    render() {
        return (
            <div>
            	{this.state.data.length ? <ListCom search='search' data={this.state.data} /> : '加载中'}
            	{this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore}
            	 loadMoreFn={this.loadMoreData.bind(this)} />: <div></div>}
            </div>
        )
    }
    componentDidMount() {
    	this.loadFirstData();
    }

    //获取首屏数据
    loadFirstData() {
    	let cityName = this.props.cityName
    	let category = this.props.category
    	let result = getSearchData(0, cityName, category)
    	this.resultHandle(result)
    }
    //加载更多数据
    loadMoreData() {
    	this.setState({
    		isLoadingMore: true,
    		page: page + 1
    	})
    	let cityName = this.props.cityName
    	let category = this.props.category
    	let page = this.state.page
    	let result = getSearchData(page, cityName, category)
    	this.resultHandle(result)
    	this.setState({
    		isLoadingMore: false
    	})
    }

    resultHandle(result) {
    	result.then(res => {
    		return res.json()
    	}).then(json =>{
    		const data = json.data
    		const hm = json.hasMore
    		this.setState({
    			data:this.state.data.concat(data),
    			hasMore: hm
    		})
    	})
    }
}


export default SearchList
