import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import { gitHomes} from '../../../api/index'
export default class index extends Component {
    constructor(props){
        super()
        this.state={
            lists:[]
        }
    }
    componentDidMount(){
        gitHomes().then(res=>{
            // console.log(res)
            this.setState(() => {
                return {
                    lists: res.list
                }
            })
        })
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
                                <i className='iconfont icon-stars'></i>
                            </NavLink>
                        })
                    }
                </div>
            </div>
        )
    }
}

