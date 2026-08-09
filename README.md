# DFS Maze Generation

A maze generator built with **p5.js** using **Depth-First Search (DFS)** and an iterative implementation of the **recursive backtracking** maze-generation algorithm.

The program starts from the top-left cell and explores random unvisited neighboring cells. As it moves, it removes walls between connected cells. When it reaches a dead end, it backtracks through previously visited cells using a stack until it finds another available path.

This process continues until every cell in the grid has been visited, producing a fully connected **perfect maze**. The completed maze can also be automatically saved as a PNG image.

## Features

* Depth-First Search maze generation
* Recursive backtracking implemented with a stack
* Randomized maze layouts
* Perfect maze generation with exactly one path between any two cells
* Adjustable maze generation speed
* Optional visualization of visited cells
* Optional highlighting of the current cell
* Optional automatic PNG export when generation finishes
* Dark-themed visualization
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
4. Choose one of the unvisited neighbors randomly.
5. Push the current cell onto the stack.
6. Remove the walls between the current cell and the chosen neighbor.
7. Move to the chosen neighbor.
8. If there are no unvisited neighbors, backtrack by popping a previous cell from the stack.
9. Repeat until the stack is empty and no unvisited neighbors remain.
10. Optionally save the completed maze as an image.

Because every newly visited cell is connected to a cell that has already been visited, the final maze remains fully connected.

Since the algorithm never creates additional connections between already visited cells, the generated maze contains no loops. This makes it a **perfect maze**, meaning there is exactly one path between any two cells.

## Visualization

The maze uses a dark visual theme designed to make the generation process easy to follow.

* The background uses a dark navy color.
* Maze walls use a soft white color.
* Visited cells can be displayed with a teal overlay.
* The current cell can be highlighted in gold.
* The final maze can be exported as a PNG image.

## Settings

The following variables can be changed at the top of the sketch:

```js
let highlightCurrent = false;
let showVisited = false;
let frameRateValue = 1000;
let saveImage = true;
```

### `highlightCurrent`

Controls whether the cell currently being processed is highlighted.

```js
let highlightCurrent = true;
```

When enabled, the current cell is displayed with a gold highlight.

### `showVisited`

Controls whether previously visited cells are displayed with a colored overlay.

```js
let showVisited = true;
```

When enabled, visited cells are shown with a teal overlay.

### `frameRateValue`

Controls how quickly the maze-generation process runs.

```js
let frameRateValue = 60;
```

Lower values make the generation easier to observe, while higher values allow the algorithm to progress more quickly.

### `saveImage`

Controls whether the completed maze is automatically saved as an image.

```js
let saveImage = true;
```

When enabled, the maze is exported as:

```text
maze.png
```

once generation is complete.

Set it to `false` to disable automatic image saving:

```js
let saveImage = false;
```

## Grid Size

The size of each maze cell is controlled by:

```js
let a = 50;
```

Reducing this value creates smaller cells and therefore increases the number of cells in the maze.

For example:

```js
let a = 25;
```

will create roughly four times as many cells on the same canvas compared with `a = 50`.

Increasing the value creates fewer, larger cells.

## Technologies

* JavaScript
* p5.js
* Depth-First Search
* Recursive Backtracking
* Stack-based traversal
* Procedural generation

## Algorithm

The project uses an iterative implementation of recursive backtracking with a stack:

```text
Start
  ↓
Mark current cell as visited
  ↓
Find unvisited neighbors
  ↓
 ┌──────────── Yes ─────────────┐
 ↓                              │
Choose random neighbor          │
Push current cell onto stack    │
Remove connecting walls         │
Move to neighbor ───────────────┘

If no unvisited neighbor exists:
  ↓
Pop previous cell from stack
  ↓
Continue searching

If the stack is empty:
  ↓
Maze complete
  ↓
Optionally save maze.png
```

The stack stores previously visited cells so the algorithm can return to earlier positions whenever it reaches a dead end.

## Perfect Maze Property

The generated maze is a **perfect maze**.

A perfect maze has:

* No loops
* No isolated sections
* Every cell reachable from every other cell
* Exactly one path between any two cells

This happens because each unvisited cell is connected to the existing maze exactly once.

## Image Export

When maze generation is finished, the program can automatically export the canvas using p5.js:

```js
if (saveImage) {
  save("maze.png");
}
```

This makes it easy to keep randomly generated maze layouts as standalone images.

Because every run chooses neighboring cells randomly, each exported maze can have a different layout.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/dfs-maze-generation.git
```

Open the project using a local development server or the p5.js Web Editor.

If running locally, make sure the p5.js library is included in your HTML file.

## Purpose

This project was created to practice implementing graph traversal algorithms visually and to better understand how **Depth-First Search** and **backtracking** can be applied to procedural maze generation.

It also demonstrates how a stack can implement backtracking without relying on recursive function calls, while providing configurable visualization and image-export features for exploring the generated results.

## License

This project is available for educational and personal use.
