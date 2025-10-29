import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const nav = useNavigate()

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  // 사용자가 입력한 ID : smhrd , PW :123 일때만 Home으로 이동
  // 다른값을 입력 했다면 '잘못 입력했습니다' 알림출력

  const logbtn = () => {
    if(inputId=='smhrd' && inputPw=='123'){
      nav('/')
    }
    else{
      alert('잘못 입력했습니다')
    }
  }
  return (
    <div>
        <h1>Login Page</h1>
        ID <input onChange={e=>setInputId(e.target.value)}></input>
        <br />
        PW : <input onChange={e=>setInputPw(e.target.value)}></input>
        <br />
        <button onClick={logbtn}>Login</button>
        {/* <Link to='/'><button>Login</button></Link> */}
    </div>
  )
}

export default Login