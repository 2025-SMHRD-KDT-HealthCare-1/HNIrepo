import React, {useState, useRef}  from 'react'

const Ex07 = () => {
    const [ranNum, setRanNum] = useState(parseInt(Math.random()*50)+1)
    const inputRef = useRef()
    const [result, setResult] = useState('')
console.log(ranNum)
    const btnClick = ()=>{
        let text = inputRef.current.value
        if(ranNum>text){
            setResult('더 큰수')
        }
        else if(ranNum<text){
            setResult('더 작은수')
        }
        else if(ranNum == text){setResult('정답')}
        
    }
  return (
    <div>
        <h1>1~50 까지의 랜덤 수 맞추기</h1>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>추측</button>
        <p>Hint : {result}</p>
    </div>
  )
}

export default Ex07