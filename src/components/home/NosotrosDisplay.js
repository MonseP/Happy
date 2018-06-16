/**
 * Created by Montserrat Plata Torres on 21/01/18.
 */
import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const NosotrosDisplay = () => {

    return (
        <div id="nosotros" className="nosotros">
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
            <div className="nos_texto">
                <h2 className="desaper"> </h2>
                <h2 className="desaper"> </h2>
                <h2 className="apere"></h2>
                <p className="texto">

                </p>
                <p className="texto">¿?</p>
                <br/>
                <Link to="/catalogo">
                    <button className="btn_explore"></button>
                </Link>
            </div>
            </Parallax>
        </div>
    );
}
