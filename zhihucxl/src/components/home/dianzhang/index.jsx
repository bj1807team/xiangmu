import React, { Component } from 'react'
import './deng.scss'
export default class index extends Component {

    render() {

            const arr= [
                {
                    "id": 1,
                    "hours": "2天前",
                    "title": "有哪些诗词让你觉得是人间绝句?",
                    "name": "李芒果",
                    "signature": "自律即自由",
                    "people": "6,420 赞同了该回答",
                    "text": "1.把酒祝东风，且共从容。---宋·欧阳修《浪淘沙》2.梦好莫催醒，由",
                    "agree": "赞同 6.4K",
                    "mature": "评论 113"
                },
                {
                    "id": 2,
                    "hours": "2天前",
                    "title": "有没有写过或收藏很久的句子?",
                    "name": "故抒丫",
                    "signature": "以前年轻不懂事，爱文艺，现在长大了，只...",
                    "people": "2,326 赞同了该回答",
                    "text": "1.绕过江山错落才发现你是人间星火。2.我是个很暗淡的人，是你给了我满",
                    "agree": "赞同 2.3K",
                    "mature": "评论 32"
                },
                {
                    "id": 3,
                    "hours": "2天前",
                    "title": "有没有什么描述时间过得快的好句子?",
                    "name": "语文李债主",
                    "signature": "语文虐我千百遍，我带语文如初恋",
                    "people": "12,440 赞同了该回答",
                    "text": "语文老师一枚，分享几句啦：1.后来，南山的风吹散了谷堆，北海的水淹没",
                    "agree": "赞同 12K",
                    "mature": "评论 197"
                },
                {
                    "id": 4,
                    "hours": "2天前",
                    "title": "有哪些适合摘抄的句子?",
                    "name": "斑大人喝醉了",
                    "signature": "一定要到达",
                    "people": "12,118 赞同了该回答",
                    "text": "1.纵有千古，横有八荒;前途似海,来日方长。---梁启超2.十年饮冰",
                    "agree": "赞同 12K",
                    "mature": "评论 197"
                },
                {
                    "id": 5,
                    "hours": "2天前",
                    "title": "有哪些诗词让你觉得是人间绝句?",
                    "name": "作文纸条",
                    "signature": "已认证的官方账号",
                    "people": "4,2459 赞同了该回答",
                    "text": "苏轼&李清照大大：人间绝句,没有我写不出的1.且将新火试新茶，诗酒",
                    "agree": "赞同 42K",
                    "mature": "评论 561"
                },
                {
                    "id": 6,
                    "hours": "2天前",
                    "title": "哪句文艺的话第一次听到便为之震撼?",
                    "name": "海葵",
                    "signature": "",
                    "people": "5,847 赞同了该回答",
                    "text": "1.我年华虚度，空余一身疲惫，和所有以梦为马的诗人一样，岁月易逝,一",
                    "agree": "赞同 5.8K",
                    "mature": "评论 89"
                }
            ]

        return (
            <div>
                {
                    arr.map((item, index) => {
                        return (
                            <div className='for' key={index}>

                                <div className='div4'>
                                    <span className='z'>▲{item.agree}</span>
                                    <span className='x'>▼</span>
                                    <span className='l'>
                                        <span className='l1'>☁</span>
                                        <span className='l2'>{item.mature}</span>
                                    </span>
                                    <span className='s'>❤</span>
                                    <span className='f'>...</span>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        )
    }
}
