# Recursion Assignment

## Task 1: Check if a String is a Palindrome

### Overview
This task involves writing a recursive function to determine whether a given string `s` is a palindrome.

### Function:
The function `isPalindrome(s)` takes a string `s` as input and returns true if `s` is a palindrome (reads the same forwards and backwards), and false otherwise.

### Usage:
To use the `isPalindrome` function:
1. Ensure you have `task1.js` included in your project.
2. Call the function `isPalindrome(s)` with the string `s` that you want to check.

### Example:
Input: s = "madam"
Output: true

Input: s = "adam"
Output: false

Input: s = "tenet"
Output: true

### Time Complexity:
The time complexity of `isPalindrome(s)` is O(n), where n is the length of the string `s`. This is because each recursive call reduces the string size by 2 until the base case is reached.

### Space Complexity:
The space complexity of `isPalindrome(s)` is O(n), due to the recursion stack potentially reaching a depth of n/2 in the worst case.

## Task 2: Multiply Two Integers Without Using *

### Overview
In this task, the goal is to write a recursive function to multiply two positive integers `a` and `b` without using the * operator.

### Function:
The function `multiply(a, b)` takes two positive integers `a` and `b` as input and returns their product using only the + and - operators.

### Usage:
To use the `multiply` function:
1. Ensure you have `task2.js` included in your project.
2. Call the function `multiply(a, b)` with the integers `a` and `b` that you want to multiply.

### Example:
Input: a = 4, b = 5
Output: 20

Input: a = 3, b = 3
Output: 9

Input: a = 0, b = 2
Output: 0

### Time Complexity:
The time complexity of `multiply(a, b)` is O(b), where b is the value of the second integer `b`. This is because the function makes `b` recursive calls, each reducing `b` by 1.

### Space Complexity:
The space complexity of `multiply(a, b)` is O(b), due to the recursion stack potentially reaching a depth of `b` in the worst case.

