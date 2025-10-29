import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
// useNavigate : 주소값을 바꿔서 다른 컴포넌트를 띄울 수 있는 기능
import { useState } from 'react'

const join = () => {
  // nav : 주소값을 바꿀 수 있는 변수로 사용가능
  const nav = useNavigate()

  const [inputId, setInputId] = useState('')
  const[inputPw, setInputPw] = useState('')
  const[inputNick, setInputNick] = useState('')

  // ID, PW, NICK 값을 전부 입력 했을때만 페이지 이동 시키기

  const btnJoin = () => {


    if(inputId!='' && inputPw!='' && inputNick!=''){
      nav('/login')
    }
    else{
      alert('빠진 값이 있습니다')
    }
    // 사용자가 입력한 ID, PW, NICK값 가져오기

  }
  return (
        <div>
        <h1>즐거운 React</h1>
        ID <input onChange={e=>setInputId(e.target.value)}></input>
        <br />
        PW : <input onChange={e=>setInputPw(e.target.value)}></input>
        <br />
        NICK : <input onChange={e=>setInputNick(e.target.value)}></input>
        <br />
        <button onClick={btnJoin}>Join</button>
        {/* <Link to='/Login'><button>Join</button></Link> */}
    </div>
  )
}

export default join