import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { heroTurn } from '../actions/hero';

class Hero extends Component {
    front = <p className="hero-card-front">This is the front</p>;
    back = <p className="hero-card-back">This is the back</p>;

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
