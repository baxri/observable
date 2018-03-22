
let strs = [
    'adgaagda',
    'ioatoyotatytest',
    'ISAPALINILAPASI',
    '2A3MEAS',
];

function isPalindrome(str){    
    return str.length > 1 && str == str.split('').reverse().join('');
}

strs.map( function(str) {
    console.log(isPalindrome(str))
 })
