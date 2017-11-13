import {Component} from '@angular/core';

@Component({
  selector: 'minesweeper-grid',
  templateUrl: 'grid.html',
  styleUrls: ['grid.css']
})
export default class GridComponent {
  public tiles: Tile[][];

  constructor() {
    this.tiles = [];
    for(var i: number = 0; i < 10; i++) {
      this.tiles[i] = [];
      for(var j: number = 0; j< 10; j++) {
          this.tiles[i][j] = new Tile(i,j);
      }
    }
  }
}

class Tile {
  x: number;
  y: number;
  text: string;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.text = this.x + "," + this.y;
  }
}