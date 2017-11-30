import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'minesweeper-controls',
  templateUrl: 'controls.html',
  styleUrls: ['controls.css']
})
export default class ControlsComponent {
    public width: number;
    public height: number;
    public numBombs: number;

    @Output() resetEvent = new EventEmitter();

  constructor() {
    this.width = 25;
    this.height = 15;
    this.numBombs = 50;
  }

  public resetClicked(){
    this.resetEvent.emit({width: this.width, height: this.height, numBombs: this.numBombs});
  }
}