import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHead from '../../components/SearchHead/index.js'
import { connect } from 'react-redux'
 
import SearchList from './subpage/list.js'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHead keyword={params.category} />
                <SearchList  category={params.category} cityName={this.props.userinfo}/>
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
)(Search)
