export function heroTurn(isTurned) {
    return {
        type: 'HERO_IS_TURNED',
        isTurned: !isTurned
    };
}
