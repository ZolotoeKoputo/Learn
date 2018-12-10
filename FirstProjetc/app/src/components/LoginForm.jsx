import React, {Component} from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';

class LoginForm extends Component  {
  render() {
    return(
      <Container>
        <Row>
          <Col md="12">
            <form>
              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                <Input label="Your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button color="primary">Register</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default LoginForm;