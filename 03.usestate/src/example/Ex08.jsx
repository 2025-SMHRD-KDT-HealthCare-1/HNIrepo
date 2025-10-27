import React from 'react'
import pic from '../img/img.jpg'
import { useState } from 'react'



const Ex08 = () => {
    let imgArray = ['./src/img/images.jpg', './src/img/p.png', './src/img/r.jpg']
    const [pos,setPos]=useState(0)
    const [mySrc, setSrc] = useState('./src/img/images.jpg')


    const chImg = () =>{
        if (pos ==2){
            setPos(0)
        }
        else {
            setPos(pos+1)
        }
    }

    const bakImg = ()=>{
        if (pos == 0){
            setPos(2)
        }
        else {
            setPos(pos-1)
        }
    }

  return (
    <div>
        <button onClick={bakImg}>이전</button>
        <img src={imgArray[pos]}></img>
        <button onClick={chImg}>다음</button>
    </div>
  )
}

export default Ex08