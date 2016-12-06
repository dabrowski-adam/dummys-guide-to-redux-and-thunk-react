export function heroTurn() {
    return {
        type: 'HERO_TURN'
    };
}

export function heroInput(val, src) {
    return {
        type: 'HERO_HANDLE_' + src.toUpperCase(),
        value: val
    };
}

export function heroSend(text, name, email) {
    return (dispatch) => {
        dispatch(() => {
            return {type: 'HERO_SEND'};
        });
        fetch('https://formspree.io/form@adamdabrowski.com', {
            headers: {
                'Accept': 'application/json'
            },
            method: 'POST',
            data: {
                message: text,
                name: name,
                email: email
            }
        }).then((response) => {
            if (response.ok) {
                dispatch(() => {
                    return {type: 'HERO_SEND_DONE'};
                });
            } else {
                dispatch(() => {
                    return {type: 'HERO_SEND_ERROR'};
                });
            }
        }).catch(() => {
            dispatch(() => {
                return {type: 'HERO_SEND_ERROR'};
            });
        });
    };
}
