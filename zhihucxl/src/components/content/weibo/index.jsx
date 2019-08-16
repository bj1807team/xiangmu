/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'
import './index.scss'
import img from './1.png'
export default class Weibo extends Component {
    render() {
        return (
            <div className='cxl-wb'>
                <header className="header-box ">
                    <div className='header-top flex flex-ju'>
                        <div className="hed-top">知乎</div>
                        <div className="sou-put">
                            🔍
                            <input type="text" className='inp' placeholder='搜索知乎内容' />
                        </div>
                        <NavLink to="/home" className="size-box">
                            取消
                        </NavLink>
                    </div>
                </header>
                <img src={img} alt="" />
            </div>
        )
    }
}
