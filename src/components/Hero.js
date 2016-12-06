import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import HeroFront from './HeroFront';
import HeroBack from './HeroBack';

class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero-card">
                    {this.props.isTurned ? <HeroBack /> : <HeroFront />}
                </div>
            </div>);
    }
}


Hero.propTypes = {
    isTurned: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isTurned: state.heroCard
    };
};

export default connect(mapStateToProps, null)(Hero);
