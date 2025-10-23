import React, {useState} from 'react'
import pic from '../img/img.jpg'

const Ex02 = () => {
    // useState의 쵝값은 다양한 데이터 자료형이 가능
    const [likeEmoji, setLikeEmoji] = useState('♡')
    const [likeNum, setLikeNum] = useState(0)

    // 빈 하트 클릭시, => 검은하트로 변경
    // 빈 하트 클릭시, => 숫자 0->1로 변경
    // 반대로도 변경
    const handleLike = () => {
        if(likeEmoji == '♥'){
            setLikeEmoji('♥')
            setLikeNum(1)
        }
        else{
            setLikeEmoji('♡')
            setLikeNum(0)
        }
    }
  return (
    <div>
        {/* src폴더 내 이미지 접근하기 */}
        {/* import 이미지변수 from '경로' */}
        <img width='300px' src={pic}></img>
        <br></br>
        {/* 외부 주소값으로 이미지 접근하기 */}
        <img width="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAM1G-knbPF7QHzHzikzPbjkWf34d5P2zP2A&s" ></img>
        <br></br>
        {/* public 폴더에 이미지가 있다면 
        http://localhost:5173/img/img2.jpg */}
        <img width='300px' src='/img/img2.jpg'></img>
        <br/>
        <p>
            <span onClick={handleLike}>{likeEmoji}</span>
            <span>{''} 좋아요 {likeNum}개</span>
        </p>
    </div>
  )
}

export default Ex02