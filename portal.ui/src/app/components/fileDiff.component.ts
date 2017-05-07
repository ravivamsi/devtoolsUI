import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FileInput} from './common/FileInput';

@Component({
	 templateUrl: 'app/views/fileDiff.html',
   selector: 'homePage',
   directives: [FileInput]
})

export class FileDiffComponent implements OnInit {

    baseFile = {
      title: 'Base file',
      text: "",
      textUpdate: function(event) {
        this.text = event.text;
      }
    }

    changedFile = {
      title: 'New file',
      text: "",
      textUpdate: function(event) {
        this.text = event.text;
      }
    }

    constructor() {

    }

    getDiff() {
			var base = difflib.stringAsLines(this.baseFile.text);
			var newtxt = difflib.stringAsLines(this.changedFile.text);

			// create a SequenceMatcher instance that diffs the two sets of lines
			var sm = new difflib.SequenceMatcher(base, newtxt);

			// get the opcodes from the SequenceMatcher instance
			// opcodes is a list of 3-tuples describing what changes should be made to the base text
			// in order to yield the new text
			var opcodes = sm.get_opcodes();
			console.log(opcodes);
			var diffoutputdiv = document.getElementById('diffView');
			diffoutputdiv.innerHTML = '';
			diffoutputdiv.appendChild(diffview.buildView({
	        baseTextLines: base,
	        newTextLines: newtxt,
	        opcodes: opcodes,
	        baseTextName: "Base Text",
	        newTextName: "New Text",
	        viewType: 0
	    }));

    }

}
