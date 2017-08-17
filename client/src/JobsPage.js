import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import FormComponent from './FormComponent.js';

class JobsPage extends Component {

render() {
    return (
        <div>
            <h1>JobsPage</h1>
            <Panel>
                <h3>New Job</h3>
                <FormComponent />
            </Panel>
        </div>
    );
  }
}

export default JobsPage;
