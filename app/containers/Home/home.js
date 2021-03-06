import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/index.js'
import Category from '../../components/Category/index.js'
import Ad from './subpage/Ad.jsx'
import List from './subpage/List.js'
import {connect} from 'react-redux'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName} />
                <Category />
                <Ad />
                <List cityName={this.props.userinfo.cityName} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }

}

function mapDispatchToprops(dispatch) {
    return {
      
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(Home)
