/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'
export default class index extends Component {
    render() {

        return (
            <header className="header-box ">
                <div className='header-top flex flex-ju'>
                    <NavLink to='/home' className="hed-top">知乎</NavLink>
                    <NavLink className="sou-put" to='/weibo'>
                        🔍 搜索
                    </NavLink>
                    <NavLink to='/login' className="size-box">
                        注册或者登陆
                    </NavLink>
                </div>
            </header>
        )
    }
}
