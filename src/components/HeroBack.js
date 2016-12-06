import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { heroTurn, heroInput, heroSend } from '../actions/hero';

class HeroBack extends Component {
    render() {
        const { turn, handle, text, email, name, send, status} = this.props;


        return (
            <div className="hero-card-back">
                <form action="https://formspree.io/form@adamdabrowski.com" method="POST">
                    <fieldset>
                        <textarea onChange={(e) => handle(e.target.value, 'TEXT')} value={text} name="message" placeholder="Say hello! :)" />
                        <input onChange={(e) => handle(e.target.value, 'NAME')} value={name} type="text" name="name" placeholder="Your name" />
                        <input onChange={(e) => handle(e.target.value, 'EMAIL')} value={email}type="email" name="_replyto" placeholder="Your email" />
                        <input onClick={() => send(text, name, email)} type="submit" value="Send" />
                        <input type="text" name="_gotcha" style={{display: 'none'}} />
                    </fieldset>
                </form>
                <a href="#" onClick={() => turn()}>»FLIP«</a>
            </div>
        );
    }
}

HeroBack.propTypes = {
    turn: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    handle: PropTypes.func.isRequired,
    send: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
    return {
        text: state.heroForm.text,
        name: state.heroForm.name,
        email: state.heroForm.email,
        status: state.heroForm.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        turn: () => dispatch(heroTurn()),
        handle: (val, src) => dispatch(heroInput(val, src)),
        send: (text, name, email) => dispatch(heroSend(text, name, email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroBack);
