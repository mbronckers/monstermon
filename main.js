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
playerImg.src = "Graphics/player.png"// file path to external texture files

<<<<<<< HEAD
var user = new Image();
user.src = "Graphics/user.png";             // file path to tiles for the player

var grass = 12;								// the value of element in array [non-fighting grass]
var grassX = 0;								// the x start location of grass tile in texture file --> meant for clipping
var grassY = 3;                             // the y start location of grass tile in texture file --> meant for clipping

var tree = 0;
var treeX = 3;
var treeY = 3;

var healthCenter = 49;
var healthCenterX;
var healthCenterY;

var map = {cols: 16, rows: 16, tileSize: 16,
    tiles: [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
=======
var map = {cols: 16, rows: 16, tileSize: 16,
    tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

>>>>>>> CSS
    ],
    getTile: function(row, col) {
        return this.tiles[row][col];
    }
};

var player = {x: 200, y: 200};

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

function drawMap() {
    for (var r = 0; r < map.rows; r++) {
        for (var c = 0; c < map.cols; c++) {
            var tile = map.getTile(r, c);
            
            if (tile != -1) { // a value of -1 in the map array means empty tile
<<<<<<< HEAD
                
                if (tile == grass) {            // a case for each type of tile in array --> grass tile
                    ctx.drawImage(
                        texture,            // image file source
                        (grassX) * map.tileSize, // the x coordinate of the image file to clip --> texture file tile's x position
                        (grassY * map.tileSize), // the y coordinate of the image file to clip --> texture file tile's y position
                        map.tileSize, 		// the width of the clipped image --> texture file tile's width
                        map.tileSize,		// the height of the clipped image --> texture file tile's height
                        c * (map.tileSize), 	// x position of tile on canvas
                        r * (map.tileSize),	// y position of tile on canvas
                        (map.tileSize),		// tile width
                        (map.tileSize)		// tile height
                    );
                }
            
=======
                    ctx.drawImage(
                        texture,            // image file source
                        0, // the x coordinate of the image file to clip --> texture file tile's x position
                        (tile * map.tileSize), // the y coordinate of the image file to clip --> texture file tile's y position
                        map.tileSize, 		// the width of the clipped image --> texture file tile's width
                        map.tileSize,		// the height of the clipped image --> texture file tile's height
                        c * (map.tileSize * 2), 	// x position of tile on canvas
                        r * (map.tileSize * 2),	// y position of tile on canvas
                        map.tileSize * 2,		// tile width
                        map.tileSize * 2		// tile height
                    );

>>>>>>> CSS
            }
        }
    }
}

function drawPlayer() {
<<<<<<< HEAD
        ctx.drawImage(
            user // image file source
            0, 
            player.orientation * player.tileSize,
            player.tileSize,
            player.tileSize,
            player.x * map.tileSize,
            player.y * map.tileSize,
            map.tileSize,
            map.tileSize
            );
}

/* --------------------------------------
Keyboard Listener
----------------------------------------*/
=======
    ctx.drawImage(
        playerImg,
        0,
        0,
        map.tileSize,
        map.tileSize,
        player.x * 2,
        player.y * 2,
        map.tileSize * 2,
        map.tileSize * 2
    );
}

//
// Keyboard listener
//
>>>>>>> CSS

var KEY = {W: 87, A: 65, S: 83, D: 68, SPACE: 32, LK: 37, RK: 39, UK: 38, DK: 40};

function keyPressed(e) {
		switch(e.keyCode) {
			case KEY.W:
			case KEY.UK:
                player.y -= 5;
				break;
			case KEY.A:
			case KEY.LK:
				player.x -= 5;
				break;
			case KEY.S:
			case KEY.DK:
				player.y += 5;
				break;
            case KEY.D:
			case KEY.RK:
				player.x += 5;
				break;
            }
}


/* --------------------------------------
Player
----------------------------------------*/

var player = {x: 0, y: 0, orientation: 1, tileSize: 32, map: alpha, backpack: [], hp: 100, money: 0}


/* --------------------------------------
Movement 
----------------------------------------*/

var movementTiles = [0, 6, 7, 8, 9, 10, 30, 31, 32];


/* --------------------------------------
Print functions 
----------------------------------------*/

function print(string) {
    var output = document.createElement("p"); //create a paragrahp element to hold the computer's response to input
    var text = document.getElementById("textDiv"); //get div element for the entered text by user

    output.appendChild(document.createTextNode(string)); //append child to output paragraph
    text.appendChild(output); //add paragraph to div
}
