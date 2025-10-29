import React from 'react'
import {Link} from 'react-router-dom'

// 리액트에서는 a 태그말고 Link 쓰는걸 권장
const Home = () => {
  return (
    <div>
        <h1>Home Page 입니다</h1>
        <a href='/about'> about 이동</a>
        <br />
        <Link to = '/about'>about 이동 Link</Link>
    </div>
  )
}

export default Home