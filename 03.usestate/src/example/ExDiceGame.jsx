import React, {useState, useEffect} from 'react'
let comScore2 = 0
let useScore2 = 0

const ExDiceGame = () => {
    // 1. 버튼 클릭시 주사위 이미지 랜덤으로 변경 (둘다)
    // 2. 주사위 숫자 비교 -> 더 큰 score 값을 +1 증가
    // 3. score 값이 먼저 10에 도달한 결과 출력 => 'user 승리 , com 승리'
    let dice = ['./src/img/dice1.png', './src/img/dice2.png', './src/img/dice3.png','./src/img/dice4.png', './src/img/dice5.png', './src/img/dice6.png']
    const [comNum, setComNum] = useState(0)
    const [userNum, setUserNum] = useState(0)
    const [comScore, setComScore] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [result, setResult] = useState('')
    
    const c = () => {
        let num1 = parseInt(Math.random()*6)
        let num2 = parseInt(Math.random()*6)
        setComNum(num1)
        setUserNum(num2)

        
        if(num1 > num2){
            setComScore(comScore+1)
            comScore2 = comScore+1
        }
        else if(num2 > num1){
            setUserScore(userScore+1)
        }
        if(comScore2==10){
            setResult('com win')
        }
        else if(useScore2==10){
            setResult('you win')
        }
    }
    
    useEffect(() => {
      if(comScore==10){
        setResult('com win')}
      else if(userScore==10){
        setResult('user win')
      }
    }, [comScore, userScore])

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={c}>Start</button>


      <div >
        <img src={dice[comNum]}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={dice[userNum]}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default ExDiceGame