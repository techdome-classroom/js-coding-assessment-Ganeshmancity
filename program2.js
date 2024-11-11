const decodeTheRing = function (s, p) {
    const m = s.length;
    const n = p.length;

    // Create a 2D dp array, initialized to false
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // Base case: an empty pattern matches an empty string
    dp[0][0] = true;

    // Handle patterns that start with '*' as they can match an empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can match any sequence, so it inherits the value from the left or above
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                // '?' matches any single character, or characters match exactly
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    // The result is in the bottom-right cell of the dp array
    return dp[m][n];
};

module.exports = decodeTheRing;
