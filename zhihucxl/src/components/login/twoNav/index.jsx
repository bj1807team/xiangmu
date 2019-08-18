import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
import { connect } from 'react-redux'

// import { loginApi } from '../../api/index'
import { stateLoginAction } from '../../../store/actionCreators/login'
 class TwoNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                username: '',
                password: '',
                checkbox: true,
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

        const { username, password } = this.state.login

        if (username.length < 5 || username.length > 12 || username.length === 0) {
            alert('请输入正确的手机号')
            return false
        }
        if (password.length === 0 || password !== '123456') {
            alert('请输入正确的密码')
            return false
        }
        this.props.stateLogin()
        this.props.history.push('/home')
    }
    btnYan = () => {
        const suiji = Math.floor(Math.random() * (1000 - 10000)) + 10000;
        console.log(suiji)

        this.setState({
            login: { ...this.state.login, yanzheng: suiji }
        })
    }

    render() {
        const { username, password } = this.state.login
        return (
            <div className='login-container'>
                <header className='login-header'>
                    <span className='l-h-x'>X</span>
                    <div className='l-h-text1'>登录知乎</div>
                    <div className='l-h-text2'>发现更多可信赖的解答</div>
                </header>
                <main className='login-main'>
                    <div className='l-form'>
                        <input type="text"
                            value={username}
                            name="username"
                            onChange={this.Change}
                            placeholder='请输入手机号或邮箱' className='l-h-input1' />
                    </div>
                    <div className='l-pass '>
                        <input type="text"
                            value={password}
                            name="password"
                            onChange={this.Change}
                            placeholder='请输入密码' className='l-h-input2' />
                    </div>
                    <div className='l-text'>
                        <p>未注册手机验证后自动登录</p>
                        <p>注册即同意《知乎协议》《隐私保护指引》</p>
                        <div className='login' onClick={this.btnDenglu} >登录</div>
                    </div>
                    <div className='l-b-text'>
                        <NavLink to='/login'>邮箱登录</NavLink>
                        <NavLink to='/'>需要帮助</NavLink>
                    </div>
                </main>
                <footer className='login-footer'>
                    <div className='l-bottom'>
                        <p>社交账号登录</p>
                    </div>
                </footer>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        stateLogin() {
            dispatch(stateLoginAction())
        }
    }
}
export default connect(state => state, mapDispatchToProps)(TwoNav)