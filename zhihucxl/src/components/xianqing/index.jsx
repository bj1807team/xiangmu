import React, { Component } from 'react'
import Header from '../home/header/index'
import './xiangqing.scss'
import { xiangqingApi} from '../../api/index'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        const { data } = this.props.location
        const { id} = this.props.match.params
        xiangqingApi(data, id).then(res=>{
            this.setState({
                list: res.list
            })
        })
    }
    render() {
        const { list } = this.state
        return (
            <div className="xian-box">
                <Header></Header>
                <main>
                    {
                        list && list.map((item,index)=>{
                            return <div key={item.id}>
                                <h1>{item.title}</h1>
                                <div className="content-box">
                                    <div>姓名:{}</div>
                                    <div>{item.context}</div>
                                </div>
                            </div>
                        })
                    }

                </main>



            </div>
        )
    }
}
