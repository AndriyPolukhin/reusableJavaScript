function solve(sequence, maze) {
    const rows = maze.length;
    const cols = maze[0].length;

    const colors = (function* (i = 0) {
        while (true)
            yield sequence[i++ % sequence.length];
    }());

    let paths = maze[rows - 1]
        .map((_, j) => ({
            i: rows - 1,
            j: j,
            prev: null
        }))

    for (let color of colors) {
        color;
        paths = paths
            .filter(path =>
                path.i < rows &&
                path.i >= 0 &&
                path.j < cols &&
                path.j >= 0
            )
            .filter(path => maze[path.i][path.j] === color)
            .reduce((acc, path) =>
                acc.concat(
          [
                        {
                            di: 1,
                            dj: 0
                        },
                        {
                            di: -1,
                            dj: 0
                        },
                        {
                            di: 0,
                            dj: -1
                        },
                        {
                            di: 0,
                            dj: 1
                        }
          ]
                    .map(dir =>
                        ({
                            i: path.i + dir.di,
                            j: path.j + dir.dj,
                            prev: path
                        })
                    )
                ), []);

        const firstRowPaths = paths.filter(path => path.i === 0);
        if (firstRowPaths.length) return firstRowPaths[0];
    }
}



const sequence = ['O', 'G'];
const maze = [
  ['B', 'O', 'R', 'O', 'Y'],
  ['O', 'R', 'B', 'G', 'R'],
  ['B', 'O', 'G', 'O', 'Y'],
  ['Y', 'G', 'B', 'Y', 'G'],
  ['R', 'O', 'R', 'B', 'R']
]

function printPathInMaze(maze, paths) {
    const blank = Array(maze.length).fill('_').map(() => Array(maze[0].length).fill('_'))

    function helper(node) {
        blank[node.i][node.j] = maze[node.i][node.j];
        if (node.prev) {
            helper(node.prev);
        }
    }

    helper(paths);
    return blank;
}


const path = solve(sequence, maze);
const m = printPathInMaze(maze, path);
console.log(m);
