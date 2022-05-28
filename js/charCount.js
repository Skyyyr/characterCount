/**
 * @param {string} word A given string that contains lower case letters, and may have repeated characters within the string
 * @returns A sorted array of each unique letter, and the amount of occurrences within the given string ordered from highest to lowest occurrences
 */
exports.charCount = function(word) {
    /**
     * @param wordToObject This is our object that we use to use to store data as we iterate over the given string and record each unique letter.
     */
    const wordToObject = {};

    // We can iterate over each character within the given string
    for (let i in word) {
        /**
         * @param char This is the current character within the given string
         */
        const char = word[i];

        // If we are dealing with whitespace, skip it
        if (char === ' ') { continue; }

        // Record the char in our object, (if char exists use it's value otherwise the value is 0) + 1
        wordToObject[char] = (wordToObject[char] || 0) + 1;
    }

    /**
     * @param nested_list This is our object broken down into an array with each element being an array containing it's key and value
     */
    const nested_list = Object.entries(wordToObject);
    
    /**
     * @param sortedEntries We take our nested list and sort it. Highest value first, if a tie then alphabetically ordered
     */
    const sortedEntries = nested_list.sort(function(a, b) {
        // We need to specify our sorting
        if (a[1] === b[1]) {
            //If the iteration amt is the same, alphabetical (We will never get the same letter because we are tracking each unique letter)
            if (a[0] > b[0]) { 
                return 1; 
            } else { 
                return -1; 
            }
        }
        else if (a[1] > b[1]) { return -1; }
        else if (a[1] < b[1]) { return 1; }
    })

    // Return the sorted array
    return sortedEntries
};