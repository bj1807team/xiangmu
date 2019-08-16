import React, { Component, Suspense} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'


const Home = React.lazy(() => import('../home'))
const Weibo = React.lazy(() => import('../content/weibo/index'))
const Login = React.lazy(() => import('../login'))
const Xianqing = React.lazy(() => import('../xianqing'))
export default class App extends Component {
    render() {

        return (
            <div>
            <Suspense fallback={<div>加载中……</div>}>
                    <Switch>
                        {/* 登录 */}
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/weibo" component={Weibo} />
                        <Route path="/xianqi/:id" component={Xianqing} />

                        <Redirect to='/login' />
                    </Switch>
            </Suspense>
            </div>
        )
    }
}







