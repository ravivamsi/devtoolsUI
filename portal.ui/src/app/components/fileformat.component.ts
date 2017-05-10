import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FileInput} from './common/FileInput';
import { validateXMLString } from './common/utils';

@Component({
	 templateUrl: 'app/views/fileFormatter.html',
   selector: 'fileFormat',
   directives: [FileInput]
})

export class FileFormatComponent implements OnInit {

    baseFile = {
      title: 'XML text',
      text: "",
      textUpdate: function(event) {
        this.text = event.text;
      }
    }

		formatted = false
		formatError = ''

		escape(string, regEx, escapeMap) {
		  return ('' + string).replace(regEx, function(match) {
		    return escapeMap[match];
		  });
		}

		htmlEscapeMap = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#x27;',
			'/': '&#x2F;'
		}

		depth = 0

		appendElement(str, addToLast, elm) {
				var div;
				str = this.escape(str, /[&<>"'\/]/g, this.htmlEscapeMap);
				if(addToLast) {
					div = elm.lastChild;
					div.innerHTML += str;
				} else {
					div = document.createElement('div');
					for(var x = 0; x < this.depth*4; x++) {
							div.innerHTML += '&nbsp;';
					}
					div.innerHTML += str;
					elm.appendChild(div);
				}
		}

    constructor() {}

		ngOnInit() {}

    formatFile() {
			var text = '';
			this.formatted = false;
			this.formatError = '';
			if(!this.baseFile.text) {
				return;
			}
			text = this.baseFile.text;
			if(!validateXMLString(text)) {
				this.formatError = "XML is not valid";
				return;
			}
      var tokens = text.replace(/>\s{0,}</g,"><")
         .replace(/</g,"%@%@<")
         .replace(/xmlns\:/g,"%@%@xmlns:")
         .replace(/xmlns\=/g,"%@%@xmlns=")
         .split('%@%@'),
 				len = tokens.length,
				commented = false,
				formatElm = document.getElementById('formatView');

			formatElm.innerHTML = '';

			this.depth = 0;
      for(var i=0; i<len; i++) {
        // start comment or <![CDATA[...]]> or <!DOCTYPE //
        if(tokens[i].search(/<!/) > -1) {
          this.appendElement(tokens[i], false, formatElm);
          commented = true;
          // end comment  or <![CDATA[...]]> //
          if(tokens[i].search(/-->/) > -1 || tokens[i].search(/\]>/) > -1 || tokens[i].search(/!DOCTYPE/) > -1 ) {
            commented = false;
          }
        } else if(tokens[i].search(/-->/) > -1 || tokens[i].search(/\]>/) > -1) {
					// end comment  or <![CDATA[...]]> //s
          this.appendElement(tokens[i], true, formatElm);
          commented = false;
        } else if( /^<\w/.exec(tokens[i-1]) && /^<\/\w/.exec(tokens[i]) &&
          /^<[\w:\-\.\,]+/.exec(tokens[i-1]) == /^<\/[\w:\-\.\,]+/.exec(tokens[i])[0].replace('/','')) {
	          // <elm></elm> //
          	this.appendElement(tokens[i], true, formatElm);
          	if(!commented) this.depth--;
        } else
         // <elm> //
        if(tokens[i].search(/<\w/) > -1 && tokens[i].search(/<\//) == -1 && tokens[i].search(/\/>/) == -1 ) {
          if(!commented ) {
            this.depth++;
          }
					this.appendElement(tokens[i], commented, formatElm);
        } else
         // <elm>...</elm> //
        if(tokens[i].search(/<\w/) > -1 && tokens[i].search(/<\//) > -1) {
					this.appendElement(tokens[i], commented, formatElm);
        } else
        // </elm> //
        if(tokens[i].search(/<\//) > -1) {
					if(!commented) {
						--this.depth;
					}
					this.appendElement(tokens[i], commented, formatElm);
        } else
        // <elm/> //
        if(tokens[i].search(/\/>/) > -1 ) {
					this.appendElement(tokens[i], commented, formatElm);
        } else
        // <? xml ... ?> //
        if(tokens[i].search(/<\?/) > -1) {
					this.appendElement(tokens[i], false, formatElm);
        } else
        // xmlns //
        if( tokens[i].search(/xmlns\:/) > -1  || tokens[i].search(/xmlns\=/) > -1) {
					this.appendElement(tokens[i], false, formatElm);
        } else if(tokens[i]){
          this.appendElement(tokens[i], true, formatElm);
        }
      }

			this.formatted = true;

    }

}
