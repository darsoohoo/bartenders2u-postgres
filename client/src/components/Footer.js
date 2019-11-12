import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    render() {
        return (
            <footer id="footer" class="mdl-mini-footer footer-padding">
            <div class="mdl-mini-footer__left-section">
                <div class="mdl-logo">Bartenders 2 U</div>
                <ul class="mdl-mini-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
                </ul>
            </div>
        </footer>
        );
    }
}


export default Footer;
