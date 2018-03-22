## Palindrome

Palindrome methods in Javascript

# isPalindrome

Simple function in javascript to check if string is palindrome or not

```javascript
    function isPalindrome(str){    
        return str.length > 1 && str == str.split('').reverse().join('');
    }
```