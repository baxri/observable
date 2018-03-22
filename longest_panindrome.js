let strs = [
    'sssadgaagds',
    'ioatoyotatytest',
    'ISAPALINILAPASI',
    '2A3MEAS',
];

// Recursive method
function longestPalindromeRecursive(str, pal = ''){
    if(str.length < 2) return (pal.length == 0) ? ':( Palindrome string not found': pal;
    for(let j = 1; j <= str.length; j++)       
        if(isPalindrome(str.slice(0, j)) && str.slice(0, j).length > pal.length){
            pal = str.slice(0, j);        
        }
    return longestPalindromeRecursive(str.slice(1, str.length), pal);
}

// Double for
function longestPalindrome(str){
    let length = str.length, pal = '';
    for(let i = 0; i < str.length; i++){
        let string = str.slice(i, length);
        for(let j = 1; j <= string.length; j++){
            let sliced = string.slice(0, j);
            if(isPalindrome(sliced) && sliced.length > pal.length)  pal = sliced;
        }        
    }
    return pal.length == 0 ? ':( Palindrome string not found' : pal;
}

function isPalindrome(str){    
    return str.length > 1 && str == str.split('').reverse().join('');
}

strs.map( function(str) {
   console.log(longestPalindromeRecursive(str))
})