import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import LinkList from '../list'
import './header.scss'
export default class index extends Component {
    render() {
        const { match, show} = this.props
        return (
            <header className="header-box ">
                <div className={show?'header-tab header-ding':'header-tab'}>
                    <ul className='ul'>
                        {
                            LinkList.map(item => {
                                return <li key={item.url}> <NavLink to={match.url + item.url}>{item.title}</NavLink></li>
                            })
                        }
                    </ul>
                </div>
            </header>
        )
    }
}
