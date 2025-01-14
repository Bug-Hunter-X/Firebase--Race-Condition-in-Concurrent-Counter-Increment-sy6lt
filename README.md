# Firebase Concurrent Counter Increment Bug

This repository demonstrates a race condition bug in a Firebase counter increment function and its solution.  The bug arises when multiple clients concurrently attempt to increment the same counter, leading to inaccurate results.

## Bug Description

The `incrementCounter` function uses a simple get-then-update approach.  However, if multiple clients execute this function simultaneously, they might all read the same counter value before any of them has a chance to update it. This results in multiple updates with the same base value, causing the counter to increment less than the actual number of increments.

## Solution

The solution involves utilizing Firebase's atomic operations, specifically `increment()`, to ensure thread-safe counter updates.  This eliminates race conditions and guarantees accurate counts, even with concurrent access.

## Setup

1.  Ensure you have Node.js and npm installed.
2.  Install Firebase: `npm install firebase`
3.  Configure your Firebase project and replace placeholders in the code with your project configuration.
4.  Run the code (bug.js and bugSolution.js) to observe the erroneous and correct behaviour respectively.
