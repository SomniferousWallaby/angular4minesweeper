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
    this.width = 10;
    this.height = 10;
    this.numBombs = 10;
  }

  public resetClicked(){
    this.resetEvent.emit({width: this.width, height: this.height, numBombs: this.numBombs});
  }
}