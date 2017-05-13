import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'clock',
    templateUrl: 'app/views/common/clock.html'
})
export class Clock {
  @Input() time: any;
  @Input() editable: Boolean;
  @Output() update = new EventEmitter<any>();

  constructor() {}

  onTimeChange(event, key) {
      if(+event.target.max < +event.target.value) {
        event.target.value = event.target.max;
      }
      this.time[key] = event.target.value;
      this.update.emit({
        time: this.time
      });
  }

}
