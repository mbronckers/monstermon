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
texture.src = "Graphics/tileset-citrine.png"; // file path to external texture files

var grass = 12;								// the value of element in array [non-fighting grass]
var grassX = 0;								// the x start location of grass tile in texture file --> meant for clipping
var grassY = 3;                             // the y start location of grass tile in texture file --> meant for clipping

var tree = 0;
var treeX = 3;
var treeY = 3;

var healthCenter = 49;
var healthCenterX;
var healthCenterY;

var sand;
var sandX;
var sandY;

var water;
var waterX;
var waterY;

var fence;
var fenceX;
var fenceY;

var stone;
var stoneX;
var stoneY;

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
    ],
    getTile: function(row, col) {
        return this.tiles[row][col];
    }
};

window.onload = function() {
    canvas = document.getElementById("game");
    ctx = canvas.getContext("2d");
    
    drawMap();
}

// drawMap() function: ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height); is used to take a specified part of an image

function drawMap() {
    for (var r = 0; r < map.rows; r++) {
        for (var c = 0; c < map.cols; c++) {
            var tile = map.getTile(r, c);
            
            if (tile != -1) { // a value of -1 in the map array means empty tile
                
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
            
            }
        }
    }
}

function drawPlayer() {
        ctx.drawImage(
            playerFile // image file source
            0, 
            0,
            map.tileSize,
            map.tileSize,
            player.x * map.tileSize,
            player.y * map.tileSize,
            map.tileSize,
            map.tileSize
            );
}

/* --------------------------------------
Keyboard Listener
----------------------------------------*/

var KEY = {W: 87, A: 65, S: 83, D: 68, SPACE: 32, LK: 37, RK: 39, UK: 38, DK: 40};

document.addEventListener('keydown', function(e) { 
		switch(e.keyCode) {
			case KEY.W:
			case KEY.UK:
				//code to move player here
				break;
			case KEY.A:
			case KEY.LK:
				//code to move player here
				break;
			case KEY.S:
			case KEY.DK:
				//code here
				break;
            }
});


/* --------------------------------------
Player
----------------------------------------*/

var player = {x: 0, y: 0, map: alpha, backpack: [], hp: 100, money: 0}



/* --------------------------------------
Print functions 
----------------------------------------*/

function print(string) {
    var output = document.createElement("p"); //create a paragrahp element to hold the computer's response to input
    var text = document.getElementById("textDiv"); //get div element for the entered text by user

    output.appendChild(document.createTextNode(string)); //append child to output paragraph
    text.appendChild(output); //add paragraph to div
}
