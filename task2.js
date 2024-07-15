/**
 * Function to multiply two positive integers using recursion.
 * @param {number} a - The first positive integer.
 * @param {number} b - The second positive integer.
 * @returns {number} - The product of a and b.
 */
function multiply(a, b) {
    // Base case: if b is 0, return 0
    if (b === 0) {
        return 0;
    }
    
    // Recursive case: add 'a' repeatedly 'b' times
    return a + multiply(a, b - 1);
}

// Example usage:
console.log(multiply(4, 5)); // Output: 20
console.log(multiply(3, 3)); // Output: 9
console.log(multiply(0, 2)); // Output: 0
/**
 * Time Complexity: O(b), where b is the value of the second integer b. The function makes b recursive calls, each reducing b by 1.
 * 
 * Space Complexity: O(b), due to the recursion stack potentially reaching a depth of b in the worst case.
 */