import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index.js'

import CurrentCity from '../../components/CurrentCity/index.js'
import CityList from '../../components/CityList/index.js'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFormOtherFile from '../../actions/userinfo.js'
import {hashHistory} from 'react-router'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'


class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='选择城市'/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeCityFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newcity) {
        if(newcity == null) {
            return
        }
        //修改redux数据
        let userinfo = this.props.userinfo;
        userinfo.cityName = newcity;
        this.props.userInfoActions.update(userinfo);

        // 修改 cookie
        localStore.setItem(CITYNAME, newcity)

        hashHistory.push('/')
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToprops(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(City)
