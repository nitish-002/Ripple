import { useState, useEffect } from 'react';
import Cell from './Cell';

interface RecursiveGridProps {
    onHireMeClick: () => void;
}

const RecursiveGrid = ({ onHireMeClick }: RecursiveGridProps) => {
    // Initialize grid from localStorage or default to 0s
    const [grid, setGrid] = useState<number[][]>(() => {
        const savedGrid = localStorage.getItem('recursive-grid-state');
        if (savedGrid) {
            try {
                return JSON.parse(savedGrid);
            } catch (e) {
                console.error("Failed to parse grid state", e);
            }
        }
        return Array(3).fill(null).map(() => Array(3).fill(0));
    });

    // Save to localStorage whenever grid changes
    useEffect(() => {
        localStorage.setItem('recursive-grid-state', JSON.stringify(grid));
    }, [grid]);

    const handleReset = () => {
        const newGrid = Array(3).fill(null).map(() => Array(3).fill(0));
        setGrid(newGrid);
        localStorage.removeItem('recursive-grid-state'); // Optional: clear storage or just update it
    };

    const handleBoxClick = (row: number, col: number) => {
        if (grid[row][col] >= 15) return;

        const newGrid = grid.map((r) => [...r]);

        newGrid[row][col] += 1;
        const newValue = newGrid[row][col];

        if (newValue % 3 === 0) {
            if (col + 1 < 3) {
                const rightNeighborValue = newGrid[row][col + 1];
                if (rightNeighborValue < 15) {
                    newGrid[row][col + 1] -= 1;
                }
            }
        }

        if (newValue % 5 === 0) {
            if (row + 1 < 3) {
                const bottomNeighborValue = newGrid[row + 1][col];
                if (bottomNeighborValue < 15) {
                    newGrid[row + 1][col] += 2;
                }
            }
        }

        setGrid(newGrid);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans relative">

            {/* Reset Button */}
            <button
                onClick={handleReset}
                className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors shadow-md font-medium"
            >
                Reset Grid
            </button>

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

            <button
                onClick={onHireMeClick}
                className="mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
                click here to be a billionaire
            </button>
        </div>
    );
};

export default RecursiveGrid;
