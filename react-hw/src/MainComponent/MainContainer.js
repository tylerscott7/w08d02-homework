import React, { Component } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

class MainContainer extends Component {
    state = {
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getNews();
    }
    render(){
        return (
        <Grid container columns={3} textAlign='center' verticalAlign='top'>
            <Grid.Column style={{maxWidth: 450}}>
                
            </Grid.Column>
            <Grid.Column style={{maxWidth: 450}}>
                <h4> Column 2 </h4>
                <Form onSubmit={this.props.getNews}>
                    <Button type="submit"></Button>
                </Form>
            </Grid.Column>
            <Grid.Column style={{maxWidth: 450}}>
                
            </Grid.Column>
        </Grid>
        )
    }
}


export default MainContainer;