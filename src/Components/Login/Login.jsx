import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import loginImage from "../../Components/images/loginBackground.jpeg";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
const Login = () => {
  return (
    <Container>
      <br></br>
      <br></br>
      <div
        style={{
          alignContent: "center",
          // backgroundColor: "#FFA700",
          border: "solid 2px lightgrey",
          borderRadius: "25px",
          // zIndex: "2",
        }}
      >
        <Col
          style={{
            padding: "30px",
          }}
        >
          <Row>
            <p>
              <strong>Social Logins</strong>
            </p>
            <div style={{ width: "100%", display: "flex" }}>
              <FacebookLoginButton onClick={() => alert("Hello")} />
              <GoogleLoginButton onClick={() => alert("Hello")} />
              <TwitterLoginButton onClick={() => alert("Hello")} />
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </Row>

          <br></br>
          <hr className="my-4" />
          <p>
            <strong>Login with your email and password</strong>
          </p>
          <br></br>
          <Row>
            {" "}
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Row>
        </Col>
      </div>
    </Container>
  );
};

export default Login;
