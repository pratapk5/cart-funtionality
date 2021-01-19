import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.scss';
import { withRouter } from 'react-router';

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }

handleChange=(e)=>{
    this.setState({ [e.target.name] : e.target.value});
}

onSubmit=()=> {
    const {email, password} = this.state;

    if(email && password) {
        this.props.history.push('/dashboard')
    }
}

render() {
  return (
      <div className='login'>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" value={this.state.password} onChange={this.handleChange}/>
            </FormGroup>
            <Button> Submit</Button>
        </Form>
      </div>
  );
}
}

export default withRouter(LoginContainer);