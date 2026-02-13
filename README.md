# Recursive Grid

A minimal, interactive 3x3 grid game built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎮 Game Logic & Features

The grid consists of 9 cells (3x3), all initialized to `0`. Clicking a cell increments its value by `1` and triggers specific ripple effects based on the new value.

### Interactions
-   **Click**: Increments the cell's value by `1`.
-   **Locking**: If a cell reaches a value of **15 or higher**, it becomes **LOCKED**.
    -   Locked cells turn **Red**.
    -   Locked cells cannot be clicked.
    -   Locked cells cannot be modified by ripple effects from neighbors.

### Ripple Effects
After a cell is incremented, it checks its new value:
1.  **Divisible by 3**: Decrements the **Right Neighbor** by `1` (if it exists and is not locked).
2.  **Divisible by 5**: Increments the **Bottom Neighbor** by `2` (if it exists and is not locked).

*Note: Ripple effects do not chain recursively in a single turn; they only affect immediate neighbors based on the clicked cell's new value.*

### 🎨 Styling Rules (Tailwind CSS)
-   **Even Numbers**: Light Gray background (`#e0e0e0`) with Black text.
-   **Odd Numbers**: Navy Blue background (`#1a237e`) with White text.
-   **Locked (≥15)**: Red background (`bg-red-600`) with White text.
-   **UI Details**:
    -   Rounded corners (`4px`).
    -   Hard shadow (`2px 2px 0px black`).
    -   Centered layout.
    -   Hover brightness and click scale animations.

## 🛠️ Tech Stack
-   [React](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Vite](https://vitejs.dev/)
