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

  constructor() {
    this.width = 10;
    this.height = 10;
    this.tiles = [];
    for(var i: number = 0; i < this.height; i++) {
      this.tiles[i] = [];
      for(var j: number = 0; j < this.width; j++) {
          this.tiles[i][j] = new Tile(i,j);
      }
    }
    this.initBombs(10);
    this.initBombAdjacencies();
  }

  public initBombs = function(num: number){
    while (num > 0) {
      let coord = this.getRandomTileCoord();
      if(this.tiles[coord.row][coord.col].isBomb){
        // keep looking
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
}



class Tile {
  x: number;
  y: number;
  text: string;
  isBomb: boolean;
  numAdjacentBombs: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.text = "";
    this.isBomb = false;
    this.numAdjacentBombs = 0;
  }
}