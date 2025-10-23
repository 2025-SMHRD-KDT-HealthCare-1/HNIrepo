import React, {useState, useRef} from 'react'
// useRef : 하나의 컴포넌트에서 태그를 찾을 수 있는 기능(태그 참조 변수 생성기능)

const Ex04 = () => {
    const [inputText, setInputText] = useState()
    const inputRef = useRef()

    const btnClick = () =>{
        // 1. input 태그에 적은 값 가져오기
        // let text = document.querySelector('input').value
        let text = inputRef.current.value
        // 2. 가져온 값으로 inputText 값 바꿔주기 (setInputText)
        setInputText(text)
    }
    

    //  let ranNum = parseInt(Math.random()*50)+1

  return (
    <div>
        <h1>1~50 까지의 랜덤 수 맞추기</h1>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>출력</button>
        <p>Hint : {inputText}</p>
    </div>
  )
}

export default Ex04