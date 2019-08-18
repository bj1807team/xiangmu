import React, { Component } from 'react'
import { NavLink, Route,Switch,Redirect } from 'react-router-dom'
import './index.scss'
export default class Content extends Component {
    render() {
        console.log()
        const { path, url} = this.props.match
        return (
            <div className='profile'>
                <div className='profile-card'>
                    <div className='p-c-center'>
                        <div className='img-box'>
                            <img src="https://pic4.zhimg.com/da8e974dc_xl.jpg" alt="" />
                            <p className='name'>嘻嘻</p>
                            <div className='profile-button'>
                                打开 APP 编辑资料
                            </div>
                        </div>
                    </div>
                    <div className='flex care'>
                        <span>0关注我的人</span>
                        <span>|</span>
                        <span>0我关注的人</span>
                    </div>
                </div>
                <div className='profile-data '>
                    <ul className='flex'>

                        <li><NavLink to={`${url}/dongtai`}activeClassName='link'>动态</NavLink></li>
                        <li><NavLink to={`${url}/huida`} activeClassName='link'>回答</NavLink></li>
                        <li><NavLink to={`${url}/wenzhang`} activeClassName='link'>文章</NavLink></li>
                        <li><NavLink to={`${url}/tiwen`} activeClassName='link'>提问</NavLink></li>
                    </ul>
                    <main>
                        <Switch>
                            <Route path={`${path}/dongtai`} component={() => <div>123</div>} />
                            <Route path={`${path}/huida`} component={() => <div>345</div>} />
                            <Route path={`${path}/wenzhang`} component={() => <div>464</div>} />
                            <Route path={`${path}/tiwen`} component={() => <div>444</div>} />
                            <Redirect to={`${path}/dongtai`}/>
                        </Switch>

                    </main>
                </div>
            </div>
        )
    }
}
