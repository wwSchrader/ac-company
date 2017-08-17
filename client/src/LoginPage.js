import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Col md={4} mdOffset={4} sm={6} smOffset={3}>
            <h1>Welcome!</h1>
            <h3>Please sign in:</h3>
            <Form horizontal>
                <FormGroup controlId="formUsername">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" placeholder="Username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit" bsStyle="primary">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
            </Form>
        </Col>
      </div>
    );
  }
}

export default LoginPage;