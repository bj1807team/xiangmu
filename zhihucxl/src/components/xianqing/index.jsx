import React, { Component } from 'react'
import Header from '../home/header/index'
import './xiangqing.scss'
import { xiangqingApi} from '../../api/index'
export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            isShow: [],
        }
    }
    componentDidMount(){
        const { data } = this.props.location
        const { id } = this.props.match.params

            xiangqingApi(data, id).then(res => {
                this.setState({
                    list: res.list
                })
            })
    }
    showBtn(idx) {
        this.state.isShow[idx] = !this.state.isShow[idx]
        this.setState({
            isShow: this.state.isShow
        })
    }
    render() {
        const { list } = this.state
        return (
            <div className="xian-box">
                <Header name='potion'></Header>
                <main className="mianss">
                    {
                        list && list.map((item,index)=>{
                            return <div key={item.id}>
                                <h1>{item.title}</h1>
                                <div className="content-box">
                                    <div>姓名:{}</div>
                                    <div>{item.context}</div>
                                </div>
                                 {
                                    item.agree?<div className='for'>
                                        <div className='div4'>
                                            <span className='z'>▲{item.agree}</span>
                                            <span className='x'>▼</span>
                                            <span className='l'>
                                                <span className='l1'>☁</span>
                                                <span className='l2'>{item.mature}</span>
                                            </span>
                                            <span onClick={() => this.showBtn(index)}
                                            className={
                                                this.state.isShow[index] === true ? "s sc" : 's'
                                            }>❤</span>
                                            <span className='f'>...</span>
                                        </div>
                                    </div>:''
                                 }
                            </div>
                        })
                    }

                </main>



            </div>
        )
    }
}
