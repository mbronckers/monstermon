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

var map = {cols: 16, rows: 16, tileSize: 16,
    tiles: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 2, 2, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
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
    getTile: function(row, col) {
        return this.tiles[row][col];
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

function drawMap() {
    for (var r = 0; r < map.rows; r++) {
        for (var c = 0; c < map.cols; c++) {
            var tile = map.getTile(r, c);
            
            if (tile != -1) { // a value of -1 in the map array means empty tile

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
            }
        }
    }
}

function drawPlayer() {
        ctx.drawImage(
            playerImg, // image file source
            0, 
            player.orientation * player.tileSize,
            player.tileSize,
            player.tileSize,
            player.x * player.tileSize,
            player.y * player.tileSize,
            map.tileSize * 2,
            map.tileSize * 2
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
                player.y -= 1;
				break;
			case KEY.A:
			case KEY.LK:
				player.x -= 1;
				break;
			case KEY.S:
			case KEY.DK:
				player.y += 1;
				break;
            case KEY.D:
			case KEY.RK:
				player.x += 1;
				break;
            }
}


/* --------------------------------------
Player
----------------------------------------*/

var player = {x: 5, y: 5, orientation: 0, tileSize: 32, map: map, backpack: [], hp: 100, money: 0}

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
