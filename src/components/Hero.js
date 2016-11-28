import linkedin from '../img/linkedin.svg';
import dribble from '../img/dribble.svg';
import github from '../img/github.svg';
import twitter from '../img/twitter.svg';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { heroTurn } from '../actions/hero';

class Hero extends Component {
    front = <div className="hero-card-front">
                <h1>Adam Dąbrowski</h1>
                <p>Software Developer</p>
                <ul className="hero-card-front-menu">
                    <li><a href="#">/contact</a></li>
                    <li><a href="#">/resume</a></li>
                    <li><a href="#">/portfolio</a></li>
                </ul>
                <ul className="hero-card-front-social">
                    <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
                    <li><a href="#"><img src={dribble} alt="Dribble" /></a></li>
                    <li><a href="#"><img src={github} alt="GitHub" /></a></li>
                    <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                </ul>
            </div>;
    back = <div className="hero-card-back">This is the back</div>;

    render() {
        return (
            <div className="hero">
                <div className="hero-card" onClick={() => this.props.turn(this.props.isTurned)}>
                    {this.props.isTurned ? this.back : this.front}
                </div>
            </div>);
    }
}


Hero.propTypes = {
    turn: PropTypes.func.isRequired,
    isTurned: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isTurned: state.heroIsTurned
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        turn: (isTurned) => dispatch(heroTurn(isTurned))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
