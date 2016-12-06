import _ from 'ramda';

export function heroCard(state = false, action) {
    switch (action.type) {
        case 'HERO_TURN':
            return !state;

        default:
            return state;
    }
}

export function heroForm(state = { text: '', name: '', email: '', status: 'READY' }, action) {
    switch (action.type) {
        case 'HERO_HANDLE_TEXT':
            return _.merge(state, {text: action.value});
        case 'HERO_HANDLE_NAME':
            return _.merge(state, {name: action.value});
        case 'HERO_HANDLE_EMAIL':
            return _.merge(state, {email: action.value});

        case 'HERO_SEND':
            return _.merge(state, {status: 'WAITING'});
        case 'HERO_SENT':
            return _.merge(state, {status: 'SUCCESS'});
        case 'HERO_SEND_ERROR':
            return _.merge(state, {status: 'FAILURE'});

        default:
            return state;
    }
}
