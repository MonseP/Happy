/**
 * Created by Montserrat Plata Torres on 21/01/18.
 */

import React, { Component } from 'react';
import {Service} from './Service';
import Footer from '../footer/Footer';

class HomeService extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Service />
                <Footer/>

            </div>
        );
    }
}

export default HomeService;
