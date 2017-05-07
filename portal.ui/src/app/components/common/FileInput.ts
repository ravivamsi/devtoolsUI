import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'file-input',
    templateUrl: 'app/views/common/fileInput.html'
})
export class FileInput {
	@Input() title: string;
  @Input() fileText: string;
  @Output() update = new EventEmitter<any>();

  constructor() {}

  onTextChange(event) {
      this.update.emit({
        text: event.target.value
      });
  }

}
