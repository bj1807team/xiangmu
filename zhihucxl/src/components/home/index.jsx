import React, { Component } from 'react'
import Header from './header'
import HeaderTab from './header/header-tab'
import {Switch,Route,Redirect} from 'react-router-dom'
import './home.scss'
import Main from './main'
export default class index extends Component {
    constructor(props){
        super()
        this.state={
            show:false
        }
        this.scrllele = React.createRef()
    }

    soll = () => {
        let { scrollTop } = this.scrllele.current;
        if (scrollTop>50){
            this.setState({
                show:true
            })
        }else{
            this.setState({
                show: false
            })
        }
    }
    render() {
        const {show}=this.state
        const {match} = this.props
        return (
            <div className="home-box container" ref={this.scrllele} onScroll={this.soll}>
                <Header ></Header>
                <div className="yin-box"></div>
                <HeaderTab show={show} {...this.props}></HeaderTab>
                <main className="home-main">
                    <Switch>
                        <Route path={`${match.path}/:id`} component={Main} />
                        <Redirect to={`${match.path}/tui`} />
                    </Switch>
                </main>
            </div>
        )
    }

}
