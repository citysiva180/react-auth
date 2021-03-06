import React from "react";
import { posts } from "../../data";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";
const PostPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);

  return (
    <div>
      <Container>
        <br></br>
        <img
          src={post.img}
          alt=""
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />
        <br></br>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Noto Sans', sans-serif" }}>
            {post.title}
          </h1>
        </div>
        <br></br>
        <br></br>
        <p
          style={{
            // padding: "0 100px",
            fontSize: "24px",
            fontWeight: "300",
            color: "grey",
          }}
        >
          {post.desc}
        </p>
        <br></br>
        <p>{post.longDesc}</p>
      </Container>
    </div>
  );
};

export default PostPage;
