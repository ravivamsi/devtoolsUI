export function validateXMLString(xmlStr) {
  // code for IE
  if (window.ActiveXObject) {
    var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async=false;
    xmlDoc.loadXML(xmlStr);

    if(xmlDoc.parseError.errorCode != 0){
      return false;
    } else {
      return true;
    }
  } else if (document.implementation.createDocument) {
    // code for Mozilla, Firefox, Opera, etc.
    var parser = new DOMParser(),
      xmlDoc:any = parser.parseFromString(xmlStr, "text/xml");

    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
      return false;
    } else {
      return true;
    }
  }
}

export function isUrl(text) {
  var pattern = new RegExp('(https?:\/\/)+'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,})','i'); // domain name
  if(!pattern.test(text)) {
    return false;
  } else {
    return true;
  }
}
