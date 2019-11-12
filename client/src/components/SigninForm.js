import React, { Component } from 'react'
import './SigninForm.css'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom';
import SignupForm from './SignupForm';



class SigninForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
        <div>
            <form method="post" action="/users/signin" >
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
                    </div>
                  </div>
                  <button type="submit" id="signup-button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Log in
              </button>
              <div class="text-center p-t-136">

                <form>
                    <div>Don't have an account?</div>
                    <Route path="/SignupForm" component={SignupForm} />
                    <Link class="txt2" to="/SignupForm">Sign up</Link>
                </form>

              </div>
            </form>
    
      </div>
    );
  }
}

export default SigninForm;