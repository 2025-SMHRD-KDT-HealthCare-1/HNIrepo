import React from 'react'

const Menu = ({temp, menu, p}) => {
    console.log(temp, menu, p)
  return (
    <div>
        {/* <h1>{props.temp}{props.menu}</h1>
        <p>{props.p}</p> */}
        <h1>{temp} {menu} </h1>
        <p>{p}</p>
    </div>
  )
}

export default Menu