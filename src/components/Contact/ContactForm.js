import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Alert, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { sendEmail } from '../../actions';

import spinner from '../../img/spinner.gif';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        email: '',
        message: '',
        emailStatus: '',
        messageStatus: ''
      }
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const status = name + 'Status';
    let statusState;
    if (name === 'email' && value.length < 6) {
      statusState = false;
    } else if (name === 'message' && value.length < 12) {
      statusState = false;
    } else {
      statusState = true;
    }
    this.setState(prevState => {
      prevState.input[name] = value;
      return { input: prevState.input, [status]: statusState };
    });
  };

  handleSubmit = () => {
    const { email, message } = this.state.input;
    if (email.length < 12 || message.length < 12) {
      return;
    }
    this.props.sendEmail(email, message);
  };

  renderForm = () => {
    if (this.props.loading === 'loading') {
      return (
        <div className="text-center">
          <img src={spinner} alt="Spinner" />
        </div>
      );
    } else if (this.props.loading === 'ended') {
      if (this.props.success === true) {
        return (
          <Alert color="success" className="text-center">
            <strong> Your message has been sent! Thank you!</strong>
            <br /> I'll get back to you shortly!
          </Alert>
        );
      } else {
        return (
          <Alert color="danger" className="text-center">
            An error occurred, please try again.
          </Alert>
        );
      }
    } else {
      return (
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                value={this.state.input.email}
                onChange={this.handleChange}
                valid={this.state.emailStatus}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>
              Message
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="message"
                id="message"
                className="not-resizable"
                rows="8"
                placeholder="Your message"
                value={this.state.input.message}
                onChange={this.handleChange}
                valid={this.state.messageStatus}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      );
    }
  };
  
  render() {
    return <span>{this.renderForm()}</span>;
  }
}

export default connect(null, { sendEmail })(ContactForm);
