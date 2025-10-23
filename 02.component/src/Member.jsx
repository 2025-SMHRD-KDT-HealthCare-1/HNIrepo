import React from 'react'

const Member = ({member}) => {

  let boxStyle = {
    backgroundColor : 'whitesmoke',
    border : '1px solid black',
    padding : '30px',
    borderRadius : '10px',
    textAlign : 'center',
    marginTop : '10px',
    width : '500px'
  }
  return (
    <div>
      <div style={boxStyle}>
        {/* <h1>무한도전 {props.member}</h1> */}
        <h1>무한도전 {member}</h1>
      </div>
    </div>
    
  )
}

export default Member