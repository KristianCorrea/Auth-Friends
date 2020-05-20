import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js'

const Login = (props)=>{
    const [login, setLogin] = useState({username: '', password: ''})
    const [submitDisabled, setSubmitDisabled]=useState(true)

    const handleChange = event =>{
        setLogin(
            {...login, [event.target.name]: event.target.value}
        )
        if(login.username.length>0 && login.password.length>0){
            setSubmitDisabled(false)
        }
    }
    const submitLogin = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/login', login)
            .then(response=>{
                console.log(JSON.stringify(response.data.payload))
                localStorage.setItem('token', JSON.stringify(response.data.payload))
                props.history.push('/protected')
            })
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div>
            <h3>Login</h3>
            <form className='form' onSubmit={submitLogin}>
                <label htmlFor="username" >Username:
                    <input name="username" type="text" onChange={handleChange} />
                </label>
                <label htmlFor="password" >Password:
                    <input name="password" type="text" onChange={handleChange} />
                </label>
                <input disabled={submitDisabled} className='submit' name='submit' type='submit' />
            </form>
        </div>
    )
}

export default Login