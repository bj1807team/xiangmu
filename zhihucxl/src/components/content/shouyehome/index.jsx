import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { gitHomes } from '../../../api/index'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super()
        this.state = {
            lists: [],
            isShow: [],
        }
    }
    componentDidMount() {
        gitHomes().then(res => {
            // console.log(res)
            this.setState(() => {
                return {
                    lists: res.list
                }
            })
        })
    }
    showBtn(idx) {
        let isShows = []
        isShows[idx] = !this.state.isShow[idx]
        this.setState({
            isShow: isShows
        })
    }
    render() {
        const { lists } = this.state
        return (
            <div className="homebox">
                <div className="contentbox">
                    {
                        lists && lists.map((item, index) => {
                            return <div key={index} >
                                <NavLink to={{
                                    pathname: `/xianqi/${item.id}`,
                                    data: this.props.match.url
                                }} className="block-tetx" >
                                    <p className="title">{item.title}</p>
                                    <img src={item.img} alt="" />
                                    <p className="content">{item.content}</p>

                                </NavLink>
                                <div className='forbox'>
                                    <div className='div4'>
                                        <span className='z'>▲{item.agree}</span>
                                        <span className='x'>▼</span>
                                        <span className='l'>
                                            <span className='l1'>☁</span>
                                            <span className='l2'>{item.mature}</span>
                                        </span>
                                        <span onClick={() => this.showBtn(index)} className={
                                            this.state.isShow[index] === true ? "s sc" : 's'
                                        }>❤</span>

                                    </div>
                                </div>
                            </div>

                        })
                    }
                </div>
            </div>
        )
    }
}

