import React, { ReactNode } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./home.css"
interface CardProps{
    cardTitle:string;
    image:string;
    children:ReactNode;
}

const Cards = ({cardTitle,image,children}:CardProps) => {
    return (
    <div>
        
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                  {children}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </div>
      );
}

export default Cards