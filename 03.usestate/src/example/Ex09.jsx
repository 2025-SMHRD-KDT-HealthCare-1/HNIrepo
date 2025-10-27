import React from 'react'
import { useState, useRef } from 'react'

const Ex09 = () => {
    // 1. input 태그에 적은 내용이 계획추가 버튼 클릭시, 배열에 저장 (state)
    // 2. 저장된 배열state를 map함수를 통해 ul에 출력 (컴포넌트 li 사용)
    // 3. li에 달려있는 삭제버튼 클릭 시 filter함수를 사용해 해당요소를 지우고 새롭게 배열 만들기

    
    const [input, setInput] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // state 배열에 값 추가하는 방법 (스프레드 연산자 사용 -> ...)
    // setInput([...input, '밥먹기'])

    const addTodo = () => {
        // console.log(inputValue)
        setInput([...input, inputValue])
        setInputValue('')
    }

    // todoList 삭제함수
    const removeTodo = (deleteIndex) => {
        const updatedTodos = input.filter((item, index) => index !== deleteIndex)
        setInput(updatedTodos)
    }
  return (
    <div>
        <h1>2025 올해는 꼭 할 수 있다 !</h1>
        {/* contrilled input으로 input태그 제어 (useState를 이용한 input 제어) */}
        <input 
            type='text' 
            value={inputValue} 
            onChange={(event)=>setInputValue(event.target.value)}/>

        <button onClick={addTodo}>계획 추가</button>

        <h1>TodoList</h1>
        <ul>
            {/* 이곳에 TodoList가 li 형태로 들어가야됌 */}
            {input.map((item, index) => (
                <li key={index}>{item}
                <button onClick={() => removeTodo(index)}>삭제</button></li>
            ))}
        </ul>
    </div>
  )
}

export default Ex09