import { useState } from 'react';
import Cell from './Cell';

const RecursiveGrid = () => {
    // Initialize 3x3 grid with 0s
    const [grid, setGrid] = useState<number[][]>(
        Array(3).fill(null).map(() => Array(3).fill(0))
    );

    const handleBoxClick = (row: number, col: number) => {
        // 1. Check if the clicked box is already locked
        if (grid[row][col] >= 15) return;

        // Create a deep copy of the grid
        const newGrid = grid.map((r) => [...r]);

        // 2. Increment the clicked box
        newGrid[row][col] += 1;
        const newValue = newGrid[row][col];

        // 3. Ripple Logic
        // If divisible by 3, decrement the box to the RIGHT
        if (newValue % 3 === 0) {
            if (col + 1 < 3) { // Check boundary
                const rightNeighborValue = newGrid[row][col + 1];
                if (rightNeighborValue < 15) { // Check lock
                    newGrid[row][col + 1] -= 1;
                }
            }
        }

        // If divisible by 5, increment the box BELOW by 2
        if (newValue % 5 === 0) {
            if (row + 1 < 3) { // Check boundary
                const bottomNeighborValue = newGrid[row + 1][col];
                if (bottomNeighborValue < 15) { // Check lock
                    newGrid[row + 1][col] += 2;
                }
            }
        }

        setGrid(newGrid);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">Recursive Grid</h1>
            <div className="grid grid-cols-3 gap-4">
                {grid.map((row, rowIndex) =>
                    row.map((value, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            value={value}
                            onClick={() => handleBoxClick(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
            <p className="mt-8 text-gray-500 text-sm">
                Click items to increment. Watch for ripples!
            </p>
        </div>
    );
};

export default RecursiveGrid;
