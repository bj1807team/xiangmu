/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './header.scss'
class headers extends Component {
    constructor(props) {
        super()
        this.state = {
            isShows: false
        }
    }
    render() {
        return (
            <header className="header-box ">
                <div className='header-top flex flex-ju'>
                    <NavLink to='/home' className="hed-top">知乎</NavLink>
                    <NavLink className="sou-put" to='/weibo'>
                        🔍 搜索
                    </NavLink>
                    {this.props.statu ? <div>
                        <div className="cai-box" onClick={() => this.setState({
                            isShows: !this.state.isShows
                        })}><i className='iconfont icon-caidan1'></i></div>
                        {this.state.isShows && <ul className='cai-cont'>
                            <li onClick={() => this.setState({
                                isShows: !this.state.isShows
                            })}>
                                <NavLink to='/home' >
                                    <i className='iconfont icon-shouye1'></i>
                                    首页
                                </NavLink>
                            </li>
                            <li onClick={() => this.setState({
                                isShows: !this.state.isShows
                            })}>
                                <NavLink to='/card' >
                                    <i className='iconfont icon-wode1'></i>

                                    我的主页</NavLink>
                            </li>
                            <li onClick={() => this.setState({
                                isShows: !this.state.isShows
                            })}>
                                <NavLink to='/login' >
                                    <i className='iconfont icon-icon-'></i>

                                    退出登录</NavLink>
                            </li>
                        </ul>}


                    </div> : <NavLink to='/login' className="size-box">
                            注册或者登陆
                    </NavLink>}

                </div>
            </header>
        )
    }
}

export default connect(state => state)(headers)