# DFS Maze Generation

A maze generator built with **p5.js** using **Depth-First Search (DFS)** and the **recursive backtracking** algorithm.

The program starts from the top-left cell and explores random unvisited neighboring cells. As it moves, it removes walls between connected cells. When it reaches a dead end, it backtracks through previously visited cells until it finds another available path.

This continues until every cell in the grid has been visited, producing a fully connected maze.

## Features

* Depth-First Search maze generation
* Recursive backtracking using a stack
* Randomized maze layouts
* Fully connected maze with every cell reachable
* Adjustable maze generation speed
* Optional visualization of visited cells
* Optional highlighting of the current cell
* Automatically fills the browser window

## How It Works

Each cell stores:

* Its grid position
* Four walls: top, right, bottom, and left
* Whether it has been visited

The algorithm follows these steps:

1. Start at the top-left cell.
2. Mark the current cell as visited.
3. Find all neighboring cells that have not been visited.
4. Choose one randomly.
5. Push the current cell onto the stack.
6. Remove the walls between the current cell and the chosen neighbor.
7. Move to the neighbor.
8. If there are no unvisited neighbors, backtrack by popping a cell from the stack.
9. Repeat until the stack is empty and no unvisited neighbors remain.

Because each new cell is connected to an already visited cell, every cell in the final maze is reachable.

## Visualization Settings

The following variables can be changed at the top of the sketch:

```js
let highlightCurrent = false;
let showVisited = false;
let frameRateValue = 1000;
```

### `highlightCurrent`

Highlights the cell currently being processed by the algorithm.

```js
let highlightCurrent = true;
```

### `showVisited`

Displays previously visited cells in a different color.

```js
let showVisited = true;
```

### `frameRateValue`

Controls how quickly the maze generation animation runs.

```js
let frameRateValue = 60;
```

Lower values make the generation easier to observe, while higher values generate the maze more quickly.

## Grid Size

The size of each maze cell is controlled by:

```js
let a = 50;
```

Reducing this value creates more cells and a larger maze.

For example:

```js
let a = 25;
```

will create roughly four times as many cells on the same canvas compared with `a = 50`.

## Technologies

* JavaScript
* p5.js
* Depth-First Search
* Recursive Backtracking

## Algorithm

The project uses an iterative implementation of recursive backtracking with a stack:

```text
Start
  ↓
Mark current cell as visited
  ↓
Find unvisited neighbors
  ↓
 ┌──────────── Yes ────────────┐
 ↓                            │
Choose random neighbor         │
Push current onto stack        │
Remove connecting walls        │
Move to neighbor ──────────────┘

If no neighbor exists:
  ↓
Pop previous cell from stack
  ↓
Continue searching

If stack is empty:
  ↓
Maze complete
```

The generated maze is a **perfect maze**, meaning there is exactly one path between any two cells.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/dfs-maze-generation.git
```

Open the project using a local development server or the p5.js web editor.

If running locally, make sure the p5.js library is included in your HTML file.

## Purpose

This project was created to practice implementing graph traversal algorithms visually and to better understand how Depth-First Search and backtracking can be applied to procedural maze generation.

## License

This project is available for educational and personal use.
