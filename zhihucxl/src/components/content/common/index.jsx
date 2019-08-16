import React, { Component } from "react"
import { NavLink } from 'react-router-dom';
import "./index.scss"
import { shouApi } from '../../../api/index'

export default class Common extends Component {
    constructor(props) {
        super()
        this.state = {
            id: '',
            lists: []
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        shouApi(id).then(res => {
            this.setState(() => {
                return {
                    id,
                    lists: res.list
                }
            })
        })
    }
    componentDidUpdate() {
        const { id } = this.props.match.params
        if (id !== this.state.id) {
            shouApi(id).then(res => {
                this.setState({
                    id,
                    lists: res.list
                })
            })
        }

    }
    render() {
        const { lists } = this.state
        return (
            <div className="cxl-name">
                <div className="contentbox">
                    {
                        lists && lists.map((item, index) => {
                            return <NavLink to={{
                                pathname: `/xianqi/${item.id}`,
                                data: this.props.match.params.id
                            }} key={index} className="block-tetx" >
                                <p className="title">{item.title}</p>
                                <img src={item.img} alt="" />
                                <p className="content">{item.content}</p>
                            </NavLink>
                        })
                    }
                </div>
            </div>
        )
    }
}
