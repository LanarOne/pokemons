export function randomItg(min, max){
    const random = Math.ceil(Math.random()*(max-min)+min);
    return random;
}
