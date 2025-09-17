export default function buatCounter() {
    let counter = 0;
    return function() {
        return "ID-" + (++counter);
    };
}
export const PREFIX = "ID";
export const START_NUMBER = 1;
