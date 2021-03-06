import React from 'react';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Sakina</span>
                </h1>
                <p className="h-sub-text">
                  Front End Developer
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon fb" href="https://www.instagram.com/invites/contact/?i=7m8036j1iud8&utm_content=mfch1w6" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" href="https://github.com/Mmmsva"/>
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/in/sakina-mammadova-023562206/" className="icon gh" />
                    </Link>
                    

                </div>
            </header>
        </div>
    )
}

export default HomePage;