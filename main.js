/* Main JavaScript File

NOTE: Tiles in texture file are 16x16

____________________________________________________________________
Source credits:
Graphic tiles source: http://fanart.pokefans.net/tutorials/mapping/tilesets
Draw Map function helpers code: https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation%3A_Static_maps
File path help: https://www.w3schools.com/html/html_filepaths.asp
____________________________________________________________________
*/


/* --------------------------------------
Graphic variables
----------------------------------------*/

var texture = new Image();
texture.src = "Graphics/TexturePack.png"; 
var playerImg = new Image();
playerImg.src = "Graphics/user.png"// file path to external texture files

var MonsterMart = 64; // tile number for the MonsterMart, a building on the canvas

var alpha = {cols: 16, rows: 16, tileSize: 16,
    first: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        [1, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 30, 30, 0, 0, 0, 0, 1],
        [1, 0, 30, 30, 30, 30, 30, 30, 30, 30, 30, 0, 0, 0, 0, 1],
        [1, 0, 30, 30, 30, 30, 30, 30, 30, 30, 30, 0, 0, 0, 0, 1],
        [1, 0, 30, 30, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
        [1, 0, 30, 30, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 30, 30, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 5, 30, 30, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [6, 6, 6, 6, 6, 31, 31, 31, 31, 31, 31, 0, 0, 0, 0, 1],
        [6, 6, 6, 6, 6, 0, 31, 31, 31, 31, 31, 31, 0, 0, 0, 1],
        [1, 21, 24, 24, 27, 0, 31, 31, 31, 31, 31, 31, 31, 0, 0, 1],
        [1, 22, 25, 20, 28, 0, 31, 31, 31, 31, 31, 31, 31, 31, 0, 1],
        [1, 23, 26, 26, 29, 0, 31, 31, 31, 31, 31, 31, 31, 31, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    ], 
    second: [
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 64, -1, -1, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    getTile: function(row, col) { 		// returns the tile number from the array based on row and col
        return this.first[row][col];
    },
    getTileSecond: function(row, col) {		// returns the tile number from the second layer array based on row and col
    	return this.second[row][col];
    }
};

var beta = {cols: 16, rows: 16, tileSize: 16,
    first: [
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    	[1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[1, 6, 6, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    	[1, 30, 6, 2, 2, 2, 2, 6, 6, 6, 3, 0, 0, 3, 3, 3],
    	[1, 30, 30, 6, 2, 6, 6, 6, 25, 6, 3, 3, 3, 6, 6, 6],
    	[1, 30, 30, 6, 2, 6, 25, 25, 25, 6, 6, 6, 6, 6, 6, 3],
    	[1, 30, 30, 6, 6, 6, 25, 25, 25, 25, 25, 25, 25, 25, 6, 3],
    	[1, 30, 30, 6, 6, 6, 25, 25, 25, 25, 25, 25, 25, 6, 6, 3],
    	[1, 30, 30, 6, 2, 6, 25, 25, 25, 25, 25, 25, 25, 6, 3, 3],
    	[1, 30, 30, 6, 2, 6, 6, 25, 25, 25, 25, 25, 6, 6, 3, 0],
    	[1, 30, 6, 3, 3, 3, 6, 25, 25, 25, 25, 25, 6, 3, 0, 0],
    	[1, 6, 6, 31, 31, 3, 6, 25, 25, 25, 25, 25, 6, 3, 0, 0],
    	[1, 31, 31, 31, 31, 3, 6, 6, 6, 6, 6, 6, 6, 3, 0, 0],
    	[1, 31, 31, 31, 31, 31, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0],
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ], 
    second: [
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    getTile: function(row, col) {	// returns the tile number from the array based on row and col
        return this.first[row][col];
    },
    getTileSecond: function(row, col) { // returns the tile number from the second layer array based on row and col
    	return this.second[row][col];
    }
};


window.onload = function() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    

    setInterval(function() {
        canvas.width = canvas.width;
        drawMap();
        drawPlayer();
    }, 1000/30);
    
    document.addEventListener('keydown', keyPressed);
}

// drawMap() function: ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height); is used to take a specified part of an image
var monsterBallShow = true; // true if monsterball is able to be collected
function drawMap() {
<<<<<<< HEAD
=======

    var monsterBallShow = true; // true if monsterball is able to be collected

>>>>>>> player
    if (monsterBallShow) {
        player.map.second[14][14] = 33; 
    } else {
        player.map.second[14][14] = 0;
    }
<<<<<<< HEAD
=======

>>>>>>> player
    for (var r = 0; r < player.map.rows; r++) {
        for (var c = 0; c < player.map.cols; c++) {
            var tile = player.map.getTile(r, c);
            if (tile != -1) { // a value of -1 in the map array means empty tile
                    ctx.drawImage(
                        texture,            // image file source
                        0, // the x coordinate of the image file to clip --> texture file tile's x position
                        (tile * player.map.tileSize), // the y coordinate of the image file to clip --> texture file tile's y position
                        player.map.tileSize, 		// the width of the clipped image --> texture file tile's width
                        player.map.tileSize,		// the height of the clipped image --> texture file tile's height
                        c * (player.map.tileSize * 2), 	// x position of tile on canvas
                        r * (player.map.tileSize * 2),	// y position of tile on canvas
                        player.map.tileSize * 2,		// tile width
                        player.map.tileSize * 2		// tile height
                    );
            }
        }
    }

    // second array/layer

    for (var r = 0; r < player.map.rows; r++) {
    	for (var c = 0; c < player.map.cols; c++) {
    		var tile = player.map.getTileSecond(r, c);

    		if (tile == MonsterMart) { // special case for building
    			ctx.drawImage(
    				texture,
    				0,
    				(tile * player.map.tileSize),
    				4*player.map.tileSize, 		// the width of the clipped image --> texture file tile's width
                    3*player.map.tileSize,		// the height of the clipped image --> texture file tile's height
                    c * (player.map.tileSize * 2), 	// x position of tile on canvas
                    r * (player.map.tileSize * 2),	// y position of tile on canvas
               	    player.map.tileSize * 6,		// tile width
   		   	        player.map.tileSize * 6		// tile height
    				);
    		}

    		else if (tile != 0 && tile != -1) { // a value of 0 in the second layer array means empty tile, value 0f -1 is the pokeshop area
    			ctx.drawImage(
    				texture,
    				0,
    				(tile * player.map.tileSize),
    				player.map.tileSize, 		// the width of the clipped image --> texture file tile's width
                    player.map.tileSize,		// the height of the clipped image --> texture file tile's height
                    c * (player.map.tileSize * 2), 	// x position of tile on canvas
                    r * (player.map.tileSize * 2),	// y position of tile on canvas
               	    player.map.tileSize * 2,		// tile width
   		   	        player.map.tileSize * 2		// tile height
    				);
    		} 
    	}
    }
}

function drawPlayer() {
        ctx.drawImage(
            playerImg, // image file source
            0, 
            (player.orientation - 1) * player.tileSize,
            player.tileSize,
            player.tileSize,
            player.x * player.tileSize,
            player.y * player.tileSize,
            player.tileSize ,
            player.tileSize
            );
}

//
// Keyboard listener
//

var KEY = {W: 87, A: 65, S: 83, D: 68, SPACE: 32, LK: 37, RK: 39, UK: 38, DK: 40};

function keyPressed(e) {
		switch(e.keyCode) {
			case KEY.W:
			case KEY.UK:
                player.orientation = 1;
                if (moveCheck(1)) {
                    player.y -= 1;
                }
				break;
			case KEY.A:
			case KEY.LK:
                player.orientation = 4;
                if (player.map == alpha && player.x == 0 && (player.y == 10 || player.y == 11)) {
                    player.map = beta;
                    player.x = 15;
                    player.y = 5;
                    return;
                }
                if (moveCheck(2)) {
				    player.x -= 1;
                }
				break;
			case KEY.S:
			case KEY.DK:
                player.orientation = 3;
                if (moveCheck(3)) {
				    player.y += 1;
                }
				break;
            case KEY.D:
			case KEY.RK:
                player.orientation = 2;
                if (player.map == beta && player.x == 15 && player.y == 5) {
                    player.map = alpha;
                    player.x = 0;
                    player.y = 10;
                    return;
                }
                if (moveCheck(4)) {
				    player.x += 1;
                }
                break;
            }

        checkMonsters();
        checkEnemy();
        checkHealth();

}        



/* --------------------------------------
Player
----------------------------------------*/

var player = {x: 5, y: 5, orientation: 1, tileSize: 32, map: alpha, hp: 100, money: 0};

function checkHealth() {
    if (player.health <= 0) {
        //respawn
        player.map = alpha;
        player.orientation = 1;
        player.x = 9;
        player.y = 3;
        monstermon1Obtained = false;
        monsterBallShow = true;
        health = 100;
        print("You have respawned. You can try again.");
    }
}
/* --------------------------------------
Monsters
----------------------------------------*/

var monstermon1Obtained = false; // boolean for having monstermon in backpack
var monstermon1 = {name: "Woeshoem", attack: 7, health: 100};

function checkMonsters() {
    if (player.map == alpha) {
<<<<<<< HEAD
        if (player.x == 14 && player.y == 14 && monsterBallShow) {
            if (!monstermon1Obtained) {
              print("You have found a MonsterBall. The MonsterBall contains " + monstermon1.name + "!");
              print(monstermon1.name + " is now part of your team.");
              monstermon1Obtained = true;  
              monsterBallShow = false;
=======
       if (player.x == 14 && player.y == 14 && monsterBallShow) {}
            if (!monstermon1Obtained) {
              print("You have found a MonsterBall. The MonsterBall contains " + monstermon1.name + "!");
              print(monstermon1.name + " is now part of your team.");
              monstermon1Obtained = true;
              monsterBallShow = false;    
>>>>>>> player
            }
        }
    }
}

/* --------------------------------------
Enemies
----------------------------------------*/

var enemy1 = {name: "end boss", attack: 10, health: 150};

function checkEnemy() {
    if (player.map == beta && enemy1.health != 0 && player.x == 3 && player.y == 7 && player.orientation == 4) {
        print("You have found the final boss of this game!");
        print("You will have to fight him in order to complete the game.");
    }   
// fight();
}
/* --------------------------------------
Movement 
----------------------------------------*/

var movementTiles = [0, 6, 7, 8, 9, 10, 30, 31, 32, 33];

/* --------------------------------------
Print functions 
----------------------------------------*/

function print(string) {
    var output = document.createElement("p"); //create a paragrahp element to hold the computer's response to input
    var text = document.getElementById("textDiv"); //get div element for the entered text by user

    output.appendChild(document.createTextNode(string)); //append child to output paragraph
    text.appendChild(output); //add paragraph to div
}

function moveCheck(input) {
    var moveTile;
    var moveTile2;

    switch (input) {
        case 1: // case of arrow up key
            moveTile = player.map.getTile(player.y - 1, player.x);
            moveTile2 = player.map.getTileSecond(player.y - 1, player.x);
            break;
        case 2: // case of left arrow key
            moveTile = player.map.getTile(player.y, player.x - 1);
            moveTile2 = player.map.getTileSecond(player.y, player.x - 1);
            break;
        case 3: // case of arrow down key
            moveTile = player.map.getTile(player.y + 1, player.x);
            moveTile2 = player.map.getTileSecond(player.y + 1, player.x);
            break;
        case 4: // case of right arrow key
            moveTile = player.map.getTile(player.y, player.x + 1);
            moveTile2 = player.map.getTileSecond(player.y, player.x + 1);
            break;
    }

    if (movementTiles.indexOf(moveTile) != -1 && movementTiles.indexOf(moveTile2) != -1) {
        return true;
    } else {
        return false;
    }

}


