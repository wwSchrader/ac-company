import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import FormComponent from './FormComponent.js';
import JobsListing from './JobsListing.js';

class JobsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listsOfJobs: []
        }

        this.refreshJobsListing = this.refreshJobsListing.bind(this);
    }

    componentDidMount() {
        this.refreshJobsListing();
    }

    refreshJobsListing() {
        fetch("/api/jobs")
        .then(res => res.json())
        .then(response => {
            this.setState({listsOfJobs: response})

        });
    }

    render() {
        return (
            <div>
                <h1>JobsPage</h1>
                <Panel>
                    <h3>New Job</h3>
                    <FormComponent refreshJobsList={this.refreshJobsListing}/>
                </Panel>
                <JobsListing jobListing={this.state.listsOfJobs} />
            </div>
        );
    }
}

export default JobsPage;
