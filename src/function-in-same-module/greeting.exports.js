export function getPlanet () {
    return 'world';
}

export default function getGreeting () {
    return `hello ${exports.getPlanet()}!`;
}