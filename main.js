/* Main JavaScript File

NOTE: Tiles in texture file are 16x16

____________________________________________________________________
Source credits:
Graphic tiles source: http://fanart.pokefans.net/tutorials/mapping/tilesets
Draw Map function helpers code: https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation%3A_Static_maps
File path help: https://www.w3schools.com/html/html_filepaths.asp
____________________________________________________________________
*/

var texture = new Image();
texture.src = "Graphics/TexturePack.png"; 
var playerImg = new Image();
playerImg.src = "Graphics/user.png"// file path to external texture files

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

/* drawMap() function:
    ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height); is used to take a specified part of an image
*/
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
        playerImg,
        0,
        0,
        map.tileSize,
        map.tileSize,
        player.x,
        player.y,
        map.tileSize,
        map.tileSize
    );
}

//
// Keyboard listener
//

var KEY = { W: 87, A: 65, S: 83, D: 68, SPACE: 32, LK: 37, RK: 39, UK: 38, DK: 40};

function keyPressed(e) {
		switch(e.keyCode) {
			case KEY.W:
			case KEY.UK:
                if (map.getTile(player.x / map.tileSize, player.y / map.tileSize - 1) != 1) {
                    player.y -= 5;
                }
                
				break;
			case KEY.A:
			case KEY.LK:
                if (map.getTile(player.x / map.tileSize - 1, player.y / map.tileSize) != 1) {
				    player.x -= 5;
                }
				break;
			case KEY.S:
			case KEY.DK:
                if (map.getTile(player.x / map.tileSize, player.y / map.tileSize + 1) != 1) {
				    player.y += 5;
                }
				break;
            case KEY.D:
			case KEY.RK:
                if (map.getTile(player.x / map.tileSize + 1, player.y / map.tileSize) != 1) {
				    player.x += 5;
                }
				break;
            }
}


