import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form.input.component';
import CustomButton from '../custom-button/custom.button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.setState({email:'', password:''})
    }
    handleChange =e=>{
        const {name, value}= e.target;
        this.setState({
            [name]:value 
        })
    }
    render() {
        return (
            <div className='sign-in'>
              <h2>I Already Have an Account</h2>
              <span>Sign in with your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" 
                    value={this.state.email} 
                    name="email" 
                    label = 'E-Mail'
                    handleChange={this.handleChange}
                    required/>
                    <FormInput 
                    type="password" 
                    value={this.state.password} 
                    name="password" 
                    label="Password"
                    required
                    handleChange={this.handleChange}
                    />
                    <CustomButton  type="submit" name="Submit Form">Sign In</CustomButton>
                  <CustomButton  onClick ={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
                </form>

            </div>
        )
    }
}
export default SignIn;