import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex06map = ({item}) => {
    console.log(item)
  return (
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.imgSrc}/>
      <Card.Body>
        <Card.Title>{item.title}{item.birthYear}</Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
        <a href=''>
            <Button href={item.SNS} variant="success">Instagram</Button>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Ex06map