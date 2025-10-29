import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
// import ClassComponent from '../components/ClassComponent'

const Ex13 = () => {
    /* 
        공공 날씨 데이터를 가져와서 도시별로 날씨정보 화면에 띄우기
        - openweathermap.org에서 날씨정보 받아오기
        - 첫 화면에 광주날씨 띄우기
        - 3개의 버튼에 도시 지정, 각 버튼 클릭시 각 도시의 날씨 띄우기

        - handleCity : 도시를 변경해주는 함수(버튼연결)
        - state 변수 : temp, weather, city (온도, 날씨, 도시)

        1. temp 는 main.temp로 접근, -273도 띄우기
        2. weather는 weather[0].main으로 접근해서 출력(상태변수에 넣어주기)
    */
    // const [isShow,setIsShow] = useState(0)
    const [osaka, setOsaka] = useState(0)
    const O = () => {
        
    }

    useEffect(()=>{
        const url = 'https://api.openweathermap.org/data/2.5/weather'
        const city = 'Gwangju' 
        const key = '3be06afee2cb00927f939138aca4fb83'

        axios.get(url, {
            params : {
                q : city,
                appid : key
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err =>{
            console.error(err)
        })
    },[])
    return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨</h1>
            <div className='weather-data'>
                 <h3>광주</h3>
                <h1>10</h1>
                <h4>맑음</h4>

            </div>
            <div className='button-wrapper'>
                <button onClick={O}>Osaka</button>
                <button onClick={P}>Paris</button>
                <button onClick={L}>London</button>
                {isShow && <ClassComponent/>}
            </div>
        </div>
            
            

        </div>
  )
}

export default Ex13