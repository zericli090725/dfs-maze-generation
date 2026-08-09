// MAZE GENERATION
// DEPTH FIRST SEARCH
// RECURSIVE BACKTRACKER

let highlightCurrent = false; // change this value to control whether to highlight the current cell or not
let showVisited = false; // change this value to control whether to show visited cells or not
let frameRateValue = 1000; // change this value to control the speed of the maze generation
let saveImage = true; // change this value to control whether to save the maze as an image or not
///////////////////////////////////////////////////////////////////////////////////////////////////
///////// GLOBAL /////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

let cols, rows;
let a = 50;
let cells = [];
let current;
let stack = [];

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    // check if the cell is out of bounds
    return -1;
  }

  return i + j * cols;
}

function Cell(i, j) {
  this.i = i;
  this.j = j;

  this.walls = [true, true, true, true]; // top, right, bottom, left
  this.visited = false;

  this.checkNeighbors = function () {
    let neighbors = [];

    let top = cells[index(i, j - 1)];
    let right = cells[index(i + 1, j)];
    let bottom = cells[index(i, j + 1)];
    let left = cells[index(i - 1, j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }

    if (right && !right.visited) {
      neighbors.push(right);
    }

    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }

    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  };

  this.highlight = function () {
    let x = this.i * a;
    let y = this.j * a;

    noStroke();

    // warm gold highlight
    fill(255, 190, 80, 220);

    rect(x, y, a, a);
  };

  this.show = function () {
    let x = this.i * a;
    let y = this.j * a;

    // visited cell fill
    if (this.visited && showVisited) {
      noStroke();

      // soft teal
      fill(47, 158, 157, 90);

      rect(x, y, a, a);
    }

    // maze walls
    stroke(220, 230, 240, 220);
    strokeWeight(1.5);
    noFill();

    if (this.walls[0]) {
      line(x, y, x + a, y); // top
    }

    if (this.walls[1]) {
      line(x + a, y, x + a, y + a); // right
    }

    if (this.walls[2]) {
      line(x + a, y + a, x, y + a); // bottom
    }

    if (this.walls[3]) {
      line(x, y + a, x, y); // left
    }
  };
}

function removeWalls(a, b) {
  let x = a.i - b.i;

  if (x === 1) {
    a.walls[3] = false; // remove left wall of a
    b.walls[1] = false; // remove right wall of b
  } else if (x === -1) {
    a.walls[1] = false; // remove right wall of a
    b.walls[3] = false; // remove left wall of b
  }

  let y = a.j - b.j;

  if (y === 1) {
    a.walls[0] = false; // remove top wall of a
    b.walls[2] = false; // remove bottom wall of b
  } else if (y === -1) {
    a.walls[2] = false; // remove bottom wall of a
    b.walls[0] = false; // remove top wall of b
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////// SETUP //////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
  frameRate(frameRateValue);

  createCanvas(windowWidth, windowHeight);

  cols = floor(width / a);
  rows = floor(height / a);

  for (let jj = 0; jj < rows; jj++) {
    for (let ii = 0; ii < cols; ii++) {
      let cell = new Cell(ii, jj);
      cells.push(cell);
    }
  }

  current = cells[0];
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////// DRAW ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function draw() {
  // deep navy background
  background(8, 15, 28);

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    cell.show();
  }

  current.visited = true;

  let neighbor = current.checkNeighbors();

  if (neighbor) {
    stack.push(current);

    neighbor.visited = true;

    removeWalls(current, neighbor);

    current = neighbor;

    if (highlightCurrent) {
      current.highlight();
    }
  } else if (stack.length > 0) {
    current = stack.pop();

    if (highlightCurrent) {
      current.highlight();
    }
  } else {
    if (saveImage) {
      save('maze.png');
    }
    noLoop();
  }
}