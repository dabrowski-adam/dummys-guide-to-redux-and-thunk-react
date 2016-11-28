export function heroIsTurned(state = false, action) {
    switch (action.type) {
        case 'HERO_IS_TURNED':
            return action.isTurned;

        default:
            return state;
    }
}
