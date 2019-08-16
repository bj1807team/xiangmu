import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { stateLoginAction} from '../../store/actionCreators/login'
 class Login extends Component {
     constructor(props) {
         super(props);
         this.state = {
             login: {
                 username: '',
                 yan: '',
                 checkbox: true,
                 yanzheng: ''
             }
         }
     }
     Change = ({ target }) => {
         //
         const { value, name } = target
         // checkbox 的判断
         let change;
         if (name === 'checkbox') {
             change = { ...this.state.login, [name]: !this.state.login.checkbox }
         }

         let login = { ...this.state.login, [name]: value }
         this.setState({
             login: name === 'checkbox' ? change : login
         })
     }
     btnDenglu = () => {

         const { username, yan, yanzheng } = this.state.login

         if (username.length < 5 || username.length > 12 || username.length === 0) {
             alert('请输入正确的手机号')
             return false
         }

         if (yan.length === 0 || Number(yan) !== yanzheng) {
             alert('请输入正确的验证码')
             return false
         }

        this.props.stateLogin()
         if (this.props.statu){
             this.props.history.push('/home')
         }

     }
     btnYan = () => {
         const suiji = Math.floor(Math.random() * (1000 - 10000)) + 10000;
         console.log(suiji)

         this.setState({
             login: { ...this.state.login, yanzheng: suiji }
         })
     }

     render() {

         const { username, yan } = this.state.login
         return (
             <div className='login-container'>
                 <header className='login-header'>
                     <NavLink to='/home' className='l-h-x'>X</NavLink>
                     <div className='l-h-text1'>登录知乎</div>
                     <div className='l-h-text2'>发现更多可信赖的解答</div>
                 </header>
                 <main className='login-main'>
                     <div className='l-form'>
                         <select name="" id="" className='l-h-select1'>
                             <option value="中国 +86">中国 +86</option>
                             <option value="美国 +1">美国 +1</option>
                             <option value="日本 +81">日本 +81</option>
                             <option value="香港 +852">香港 +852</option>
                             <option value="台湾 +886">台湾 +886</option>
                         </select>
                         <input type="text"
                             value={username}
                             name="username"
                             onChange={this.Change}
                             placeholder='请输入手机号' className='l-h-input1' />
                     </div>
                     <div className='l-pass '>
                         <input type="text"
                             value={yan}
                             name="yan"
                             onChange={this.Change}
                             placeholder='请输入6位验证码' className='l-h-input2' />
                         <div className='l-send' onClick={this.btnYan} >发送验证码</div>
                     </div>
                     <div className='l-text'>
                         <p>未注册手机验证后自动登录</p>
                         <p>注册即同意《知乎协议》《隐私保护指引》</p>
                         <div className='login' onClick={this.btnDenglu} >登录</div>
                     </div>
                     <div className='l-b-text'>
                         <NavLink to=''>密码登录</NavLink>
                         <NavLink to='/'>需要帮助</NavLink>
                     </div>
                     <div className='l-bottom'>
                         <p>社交账号登录</p>
                         <p>注册机构账号</p>
                     </div>

                 </main>
                 <div>

                 </div>
             </div>
         )
     }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        stateLogin(){
            console.log(stateLoginAction())
            dispatch(stateLoginAction())
        }
    }
}
export default connect(state => state, mapDispatchToProps)(Login)