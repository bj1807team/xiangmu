import React, { Component } from 'react'
import axios from 'axios'
import './main.scss'
import Common from '../../content/common'
export default class index extends Component {
    constructor(props){
        super()
        this.state={
            data:{},
            body:{}
        }
    }

    listbtn=(id)=>{

        axios.get('http://localhost:4500/ditail', { params:{ id }}).then(res => {
            this.setState({
                body: res.data
            })
        })
    }
    render() {
        return (
            <div className="mian-cont">
                <Common {...this.props} />
            </div>
        )
    }
}
