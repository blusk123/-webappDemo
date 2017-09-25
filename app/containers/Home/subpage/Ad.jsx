import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/homead/index.js'
import { getAdData } from '../../../fetch/home/home.js'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	data : []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length? <HomeAd data={this.state.data} /> : '加载中'
                }
            </div>
        )
    }
    componentDidMount() {
    	const result = getAdData();
    	result.then(res => {
    		return res.json()
    	}) .then(json => {
    		let data = json;
    		if(data.length) {
    			this.setState({
    				data: data
    			})
    		}
    	})
    }
}

export default Ad;