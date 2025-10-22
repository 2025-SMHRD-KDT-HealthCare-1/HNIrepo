import React from 'react'

const MyDate = () => {
    // 현재 시간 가져오기
    let day = new Date();
    console.log(day)

    let myYear = day.getFullYear(); // 연도
    let myMonth = day.getMonth()+1; // 월
    let myDay = day.getDate(); // 일, day.getday : 일주일

    console.log(myYear, myMonth, myDay)

    let s = ''
    if(myMonth>=9 && myMonth<=11){
        s='가을'
    }
    else if(myMonth>=12 && myMonth<=2){
        s='겨울'
    }
    let name = prompt('이름을 말해주세요')

  return (
    <>
        <h1>{myYear}년 {myMonth}월 {myDay}일</h1>
        <hr></hr>
        <p>{}님 지금은 {s}계절 입니다. 좋은하루 보내세요 !</p>
    </>
    
  )
}

export default MyDate