/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getBaidu } from '../../../api'
import './index.scss'
import img from './1.png'
class Weibo extends Component {
    render() {
        const { onChangeInput, inputValue, list, pushlist, historyList, clearItem, delhistory } = this.props
        // console.log(inputValue)
        return (
            <div className='cxl-wb'>
                <header className="header-box ">
                    <div className='header-top flex flex-ju'>
                        <div className="hed-top">知乎</div>
                        <div className="sou-put">
                            🔍
                            <input type="text" className='inp' placeholder='搜索知乎内容'
                                onChange={onChangeInput} value={inputValue}
                            />
                        </div>
                        <NavLink to="/home" className="size-box">
                            取消
                        </NavLink>
                    </div>
                </header>
                <div>
                    {
                        inputValue ?
                            <ul className='cxl-ul'>
                                {
                                    list && list.map((item, index) => {
                                        return <li key={index} onClick={() => pushlist(index)}>
                                            <span>🔍</span>
                                            {item}
                                        </li>
                                    })
                                }
                            </ul>
                            : <div>
                                <img src={img} alt="" />
                                <ul className='historylist'>
                                    <div className='flexs'>
                                        <h5>搜索历史</h5>
                                        <span onClick={clearItem}>清空</span>
                                    </div>
                                    {
                                        historyList.map((item, index) => {
                                            return <div key={index} >
                                                <li className='flex'>{item}
                                                    <button onClick={() => delhistory(index)}>X</button>
                                                </li>
                                            </div>
                                        })
                                    }
                                </ul>
                            </div>
                    }
                </div>

            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeInput({ target }) {

            dispatch({
                type: 'ChangeInputValue',
                value: target.value
            })
            if (target.value) {
                getBaidu({ value: target.value }).then(res => {

                    dispatch({
                        type: 'pushSearchList',
                        list: res.s
                    })
                })
            }
        },
        // 添加到历史记录
        pushlist(index) {
            dispatch({
                type: 'pushHistoryList',
                index
            })
        },
        // 清空
        clearItem() {
            console.log(11)
            dispatch({
                type: 'ClearhistoryList',
            })
        },
        // 删除历史记录
        delhistory(index) {
            dispatch({
                type: 'delehistoryItem',
                index
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Weibo)
