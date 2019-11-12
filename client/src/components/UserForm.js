import React, { Component } from 'react'
import When from './When'
import Where from './Where'
import PackageSelection from './PackageSelection'
import QuoteReview from './QuoteReview'
import './UserForm.css'
import Success from './Success'




export class UserForm extends Component {
    state = {
        levels: [],
        step: 1,
        date: '',
        startTime: '',
        endTime: '',
        address: '',
        venueName: '',
        selectedPackage: '',
        packagePrice: '',
        eventSize: '',
        eventType: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''

    }


    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }



  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


    /*  // INACTIVE
    submitHandler = event => {
        event.preventDefault();
  
     
          let date = this.state.date
          let firstname = this.state.firstName
       

        const body = JSON.stringify({ date, firstname });

        axios
        .post('/submit-request', body )
        .then(res => {
            console.log(res);
            console.log(res.data);
        });
    };
    */
  




  render() {
    const { step } = this.state;
    const { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber } = this.state;
    const values = { date, startTime, endTime, address, venueName, selectedPackage, packagePrice, eventSize, eventType, firstName, lastName, email, phoneNumber };
    const imgUrlCity = require('../images/city.jpg')
    const imgUrlRooftop = require('../images/rooftop.jpg')
    switch (step) {
      case 1:
        return (
            <main className="site content mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header"
            style={{  backgroundImage: "url(" + imgUrlCity + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
                <div class="container">
                <h4>We bring the party to you</h4>

                    <div id="frontpage-jumbotron" class="jumbotron">    
                        
                                <When
                                    nextStep={this.nextStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                    </div>
                </div>
            </main>
        );
      case 2:
        return (
            <main className="site content mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header"
            style={{  backgroundImage: "url(" + imgUrlCity + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
                <div class="container">
                <h4>We bring the party to you</h4>

                    <div id="frontpage-jumbotron" class="jumbotron">    
                            
                                <Where
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                    
                    </div>
                </div>
            </main>
        );
      case 3:
        return (
            <main className="site content mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header"
            style={{  backgroundImage: "url(" + imgUrlCity + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
                <div class="container">
                <h2>We bring the party to you</h2>

                    <div id="frontpage-jumbotron" class="jumbotron">    
                         
                                <PackageSelection
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values}
                                />
                        
                    </div>
                </div>
            </main>
        );
      case 4:
           
        return (
            
            <main className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--fixed-header"
            style={{  backgroundImage: "url(" + imgUrlRooftop + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>


                <div id="packages-container" >
                <h2>We bring the party to you</h2>
                   
                    <div id="services-jumbotron" class="jumbotron">    
                        <QuoteReview
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            submitHandler={this.submitHandler}
                            values={values}/>
                    </div>
                </div>
                 
            </main>
           
        );
        case 5:
            return <Success/>
    }
  }
}

export default UserForm;
