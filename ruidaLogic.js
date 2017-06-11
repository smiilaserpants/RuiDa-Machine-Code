Array.prototype.extend = function (other_array) {
  other_array.forEach(function(v) {this.push(v)}, this);
}

var myLSpan = document.getElementById('myLeftSpan');
var myRSpan = document.getElementById('myRightSpan');
var myMessageArea = document.getElementById('myMessage');
var myNrArea = document.getElementById('myNr');
var myHexArea = document.getElementById('myHex');
var myDescArea = document.getElementById('myDescription');
var myModal = document.getElementById('myDownloadModal');
var myDownload = document.getElementById('download');
var myInfo = document.getElementById('myInfoModal');
//var click = document.getElementById('click');
var close = document.getElementsByClassName("close")[0];
var fileName = document.getElementById('fileName');

var openFile = function(event) {
  var input = event.target;
  var myFile = input.files[0];
  var reader = new FileReader();
  var msg;
  //console.log('Load file: ' + myFile.name);
  reader.onload = function(){
    if (input.files && myFile) {
      var uint8Array  = new Uint8Array(reader.result);
      console.log('Bytes: '  + reader.result.byteLength);
      msg = createMsgString(descramble(uint8Array));
      myNrArea.value = msg[0];
      myMessageArea.value = msg[1];
      myDescArea.value = msg[2];
      myHexArea.value = msg[3];
      autoresize(myNrArea, myMessageArea, myDescArea, myHexArea);
      setLeftSpan(2, myFile.name);
      setRightSpan();
    };
  };
  reader.readAsArrayBuffer(myFile);
};

window.onload = setLeftSpan(1, null);
function setLeftSpan(tag, text) {
  switch (tag) {
    case 1:
      myLSpan.style.color = "blue";
      myLSpan.innerHTML = "&larr; Please open a rd-file.";
      break;
    case 2:
      myLSpan.style.color = "grey";
      myLSpan.innerHTML = "&nbsp; &nbsp; Current file: " + text;
      break;
    default:
      myLSpan.innerHTML = "&larr; &rarr;";
  }
}
function setRightSpan() {
  setRightSpan.notFirstTime = setRightSpan.notFirstTime || false;

  if (setRightSpan.notFirstTime) {
    myRSpan.innerHTML = "";
  }
  else if (myLSpan.textContent.includes("Current")) {
    setRightSpan.notFirstTime = true;
    myRSpan.style.textAlign = "right";
    myRSpan.style.color = "blue";
    myRSpan.innerHTML = "Learn about the brackets &rarr;";
  }
}
function info() {
  myInfo.style.visibility = "visible";
}
function infoClear() {
  myInfo.style.visibility = "hidden";
  setRightSpan();
}
function download() {
//  myDownload.href = "data:text/plain;charset=utf-8," + prepareForSave(myMessageArea.value);
//  saveByteArray([prepareForSave(myMessageArea.value)], "test.rd");
  //myDownload.href = "data:text/plain;charset=utf-8," + encodeURIComponent(myHexArea.value); // here line brakes will be included
//  myDownload.href = "data:application/octet-stream;base64," + myHexArea.value ;

  myModal.style.visibility = 'visible';
//  myDownload.style.visibility = "visible";
}
function downloadReady() {
  //myDownload.style.visibility = "visible";
  //myModal.style.visibility = 'visible';
  saveByteArray([prepareForSave(myMessageArea.value)], myDownload.download);
}
function clear() {
  myModal.style.visibility = 'hidden';
  fileName.value = "";
}
// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  clear();
}
myDownload.onclick = function() {
  clear();
}
fileName.onchange = function() {
  myDownload.download = fileName.value;
  //console.log("File name: "+ fileName.value);
}

function saveByteArray(data, name) {
  var blob = new Blob(data, {type: 'octet-stream'}),
      url = URL.createObjectURL(blob);
  myDownload.href = url;
  myDownload.download = name;
  myDownload.click();
  window.URL.revokeObjectURL(url);
};

function prepareForSave(text) {
  //console.log("Save this: " + text);
  var reg = /\r|\r\n|\n/;
  var lines = text.split(reg);
  var returnArray = [];
  var i, len = lines.length;
  var ignore = 0;

  console.log("Save proc. started. Nr of lines: " + len);
  for (i = 0; i < len; i++) {
    if (lines[i].includes("(") && lines[i].includes(")")) {
      // Hex line
      returnArray.extend(splitHexLine(lines[i]));
    }
    else if (lines[i].includes("<") && lines[i].includes(">")) {
      //console.log(lines[i]);
      // Formatted line.
      var ret = formatted(lines[i]);
      console.log("Formatted: " + myPrint(ret));
      returnArray.extend(ret);
    }
    else {
      // Unknown - Ignore line
      ignore++;
    }
    //console.log("V: " + hex);
  }

  //console.log("Result: " + returnArray);
  var rArray = new Uint8Array(returnArray);
  var byteArray = new Uint8Array(returnArray.length);
  for (var x = 0; x < byteArray.length; x++){
      byteArray[x] = returnArray[x];
  }
  return byteArray;
}

function myPrint(array) {
  var st = '';
  for (var i = 0; i < array.length; i++) {
    st += array[i].toString(16) + ' ';
  }
  return st;
}

function splitHexLine(line) {
  var returnArray = [];
  var reg = /\s|\(|\)/;
  var splity = line.split(reg);
  var i, len = splity.length;

  for (i = 0; i < len; i++) {
    if (splity[i] != "") {
      returnArray.push(scrambleByte(parseInt(splity[i], 16)));
    }
  }
  //  console.log(returnArray);

  return new Uint8Array(returnArray);
}

function formatted(line) {
  var returnArray = [];
  var reg = /\<|\>/;
  var splity = line.split(reg);
  var i, len = splity.length;
  var msgP;

  msgP = messageProperties[splity[1]];
  // Write message type
  if (msgP != null) {
    //console.log(splity);
    returnArray.push(scrambleByte(parseInt(splity[1].substring(0,2), 16)));
    if (splity[1].length > 3) {
      returnArray.push(scrambleByte(parseInt(splity[1].substring(3), 16)));
    }

    switch (msgP[0]) {
      case 0:
        //console.log("Type 0: ");
        returnArray.extend(encodeDataType0(splity[2], msgP));
        break;
      case 1:
        //console.log("Type 1: ");
        returnArray.extend(encodeDataType1(splity[2], msgP));
        break;
      default:

    }
  }
  else {
    // Typo??
  }

  return new Uint8Array(returnArray);
}

function encodeDataType0(data, msgP) {
  var returnArray = [];
  var reg = /\[|\]/;
  var splity = data.split(reg);
  var s = 1;
  var i;
  var crap;

  //console.log(splity);
  if (msgP[1]) {
    //console.log("LAYER: " + parseInt(splity[1].substring(0,2), 16));
    returnArray.push(scrambleByte(parseInt(splity[1].substring(0,2), 16)));
    s = 3;
  }

  for (i = 0; i < msgP[2]; i++) {
    //console.log(splity[s]);
    crap = parseInt(parseFloat(splity[s])/parseFloat(msgP[6]));
  //  console.log("Crap: " + crap + " hex: " + crap.toString(16)
  //    + " length: " + crap.toString().length);

    returnArray.extend(splitAndShift(crap, msgP[3]));
    s += 2;
  }
  return returnArray;
}

function encodeDataType1(data, msgP) {
  var returnArray = [];
  var reg = /\[|\]/;
  var splity = data.split(reg);
  var s = 1;
  var i;
  //console.log(splity);
  if (msgP[1]) {
    returnArray.push(scrambleByte(parseInt(splity[1].substring(0,2), 16)));
    s = 3;
  }
  returnArray.push(scrambleByte(parseInt(splity[s], 16)));
  return returnArray;
}

function splitAndShift(value, nrOfBytes) {
var returnArray = [];
var byte;
var i;
var start = nrOfBytes - 1;

for (i = start; i >= 0; i--) {
  byte = ((value >>> (7 * i)) & 0x7F).toString();
  //console.log("Shift byte: " + byte);
  returnArray.push(scrambleByte(parseInt(byte)));
}
return returnArray;
}

function descramble(array) {
  var magic = 0x88;
  var a, b, i;
  var aLength = array.length;
  var returnArray = new Uint8Array(aLength);

  for (i = 0; i < aLength; i++) {
    a = (array[i] + 0xFF) & 0xFF; //subtract 1 with wrap-around
    b = a ^ magic; //bit-wise exclusive OR with magic number
    //swap first and last bit
    returnArray[i] = (b & 0x7E) | ((b >> 7) & 0x01) | ((b << 7) & 0x80);
  /*  console.log('Return: ' + returnArray[i] +
    ', Hex: ' + returnArray[i].toString(16) +
    ', Binary: ' + returnArray[i].toString(2));*/
  }
  return returnArray;
}

function scramble(array) {
  var i;
  var aLength = array.length;
  var returnArray = new Uint8Array(aLength);

  for (i = 0; i < aLength; i++) {
    returnArray[i] = scrambleByte(array[i]) ;
  }
  return returnArray;
}

function scrambleByte(byte) {
  var magic = 0x88;
  //swap first and last bit
  var a = (byte & 0x7E) | ((byte >> 7) & 0x01) | ((byte << 7) & 0x80);
  //bit-wise exclusive OR with magic number
  var b = a ^ magic;
  //add 1 with wrap-around
  return (b + 1) & 0xFF;
  //return byte;
}

function createMsgString(array) {
  var result = ["", "", "", ""];
  var mask = 0x80;
  var firstTime = true;
  var tmp = "";
  var decoded;
  var count = 1;
  var i;
  var len = array.length;

  for (i = 0; i < len; i++) {
    if(array[i] & mask) {
      if(firstTime) {
        // start a new message
        firstTime = false;
      }
      else {
        // save message
        decoded = decodeMsgToString(tmp); // Byta namn
        result[0] += count++ + "\n";
        result[1] += decoded[0] + "\n";
        result[2] += decoded[1] + "\n";
        result[3] += decoded[2] + "\n";
      }
      tmp = fixHex(array[i]);
    }
    else {
      tmp += " " + fixHex(array[i]);
    }
    // last index/message - Ugly fix
    if ((i + 1) == len ) {
      // save message
      decoded = decodeMsgToString(tmp); // Byta namn
      result[0] += count++;
      result[1] += decoded[0];
      result[2] += decoded[1];
      result[3] += decoded[2];
    }
  }
  return result;
}

function fixHex(byte) {
  var result = byte.toString(16).toUpperCase();

  if (result.length < 2) {
    result = "0" + result;
  }

  return result;
}

function autoresize(nr, msg, desc, hex) {
  var lines = msg.value.split(/\r|\r\n|\n/);
  //var count = lines.length;
  console.log('Lines: '+ lines.length);
  //msg.style.height = 'auto';
  msg.style.height = msg.scrollHeight+'px';
  msg.scrollTop = msg.scrollHeight;
  nr.style.height = msg.style.height;
  desc.style.height = msg.style.height;
  hex.style.height = msg.style.height;
//window.scrollTo(window.scrollLeft,(this.scrollTop+this.scrollHeight));
}

/*
* Old break point
*/

//  {}
function decodeMsgToString(message) {
  var result = "";
  var msgTypeShort = message.substring(0, 2);
  var msgTypeLong = message.substring(0, 5);

  if (messageProperties[msgTypeShort] != null) {
    result = createResult(msgTypeShort, message);
  }
  else if (messageProperties[msgTypeLong] != null) {
    result = createResult(msgTypeLong, message);
  }
  else {
    result = ["\t\t("+message+")","Uknown.", "("+message+")"];
  }
  return result;
}

function createResult(type, message) {
  var result = ["","",""];
  var msgObj = messageProperties[type];
  var svd = (type.length > 3 ? 6 : 3); // start of value data

  result[0] = "<" + type + ">\t ";
  //Check for layer specific
  if (msgObj[1]) {
    result[0] += "Layer: " + "[" + message.substring(svd, svd+2) + "]\t ";
    svd += 3;
  }
  //Check for mode message, prepare if needed.
  if (msgObj[0] == 1) {
    var modeObj = msgObj[2];
    var mode = message.substring(svd, svd+2);

    if (modeObj[mode] != null) {
      result[0] += "Mode: " + "[" + mode + "]\t ";
      result[1] = modeObj[mode];
    }
    else {
      result[0] += "Mode: " + "[" + mode + "]\t ";
      result[1] = "Unknown Mode.";
    }
  }
  //Prepare standard data value message
  else if (msgObj[0] == 0){
    svd -= 0;
    var i, value, hex = null;
    for (i = 0; i < msgObj[2]; i++) {
      svd += i*msgObj[3]*3;
      hex = message.substring(svd, svd+(msgObj[3]*3));
      value = (msgObj[6] * shifty(hex)).toFixed(msgObj[7]);
      result[0] += msgObj[4][i] + ": [" + value + "]" + msgObj[5] + "\t ";
      //console.log("L: " + hex.length +' V: ' + hex);
      //console.log("V: " + hex);
    }
      result[1] = msgObj[8];
  }
    // Specia myMessageArea
  else if (msgObj[0] == 3){

  }

  result[2] = "(" + message + ")";
  return result;
}

function shifty(message) {
  var bytes = message.split(" ");
  var i, value = 0;
  var shiftIndex = 0;
  var start = bytes.length - 1;

  start -= (bytes[start].length > 0 ? 0 : 1); // end byte fix if we have extra crap

  for (i = start; i >= 0; i--) {
    value = parseInt(bytes[i], 16)  << (7 * shiftIndex++) | value;
  }

  return value;
}

