import React from "react";
import { Card, Button, Container } from "react-bootstrap";
const CardComponent = ({ posts }) => {
  return (
    <Container style={{ display: "flex", justifyContent: "space-between" }}>
      {posts.map((post) => (
        <>
          <Card
            style={{
              width: "18rem",
              boxShadow: "10px 10px 39px 2px rgba(0,0,0,0.35);",
              webkitBoxShadow: "0px -1px 5px 0px rgba(0,0,0,0.75)",
              mozBoxShadow: "0px -1px 5px 0px rgba(0,0,0,0.75)",
              border: "solid 0.1px lightgrey",
            }}
          >
            <Card.Img
              variant="top"
              src={post.img}
              style={{
                width: "287px",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <Card.Title style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                {post.title}
              </Card.Title>
              <Card.Text>{post.desc}</Card.Text>
              <Button style={{ backgroundColor: "#4682B4", color: "white" }}>
                Read News
              </Button>
            </Card.Body>
          </Card>
          <br></br>
        </>
      ))}
    </Container>
  );
};

export default CardComponent;
