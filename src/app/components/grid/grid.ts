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
  }

  public initBombs = function(num: number){

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