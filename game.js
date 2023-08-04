let board;
var aim
var end=0;
// 初始化游戏面板
function initBoard() {
    end=0;
    board = new Array(4);
    aim=document.getElementById("aim").value;
    document.getElementById("gameOver").style.display = "none";
    for (let i = 0; i < 4; i++) {
        board[i] = new Array(4);
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }

    generateRandomTile(2);
    generateRandomTile(2);
    updateBoard();
}
function hasEmptyTile() {
    
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) {
                return true;
            }
        }
    }
    return false;
}
// 在随机位置生成方块
function generateRandomTile(value) {
    if (!hasEmptyTile()) {
        document.getElementById("gameOver").style.display = "block";
        // 没有空位置，结束函数或抛出错误提示
        end=1;
        document.getElementById("gameOver").innerHTML = "废物!";
        return;
    }
    let row, col;
    do {
        row = Math.floor(Math.random() * 4);
        col = Math.floor(Math.random() * 4);
    } while (board[row][col] !== 0);

    board[row][col] = value;
}

// 更新游戏面板
function updateBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(board[i][j] >= aim) {
                document.getElementById("gameOver").style.display = "block";
                end=2;
                document.getElementById("gameOver").innerHTML = "赢赢赢!";
            }
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.innerHTML = board[i][j] === 0 ? "" : board[i][j];
            boardDiv.appendChild(tile);
        }
        boardDiv.appendChild(document.createElement("div")).className = "row";
    }
    switch (end){
        case 0:
            break;
        case 1:
            setTimeout(function() {
                window.alert("废物!");
              }, 1000); // 延迟1秒后执行alert
            break;
        case 2:
            setTimeout(function() {
                window.alert("赢赢赢！");
              }, 1000); // 延迟1秒后执行alert
            break;
    }

}

// 移动方块
function moveTiles(direction) {
    let moved = false;

    if (direction === "left") {
        for (let row = 0; row < 4; row++) {
            for (let col = 1; col < 4; col++) {
                if (board[row][col] !== 0) {
                    let i = col;
                    while (i > 0 && board[row][i - 1] === 0) {
                        board[row][i - 1] = board[row][i];
                        board[row][i] = 0;
                        i--;
                        moved = true;
                    }

                    if (i > 0 && board[row][i - 1] === board[row][i]) {
                        board[row][i - 1] *= 2;
                        board[row][i] = 0;
                        moved = true;
                    }
                }
            }
        }
    }
    else if (direction === "right") {
        for (let row = 0; row < 4; row++) {
            for (let col = 2; col >= 0; col--) {
                if (board[row][col] !== 0) {
                    let i = col;
                    while (i < 3 && board[row][i + 1] === 0) {
                        board[row][i + 1] = board[row][i];
                        board[row][i] = 0;
                        i++;
                        moved = true;
                    }

                    if (i < 3 && board[row][i + 1] === board[row][i]) {
                        board[row][i + 1] *= 2;
                        board[row][i] = 0;
                        moved = true;
                    }
                }
            }
        }
    }
    else if (direction === "up") {
        for (let col = 0; col < 4; col++) {
            for (let row = 1; row < 4; row++) {
                if (board[row][col] !== 0) {
                    let i = row;
                    while (i > 0 && board[i - 1][col] === 0) {
                        board[i - 1][col] = board[i][col];
                        board[i][col] = 0;
                        i--;
                        moved = true;
                    }

                    if (i > 0 && board[i - 1][col] === board[i][col]) {
                        board[i - 1][col] *= 2;
                        board[i][col] = 0;
                        moved = true;
                    }
                }
            }
        }
    }
    else if (direction === "down") {
        for (let col = 0; col < 4; col++) {
            for (let row = 2; row >= 0; row--) {
                if (board[row][col] !== 0) {
                    let i = row;
                    while (i < 3 && board[i + 1][col] === 0) {
                        board[i + 1][col] = board[i][col];
                        board[i][col] = 0;
                        i++;
                        moved = true;
                    }

                    if (i < 3 && board[i + 1][col] === board[i][col]) {
                        board[i + 1][col] *= 2;
                        board[i][col] = 0;
                        moved = true;
                    }
                }
            }
        }
    }


generateRandomTile(2);
    // 同样的方式处理其他方向的移动

    if (moved) {
        
        updateBoard();

        if (!canMoveTiles()) {
            // 游戏结束逻辑
            document.getElementById("gameOver").style.display = "block";
            end=1;
            document.getElementById("gameOver").innerHTML = "废物!";
        }
    }
}

// 判断是否可以移动方块
function canMoveTiles() {
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0 ||
                (row > 0 && board[row - 1][col] === board[row][col]) ||
                (row < 3 && board[row + 1][col] === board[row][col]) ||
                (col > 0 && board[row][col - 1] === board[row][col]) ||
                (col < 3 && board[row][col + 1] === board[row][col])) {
                    console.log("can move");
                return true;
            }
        }
    }
    return false;
}

// 初始化游戏
function startGame() {
    var containers = document.querySelectorAll(".container");
    containers.forEach(function(container) {
      container.style.display = "flex";
    });
    initBoard();
    document.getElementById("leftButton").addEventListener("click", function() {
        moveTiles("left");
    });
    document.getElementById("rightButton").addEventListener("click", function() {
        moveTiles("right");
    });
    document.getElementById("upButton").addEventListener("click", function() {
        moveTiles("up");
    });
    document.getElementById("downButton").addEventListener("click", function() {
        moveTiles("down");
    });
    window.addEventListener("keydown", function(event) {
        var key = event.key.toLowerCase();
        switch (key) {
          case "arrowleft":
          case "a":
            moveTiles("left");
            break;
          case "arrowright":
          case "d":
            moveTiles("right");
            break;
          case "arrowup":
          case "w":
            moveTiles("up");
            break;
          case "arrowdown":
          case "s":
            moveTiles("down");
            break;
        }
      });
}

