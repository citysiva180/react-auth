import React from "react";
import { Card, Container } from "react-bootstrap";
import posts from "../../data";
import CardComponent from "../utils/Cards/CardComponent";
const HomePage = () => {
  return (
    <Container>
      <div
        className="p-5 rounded-lg m-3"
        style={{
          color: "black",

          textShadow: "1px 1px 2px white, 0 0 1em #AB0C0C, 0 0 0.2em #AB0C0C",
          backgroundColor: "#FFA700",
          opacity: 0.8,
          backgroundImage:
            "radial-gradient(circle at center center, white,#FFA700), repeating-radial-gradient(circle at center center, white, #FFA700, 10px, transparent 20px, transparent 10px)",
          backgroundBlendMode: "multiply",
          fontFamily: "'Noto Sans', sans-serif",
        }}
      >
        <h1 class="display-4">Welcome Master!</h1>
        <p class="lead">Welcome to the MCU world of Mystic Arts!</p>
        <hr class="my-4" />
        <p>
          Soon you will master all the mystic arts to become the Sorceror
          Supreme!
        </p>
        <a
          className="btn btn-lg"
          href="#1"
          role="button"
          style={{ backgroundColor: "#00438D", color: "white" }}
        >
          Learn Now!
        </a>
      </div>
      <br></br>
      <CardComponent posts={posts}></CardComponent>
    </Container>
  );
};

export default HomePage;
