
function capitalize(str) {
    try{
    if (str === str){
        return str[0].toUpperCase() + str.slice(1);}
    }catch (err) {
       if (str === "" || !str || typeof str !=="string") {
        throw new Error("Input must be a string.");}
        }
}


function reverse(str) {
    try {
        if (str === str) {
    return str.toLowerCase().split("").reverse().join("");}
    }catch (err) {
       if (str === "" || !str|| typeof str !=="string") {
        throw new Error("Input must be a string.");}
        }
}


function contains(str, substr) {
    try {
        if (str === str) {
    return str.toLowerCase().includes(substr);}
    }catch (err) {
       if (str === "" || !str|| typeof str !=="string") {
        throw new Error("Input must be a string.");}
        }
}


console.log(capitalize("hello"));
console.log(reverse("hello"));
console.log(contains("hello world", "hello"));

module.exports = {capitalize, reverse, contains};