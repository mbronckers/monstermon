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
texture.src = "Graphics/TexturePack.png"; // file path to external texture file
var playerImg = new Image();
playerImg.src = "Graphics/user.png"; // file path to external player graphics file
var enemyImg = new Image();
enemyImg.src = "Graphics/enemy.png";
var fightImg = new Image();
fightImg = "Graphics/fight.png"; // file path to external battle graphics file


var MonsterMart = 64; // tile number for the MonsterMart, a building on the canvas


// alpha is the initial main map for the player
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

// beta is the second map when you go left from alpha
var beta = {cols: 16, rows: 16, tileSize: 16,
    first: [ // first layer for background
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
    second: [ // second layer for additional items to be displayed on top of background
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

// gamma is the third map when you fight the boss
var gamma = {cols: 16, rows: 16, tileSize: 16,
    first: [ // first layer for background
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ], 
    second: [ // second layer for additional items to be displayed on top of background
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
        if (!fightActive) {
           drawPlayer(); 
        }
        else {
            drawEnemy();
            drawMonsterMon();
            checkBossHealth();
        }
        checkHealth();
    }, 1000/30);
    
    document.addEventListener('keydown', keyPressed);
    canvas.addEventListener("mousedown", mouseClickedPosition, false);
}

// drawMap() function: ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height); is used to take a specified part of an image
function drawMap() {
    if (monsterBallShow && player.map == alpha) {
        player.map.second[14][14] = 33; 
    } else {
        player.map.second[14][14] = 0;
    }

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

    // text box to show health during battle
    if (fightActive) {
        ctx.fillStyle = "black";
        ctx.fillText("MonsterMon Health: " + monstermon1.health, 80, 40);
        ctx.fillText("Boss Health: " + enemy1.health, 280, 40);
    }
}

function drawPlayer() {
        ctx.drawImage(
            playerImg, // image file source
            0, 
            (player.orientation - 1) * player.tileSize, // function uses the same properties as in drawMap()
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
    if (!fightActive) {
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
                if (player.map == alpha && player.x == 0 && (player.y == 10 || player.y == 11)) { // movement to left map
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
                if (player.map == beta && player.x == 15 && player.y == 5) { // movement to right map
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

        checkHealthCenter(); //checks to see if player is in front of health center
        checkMonsters(); //checks if player is on monsterball
        checkEnemy(); //checks if player player is in front of the enemy
    } else {
        // the player is looking at the battle scene map but the fight has not started yet, must hit f key to begin fight
        if (fightActive && e.keyCode == 70 && fightBegin == false) {
            print("BEGIN BATTLE!");
            fightBegin = true; //must be set to true to get mouse x and y
            beginFight();
        }
    }

}        

/* --------------------------------------
Player
----------------------------------------*/

var player = {x: 5, y: 5, orientation: 3, tileSize: 32, map: alpha, hp: 100};

function checkHealth() {
    if (monstermon1.health <= 0 || player.hp <= 0) {
        //respawn
        clearInterval(interval1); //clears fighting intervals if player dies while in fight
        clearInterval(interval2);
        if (fightBegin) {
            print("Your monstermon has died. You have kept your life this time try again!");
        }
        player.map = alpha;
        player.orientation = 3;
        player.x = 9;
        player.y = 3;
        monstermon1.health = 100;
        player.hp = 100;
        monstermon1Obtained = false;
        monsterBallShow = true;
        fightActive = false; //ends the fight when player dies and sets the enemies position and health back to default
        fightBegin = false;
        enemy1.health = 150;
        enemy1.x = 10;
        enemy1.y = 8;
    }
}

//checks if the boss has died, if so it teleports the player back to beta map and says congrats
function checkBossHealth() {
    if (enemy1.health <= 0) {
        clearInterval(interval1);
        clearInterval(interval2);
        fightActive = false;
        fightBegin = false;
        player.map = beta;
        beta.second[7][2] = 0;
        print("Congratulations you defeated the boss!!");
    }
}

//checks to see if the player is in front of and facing the health center to output text
function checkHealthCenter() {
    if (player.map == alpha) {
        if ((player.x == 9 || player.x == 10) && player.y == 3 && player.orientation == 1) {
            print("This is the MonsterMart. It is a health center for aspiring monster hunters like yourself. However, do not be mistaken: this is not a place where you want to be.");
        }
    }
}
/* --------------------------------------
Monsters
----------------------------------------*/

var monstermon1Obtained = false; // boolean for having monstermon in backpack
var monstermon1 = {name: "Woeshoem", attack: 7, health: 100};
var monsterBallShow = true ; // true if monsterball is able to be collected

function checkMonsters() {
    if (player.map == alpha) {
       if (player.x == 14 && player.y == 14 && monsterBallShow) {
        if (!monstermon1Obtained) {
              print("You have found a MonsterBall. The MonsterBall contains " + monstermon1.name + "!");
              print(monstermon1.name + " is now part of your team.");
              monstermon1Obtained = true;  
              monsterBallShow = false;

            }
        }
    }
}

/* --------------------------------------
Enemies
----------------------------------------*/

var enemy1 = {x: 10, y: 8, name: "end boss", attack: 10, health: 150};

function checkEnemy() {
    if (player.map == beta && enemy1.health > 0 && player.x == 3 && player.y == 7 && player.orientation == 4) {
        print("You have found the final boss of this game!");
        print("You will have to fight her in order to complete the game.");
        if (!monstermon1Obtained) {
            player.hp = 0;
            print("You tried to fight the boss without a MonsterMon, she slapped you for being dumb and you died. You can try again.");
            
        } else {
            fightStart();
        }
    }   
}
/* --------------------------------------
Movement 
----------------------------------------*/

var movementTiles = [0, 6, 7, 8, 9, 10, 30, 31, 32, 33];

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
    
    //these lines implement the movement grid that we made, if no wall number is in front of the character it will move
    if (movementTiles.indexOf(moveTile) != -1 && movementTiles.indexOf(moveTile2) != -1) {
        return true;
    } else {
        return false;
    }

}

/* --------------------------------------
Print function 
----------------------------------------*/

function print(string) {
    var output = document.createElement("p"); //create a paragrahp element to hold the computer's response to input
    var text = document.getElementById("textDiv"); //get div element for the entered text by user
    output.appendChild(document.createTextNode(string)); //append child to output paragraph
    text.appendChild(output); //add paragraph to div

    document.getElementById("textDiv").scrollTop = document.getElementById("textDiv").scrollHeight; // ensures the new input/output is at the bottom of the div
}

var fightActive = false; //sets the map to gamma and displays monstermon and boss
var fightBegin = false; // begins the fight animations

//called when the player encounters the boss and has the monstermon
function fightStart() {
    fightActive = true;
    player.map = gamma;
    print("Hit 'f' to begin the fight, you will have to click on the Boss as it jumps around! Don't miss.");
      
}

var interval1;
var interval2;
function beginFight() {
    // changes enemy location to a random square in front of the monstermon and within the bushes
    changeEnemyLocation();
    
        //this interval will keep running unless the player clicks on the bus, this allows the monstermon to lose health if the user does not attack the enemy
        interval1 = setInterval(function() {
        changeEnemyLocation();
        monstermon1.health -= enemy1.attack;
        
        }, 2000);
        
    //this interval checks for the mouse x and y on the enemy and if the user hits the enemy it will hurt the enemy, clear both intervals and call the function again 
        interval2 = setInterval(function() {
           if (checkMousePos()) {
                enemy1.health -= monstermon1.attack;
                clearInterval(interval1);
                clearInterval(interval2);
                beginFight();

            } 
        }, 1000/30);   
}


//draws enemy at designated location
function drawEnemy() {
    ctx.drawImage(
        fightImg, // image file source
        0, 
        2 * player.tileSize, // function uses the same properties as in drawMap()
        player.tileSize,
        player.tileSize,
        enemy1.x * player.tileSize,
        enemy1.y * player.tileSize,
        player.tileSize ,
        player.tileSize
    );
}

// random position for enemy
function changeEnemyLocation() {
    enemy1.x = getRandomInt(5, 14);
    enemy1.y = getRandomInt(1, 14);
}

//random number generator function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//mouse position object
mousePos = {x: 0, y: 0};

//gets the mouse position x and y, a little flukey but gets the job done
function mouseClickedPosition(event) {
    if (fightBegin) {
        var canvas = document.getElementById("canvas");
        mousePos.x = event.clientX - canvas.offsetLeft - canvas.scrollLeft;
        mousePos.y = event.clientY - canvas.offsetTop - canvas.scrollTop;
        
    }
    
}

//checks to see if the mouse position when clicked is over the enemy
function checkMousePos() {
    if (mousePos.x > enemy1.x * 32 && mousePos.x < enemy1.x * 32 + 32 && mousePos.y > enemy1.y * 32 && mousePos.y < enemy1.y * 32 + 32) {
        return true;
    }
    return false;
}

//draws the monstermon on battle scene
function drawMonsterMon() {
    ctx.drawImage(
        fightImg, // image file source
        0, 
        3 * player.tileSize, // function uses the same properties as in drawMap()
        player.tileSize,
        player.tileSize,
        4 * player.tileSize,
        8 * player.tileSize,
        player.tileSize ,
        player.tileSize
    );
}


