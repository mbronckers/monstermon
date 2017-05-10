/* Main JavaScript File
Graphic tiles source: http://fanart.pokefans.net/tutorials/mapping/tilesets
 */
var map = {
    cols: 32,
    rows: 32,
    tileSize: 32,
    tiles: [],
    getTile: function(col, row) {
        return this.tiles[row * map.cols + col];
    }
};

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    
    drawMap();
}

// https://developer.mozilla.org/en-US/docs/Games/Techniques/Tilemaps/Square_tilemaps_implementation%3A_Static_maps
function drawMap() {
    for (var r = 0; r < map.rows; r++) {
        for (var c = 0; c < map.cols; c++) {
            var tile = map.getTile(r, c);
            if (tile !== 0) {
                ctx.drawImage(
                    tileAtlas,
                    (tile - 1) * map.tileSize,
                    0,
                    map.tileSize,
                    map.tileSize,
                    c * map.tileSize,
                    r * map.tileSize,
                    map.tileSize,
                    map.tileSize
                );
            }
        }
    }
}