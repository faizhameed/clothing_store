import React, { Component } from 'react';
import './sign-in.styles.scss'

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
                    <input type="email" value={this.state.email} name="email" 
                    onChange={this.handleChange}
                    required/>
                    <label>Email</label>
                    <input 
                    type="password" 
                    value={this.state.password} 
                    name="password" 
                    required
                    onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input type="submit" name="Submit Form" value="Submit Form"/>
                </form>

            </div>
        )
    }
}
export default SignIn;