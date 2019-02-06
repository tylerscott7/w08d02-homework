import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

export class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleInput = (e) => {
        this.setState({
            username: e.target.name,
            password: e.target.name
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state.username)
    }
    render() {
        return (
            <Grid container columns={1} textAlign='center' verticalAlign='middle' style={{height: '100%'}}>
            <Grid.Column style={{maxWidth: 450}} >
                <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input fluid icon='user' iconPosition='left' type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder="username"/>
                    <Form.Input fluid icon="lock" iconPosition="left" type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder="password"/>
                    <Button color="green" fluid size="large" type="Submit">Login </Button>
                </Form>
                </Segment>
            </Grid.Column>
            </Grid>
        )
  }
}

export default Login
