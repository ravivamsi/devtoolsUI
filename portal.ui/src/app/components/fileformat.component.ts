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
      title: 'Text',
      text: "",
      textUpdate: function(event) {
        this.text = event.text;
      }
    }

		model = {
			fileType: 'xml'
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
			'/': '&#x2F;',
			' ': '&nbsp;'
		}

		depth = 0

		appendElement(str, addToLast, elm) {
				var div;
				str = this.escape(str, /[&<>"'\s\/]/g, this.htmlEscapeMap);
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

		formatXML(text): any {
			var formatElm = document.createElement('div');
			if(!validateXMLString(text)) {
				throw 'exception';
			}
			var tokens = text.replace(/>\s{0,}</g,"><")
				 .replace(/</g,"%@%@<")
				 .replace(/xmlns\:/g,"%@%@xmlns:")
				 .replace(/xmlns\=/g,"%@%@xmlns=")
				 .split('%@%@'),
				len = tokens.length,
				commented = false;

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
				} else if(tokens[i].search(/<\w/) > -1 && tokens[i].search(/<\//) == -1 && tokens[i].search(/\/>/) == -1 ) {
					// <elm> //
					this.appendElement(tokens[i], commented, formatElm);
					if(!commented ) this.depth++;
				} else if(tokens[i].search(/<\w/) > -1 && tokens[i].search(/<\//) > -1) {
					// <elm>...</elm> //
					this.appendElement(tokens[i], commented, formatElm);
				} else if(tokens[i].search(/<\//) > -1) {
					// </elm> //
					if(!commented) --this.depth;
					this.appendElement(tokens[i], commented, formatElm);
				} else if(tokens[i].search(/\/>/) > -1 ) {
					// <elm/> //
					this.appendElement(tokens[i], commented, formatElm);
				} else if(tokens[i].search(/<\?/) > -1) {
					// <? xml ... ?> //
					this.appendElement(tokens[i], false, formatElm);
				} else if( tokens[i].search(/xmlns\:/) > -1  || tokens[i].search(/xmlns\=/) > -1) {
					// xmlns //
					this.appendElement(tokens[i], false, formatElm);
				} else if(tokens[i]){
					this.appendElement(tokens[i], true, formatElm);
				}
			}
			return formatElm;
		}

		formatJSON(text): any {
			if (typeof JSON === 'undefined' ) return '';
			var step = 4, jsonStr;
			if ( typeof text === "string" ) {
				jsonStr = JSON.parse(text);
			}
			if ( typeof text === "object" ) {
				jsonStr = text;
			}
			var json = JSON.stringify(jsonStr, null, step),
				tokens = json.split(/\n/g),
				formatElm = document.createElement('div');
			this.depth = 0;
			tokens.forEach(function(tkn) {
					this.appendElement(tkn, false, formatElm);
			}.bind(this));
			return formatElm; // text is not string nor object
		}

		formatFileFunc = {
			'xml': 'formatXML',
			'json': 'formatJSON'
		}

    formatFile() {
			var text = '';
			this.formatted = false;
			this.formatError = '';
			if(!this.baseFile.text) {
				return;
			}
			text = this.baseFile.text;
			var formatView = document.getElementById('formatView');
			formatView.innerHTML = '';
			try {
				var formattedText = this[this.formatFileFunc[this.model.fileType]](text);
			} catch(e) {
				this.formatError = "Enter valid " + this.model.fileType + " text";
				return;
			}
			if(formattedText) {
				formatView.appendChild(formattedText);
				this.formatted = true;
			}


    }

}
