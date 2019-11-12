
import React, { Component } from 'react';

import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';



import { Route, Link } from 'react-router-dom';



class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            dateTime: '',
            datesRange: ''
            
            
        };
    }

    handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }



    render() {
        return (
                <div class="eventform">
                        

                    <form class="ui form" method="POST" action="/events/next/confirmation">
                        <h3 class="ui dividing header">Plan a unique experience</h3>

                       
                       <h5>When</h5>
                        <DateInput
                            name="eventdate"
                            placeholder="mm/dd/yyyy"
                            value={this.state.date}
                            iconPosition="left"
                            onChange={this.handleChange}
                            timeFormat="ampm"
                            />


                        <div class="two fields">
                            <TimeInput
                            name="starttime"
                            placeholder="Start Time"
                            value={this.state.time}
                            iconPosition="left"
                            onChange={this.handleChange}
                            />

                            <TimeInput
                            name="endtime"
                            placeholder="End Time"
                            value={this.state.time}
                            iconPosition="left"
                            onChange={this.handleChange}
                            />
                        </div>

                        <h5>Where</h5>
                        <input placeholder="2943 Washington Dr, San Francisco, CA"></input>

                        <a type="submit" id="next-button" to="/PackageSelection" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                            Next
                        </a>



                    </form>

                </div>
        );
    }
}


export default EventForm;