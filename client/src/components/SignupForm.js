import React, { Component } from 'react'
import './SignupForm.css'
import { Route, Link } from 'react-router-dom';




class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
        <div>
            <form method="POST" action="/users" >
                  <div class="ui form">
                    <div class="equal width fields">
                      <div class="field">
                        <label>Email</label>
                        <input name="email" type="email" placeholder="Email"></input>
                      </div>
                      <div class="field">
                        <label>Password</label>
                        <input name="password" type="password"></input>
                      </div>
                      <div class="field">
                        <label>Confirm Password</label>
                        <input name="passwordconfirmation" type="password"></input>
                      </div>
                    </div>
                    <div class="equal width fields">
                      <div class="field">
                        <label>First name</label>
                        <input name="firstname" type="text" placeholder="First Name"></input>
                      </div>
                      <div class="field">
                        <label>Last name</label>
                        <input name="lastname" type="text" placeholder="Last Name"></input>
                      </div>
                    </div>
                  </div>
                  <button type="submit" id="signup-button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Sign up
              </button>
              <div class="text-center p-t-136">

              <form>
                  <div>Already have an account?</div>
                  <Link class="txt2" to="/SigninForm">Log in</Link>
                  
             
               

              </form>

              </div>
            </form>
    
      </div>
    );
  }
}

export default SignupForm;