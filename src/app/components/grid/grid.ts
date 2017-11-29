import {Component} from '@angular/core';

@Component({
  selector: 'minesweeper-grid',
  templateUrl: 'grid.html',
  styleUrls: ['grid.css']
})
export default class GridComponent {
  public tiles: Tile[][];
  public width: number;
  public height: number;
  public gameOver: boolean;
  public gameStarted: boolean;
  public numTilesRevealed: number;
  public numBombs: number;

  constructor() {
    this.width = 10;
    this.height = 10;
    this.numBombs = 10;
    this.initGrid({width: this.width, height: this.height, numBombs: this.numBombs});
  }

  public initGrid = function($event) {
    this.gameStarted = false;
    this.gameOver = false;
    console.log($event);
    this.width = $event.width;
    this.height = $event.height;
    this.numBombs = $event.numBombs;
    this.numTilesRevealed = 0;
    this.tiles = [];
    for(var i: number = 0; i < this.height; i++) {
      this.tiles[i] = [];
      for(var j: number = 0; j < this.width; j++) {
          this.tiles[i][j] = new Tile(i,j);
      }
    }
  }

  public initBombs = function(startTile: Tile, num: number){
    while (num > 0) {
      let coord = this.getRandomTileCoord();
      if(this.tiles[coord.row][coord.col].isBomb){
        // keep looking because there is already a bomb here.
      } else if((Math.pow(coord.row - startTile.y,2) <= 1) && (Math.pow(coord.col - startTile.x,2) <= 1)) {
        // keep looking because we want the startTile to be blank.
      } else {
        this.tiles[coord.row][coord.col].isBomb = true;
        this.tiles[coord.row][coord.col].text = "💣";
        console.log("created bomb at " + coord.col + "," + coord.row);
        num--;
      }
    }
  }

  public initBombAdjacencies = function(){
    for(var y: number = 0; y < this.height; y++) {
      for(var x: number = 0; x < this.width; x++) {
        let tile = this.tiles[y][x];
        if(!tile.isBomb){
          if(x-1 >= 0 && y+1 < this.height && this.tiles[y+1][x-1].isBomb){ tile.numAdjacentBombs++; }
          if(x-1 >= 0 && this.tiles[y][x-1].isBomb){ tile.numAdjacentBombs++; }
          if(x-1 >= 0 && y-1 >= 0 && this.tiles[y-1][x-1].isBomb){ tile.numAdjacentBombs++; }
          if(y-1 >= 0 && this.tiles[y-1][x].isBomb){ tile.numAdjacentBombs++; }
          if(x+1 < this.width && y-1 >= 0 && this.tiles[y-1][x+1].isBomb){ tile.numAdjacentBombs++; }
          if(x+1 < this.width && this.tiles[y][x+1].isBomb){ tile.numAdjacentBombs++; }
          if(x+1 < this.width && y+1 < this.height && this.tiles[y+1][x+1].isBomb){ tile.numAdjacentBombs++; }
          if(y+1 < this.height && this.tiles[y+1][x].isBomb){ tile.numAdjacentBombs++; }
          if(tile.numAdjacentBombs > 0){
            tile.text = "" + tile.numAdjacentBombs;
          }
        }
      }
    }
  }

  public getRandomTileCoord() {
    let randomRow = Math.floor(Math.random() * (this.height));
    let randomCol = Math.floor(Math.random() * (this.width));
    return {row: randomRow, col: randomCol};
  }

  public clickTile(tile: Tile){
    if(!this.gameStarted){
      this.initBombs(tile, this.numBombs);
      this.initBombAdjacencies();
      this.gameStarted = true;
    } 
    if(!tile.isRevealed && !tile.isFlagged){
      tile.isRevealed = true;
      this.numTilesRevealed++;
      if(((this.width * this.height) - this.numTilesRevealed) == this.numBombs){
        this.gameOver = true;
        setTimeout(function(){
          alert("You win!!");
        }, 1000);
      }
      if(tile.isBomb){
        // if user clicks on a bomb, game is over
        this.gameOver = true;
        setTimeout(function(){
          alert("Game Over!  You lose. :(");
        }, 1000);
      } else if(tile.numAdjacentBombs == 0){
        // if user clicks on an empty space, explore the full contiguous empty space.
        // setTimeout(() => {
          if(tile.x-1 >= 0 && tile.y+1 < this.height){ this.clickTile(this.tiles[tile.y+1][tile.x-1]) }
          if(tile.x-1 >= 0){ this.clickTile(this.tiles[tile.y][tile.x-1]) }
          if(tile.x-1 >= 0 && tile.y-1 >= 0){ this.clickTile(this.tiles[tile.y-1][tile.x-1]) }
          if(tile.y-1 >= 0){ this.clickTile(this.tiles[tile.y-1][tile.x]) }
          if(tile.x+1 < this.width && tile.y-1 >= 0){ this.clickTile(this.tiles[tile.y-1][tile.x+1]) }
          if(tile.x+1 < this.width){ this.clickTile(this.tiles[tile.y][tile.x+1]) }
          if(tile.x+1 < this.width && tile.y+1 < this.height){ this.clickTile(this.tiles[tile.y+1][tile.x+1]) }
          if(tile.y+1 < this.height){ this.clickTile(this.tiles[tile.y+1][tile.x]) }
        // },30);
      }
    }
  }

  public rightClickTile(tile: Tile, event: Event){
    if(!tile.isRevealed && !this.gameOver){
      tile.isFlagged = !tile.isFlagged;
    }
    return false;
  }
}

class Tile {
  x: number;
  y: number;
  text: string;
  isBomb: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  numAdjacentBombs: number;
  constructor(y: number, x: number) {
    this.x = x;
    this.y = y;
    this.text = "";
    this.isBomb = false;
    this.isRevealed = false;
    this.isFlagged = false;
    this.numAdjacentBombs = 0;
  }
}