import React, { ReactNode, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import "./home.css";

interface CardProps {
  cardTitle: string;
  image: string;
  linkSource:string;
  children: ReactNode;
}

const Cards = ({ cardTitle, image,linkSource, children }: CardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title><a href={linkSource}>{cardTitle}</a></Card.Title>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="primary"
          >
            Pros and Cons
          </Button>
          <Collapse in={open}>
            {children}
          </Collapse>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
