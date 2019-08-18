import React, { Component } from 'react'
import ShouHome from '../../content/shouyehome'

export default class index extends Component {
    render() {
        return (
            <div>
                <ShouHome {...this.props} />
            </div>
        )
    }
}
