/**
 * Function to check if a string is a palindrome using recursion.
 * @param {string} s - The input string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(s) {
    // Base case: if the string has 0 or 1 characters, it's a palindrome
    if (s.length <= 1) {
        return true;
    }
    
    // Recursive case: compare first and last characters
    if (s[0] === s[s.length - 1]) {
        // Recursively check the substring excluding the first and last characters
        return isPalindrome(s.substring(1, s.length - 1));
    } else {
        return false;
    }
}

// Example usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("adam"));  // Output: false
console.log(isPalindrome("tenet")); // Output: true
/**
 * Time Complexity: O(n), where n is the length of the string s. Each recursive call reduces the string size by 2 until the base case is reached.
 * 
 * Space Complexity: O(n), due to the recursion stack potentially reaching a depth of n/2 in the worst case.
 */