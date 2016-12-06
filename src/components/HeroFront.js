import linkedin from '../img/linkedin.svg';
import dribble from '../img/dribble.svg';
import github from '../img/github.svg';
import twitter from '../img/twitter.svg';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { heroTurn } from '../actions/hero';

class HeroFront extends Component {
    render() {
        return (
            <div className="hero-card-front">
                <h1>Adam Dąbrowski</h1>
                <p>Software Developer</p>
                <ul className="hero-card-front-menu">
                    <li><a href="#" onClick={() => this.props.turn()}>/contact</a></li>
                    <li><a href="#">/resume</a></li>
                    <li><a href="#">/portfolio</a></li>
                </ul>
                <ul className="hero-card-front-social">
                    <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
                    <li><a href="#"><img src={dribble} alt="Dribble" /></a></li>
                    <li><a href="#"><img src={github} alt="GitHub" /></a></li>
                    <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                </ul>
            </div>);
    }
}

HeroFront.propTypes = {
    turn: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        turn: () => dispatch(heroTurn())
    };
};

export default connect(null, mapDispatchToProps)(HeroFront);
