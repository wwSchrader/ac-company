import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel, Col, Button } from 'react-bootstrap';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: '',
            cellPhoneNumber: '',
            technicianSelect: 'select',
            emailText: '',
            jobDate: '',
            jobDescription: ''
        }

        this.onNameTextChange = this.onNameTextChange.bind(this);
        this.onCellPhoneNumberChange = this.onCellPhoneNumberChange.bind(this);
        this.onTechnicianSelectChange = this.onTechnicianSelectChange.bind(this);
        this.onEmailTextChange = this.onEmailTextChange.bind(this);
        this.onJobDateChange = this.onJobDateChange.bind(this);
        this.onJobDescriptionChange = this.onJobDescriptionChange.bind(this);
    }

    onNameTextChange(e) {
        this.setState({
            nameText: e.target.value
        });
    }

    onCellPhoneNumberChange(e) {
        this.setState({
            cellPhoneNumber: e.target.value
        });
    }

    onTechnicianSelectChange(e) {
        this.setState({
            technicianSelect: e.target.value
        });
    }

    onEmailTextChange(e) {
        this.setState({
            emailText: e.target.value
        });
    }

    onJobDateChange(e) {
        this.setState({
            jobDate: e.target.value
        });
    }

    onJobDescriptionChange(e) {
        this.setState({
            jobDescription: e.target.value
        });
    }
    render() {
        return (
            <form>
                <Col md={4} sm={6} lg={4} lgOffset={2}>
                    <FieldGroup
                        id="nameText"
                        type="text"
                        label="Name"
                        placeholder="Enter Name"
                        value={this.state.nameText}
                        onChange={this.onNameTextChange}
                    />
                    <FieldGroup
                        id="cellPhoneNumber"
                        type="tel"
                        label="Cell Phone"
                        placeholder="Enter Cell Phone Number"
                        value={this.state.cellPhoneNumber}
                        onChange={this.onCellPhoneNumberChange}
                    />
                    <FormGroup controlId="technicianSelect">
                        <ControlLabel>Technician</ControlLabel>
                        <FormControl componentClass="select" placeholder="Please select one" value={this.state.technicianSelect} onChange={this.onTechnicianSelectChange}>
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
                        value={this.state.emailText}
                        onChange={this.onEmailTextChange}
                    />
                    <FieldGroup
                        id="jobDate"
                        type="date"
                        label="Job Date"
                        placeholder="Enter Job Date"
                        value={this.state.jobDate}
                        onChange={this.onJobDateChange}
                    />
                    <FieldGroup
                        id="jobDescription"
                        type="text"
                        label="Job Description"
                        placeholder="Enter Job Description"
                        value={this.state.jobDescription}
                        onChange={this.onJobDescriptionChange}
                    />
                    <Button bsStyle="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </form>
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

export default FormComponent;
