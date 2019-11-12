
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';


import UserForm from './components/UserForm';
import QuoteReview from './components/QuoteReview';
import Packages from './components/Packages';
import Company from './components/Company';
import Success from './components/Success';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }



    render() {

       
        return (
            <section  >
                  
                    <UserForm />
                    <Route path="/quote-review" component={QuoteReview} />
                    <Route path="/packages" component={Packages} />
                    <Route path="/company" component={Company} />
                    <Route path="/success" component={Success} />

            </section>
        )
    }
}


export default App;
