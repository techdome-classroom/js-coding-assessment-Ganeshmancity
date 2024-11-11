const getTotalIsles = function (grid) {
    // Define the numIslands function
    function numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        const rows = grid.length;
        const cols = grid[0].length;
        let islandCount = 0;

        function dfs(r, c) {
            // Boundary check and ensure the cell is part of an island
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 'W') {
                return;
            }

            // Mark the cell as visited by setting it to 'W'
            grid[r][c] = 'W';

            // Explore the four possible directions
            dfs(r + 1, c); // down
            dfs(r - 1, c); // up
            dfs(r, c + 1); // right
            dfs(r, c - 1); // left
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 'L') {
                    dfs(r, c); // Start DFS for the new island
                    islandCount++; // Increment island count
                }
            }
        }

        return islandCount;
    }

    // Call numIslands and return the result
    return numIslands(grid);
};

module.exports = getTotalIsles;
