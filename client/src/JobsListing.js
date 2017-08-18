import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';


class JobsListing extends Component {
    constructor(props) {
        super(props)
        this.state = {jobsListing: this.props.jobListing};
    }

    componentWillReceiveProps(newProps){
        this.setState({jobsListing: newProps.jobListing});
    }

    render() {
        let jobLists = null;
        if(this.state.jobsListing) {
            jobLists = this.state.jobsListing.reverse().map(job => {
                return (
                    <tr key={job._id}>
                        <td>{job.nameText}</td>
                        <td>{job.cellPhoneNumber}</td>
                        <td>{job.technicianSelect}</td>
                        <td>{job.emailText}</td>
                        <td>{job.jobDate}</td>
                        <td>{job.jobDescription}</td>
                    </tr>
                );
            });
        }
        return (
            <Col lg={10} lgOffset={1}>
                <Table striped bordered condensed hover responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cell Phone</th>
                            <th>Technician</th>
                            <th>Email</th>
                            <th>Job Date</th>
                            <th>Job Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {jobLists}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default JobsListing;
