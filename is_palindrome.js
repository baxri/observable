

function isPalindrome(str){    
    return str.length > 1 && str == str.split('').reverse().join('');
}