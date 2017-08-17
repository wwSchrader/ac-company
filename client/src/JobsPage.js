import React, { Component } from 'react';
import { Panel, FormGroup, FormControl, HelpBlock, ControlLabel, Col, Button } from 'react-bootstrap';

class JobsPage extends Component {
  render() {
    return (
      <div>
        <h1>JobsPage</h1>
        <Panel>
            <h3>New Job</h3>
            <form>
                <Col md={4} sm={6} lg={4} lgOffset={2}>
                    <FieldGroup
                        id="nameText"
                        type="text"
                        label="Name"
                        placeholder="Enter Name"
                    />
                    <FieldGroup
                        id="cellPhoneNumber"
                        type="tel"
                        label="Cell Phone"
                        placeholder="Enter Cell Phone Number"
                    />
                    <FormGroup controlId="technicianSelect">
                        <ControlLabel>Technician</ControlLabel>
                        <FormControl componentClass="select" placeholder="Please select one">
                            <option value="select">select</option>
                            <option value="technician1">technician1</option>
                            <option value="technician2">technician2</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col md={4} sm={6} lg={4}>
                    <FieldGroup
                        id="emailText"
                        type="email"
                        label="Email Address"
                        placeholder="Enter email"
                    />
                    <FieldGroup
                        id="date"
                        type="date"
                        label="Job Date"
                        placeholder="Enter Job Date"
                    />
                    <FieldGroup
                        id="jobDescription"
                        type="text"
                        label="Job Description"
                        placeholder="Enter Job Description"
                    />
                    <Button bsStyle="primary" type="sumbit">
                        Submit
                    </Button>
                </Col>
            </form>
        </Panel>
      </div>
    );
  }
}

function FieldGroup({id, label, help, ...props}) {
        return (
            <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </FormGroup>
        );
    }

export default JobsPage;
