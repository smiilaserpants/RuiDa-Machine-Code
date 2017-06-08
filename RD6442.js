var messageProperties = {
/*Type(String) : [typeOfDecode(int), hasLayer(boolean),  nrOfValues(int),
nrOfBytesPerValue(int), ["NameFirstValue", "NameSecondValue", ...],
valueUnit(String), valueScaleFactor(float), nrOfDecimals(int), description(String)]*/
  "88" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Move to Absolute position in relation to the programmed origin (Current/Absolute)."],
  "89" : [0, false, 2, 2, ["X", "Y"], "mm", 0.001, 3,
    "Move to Relative Position."],
  "8A" : [0, false, 1, 2, ["X"], "mm", 0.001, 3,
    "Move to relative X position."],
  "8B" : [0, false, 1, 2, ["Y"], "mm", 0.001, 3,
    "Move to relative Y position."],
  "AA" : [0, false, 1, 2, ["X"], "mm", 0.001, 3,
    "Cut to relative X position."],
  "AB" : [0, false, 1, 2, ["Y"], "mm", 0.001, 3,
    "Cut to relative Y position."],
  "A8" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Cut to Absolute position in relation to the programmed origin (Current/Absolute)."],
  "A9" : [0, false, 2, 2, ["X", "Y"], "mm", 0.001, 3,
    "Cut to Relative position."],
  "CA 02" : [0, true, 0, 0, null, null, null, null,
    "Layer indicator. It succeeds the laser mode (Cut, Scan)."],
  "CA 06" : [0, true, 1, 5, ["Layer color"], "RGB_base10", 1, 0,
    "Layer color in RGB hex. TO DO. fix formating!!!"],
  "C9 02" : [0, false, 1, 5, ["Feed rate"], "mm/s", 0.001, 0,
    "Laser Feed Rate (without layers)"],
  "C9 04" : [0, true, 1, 5, ["Feed rate"], "mm/s", 0.001, 0,
    "Laser Feed Rate (with layers)"],
  "C6 01" : [0, false, 1, 2, ["Laser 1 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (without layers)."],
  "C6 21" : [0, false, 1, 2, ["Laser 2 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (without layers)."],
  "C6 05" : [0, false, 1, 2, ["Laser 3 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (without layers)."],
  "C6 07" : [0, false, 1, 2, ["Laser 4 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (without layers)."],
  "C6 02" : [0, false, 1, 2, ["Laser 1 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (without layers)."],
  "C6 22" : [0, false, 1, 2, ["Laser 2 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (without layers)."],
  "C6 06" : [0, false, 1, 2, ["Laser 3 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (without layers)."],
  "C6 08" : [0, false, 1, 2, ["Laser 4 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (without layers)."],
  "C6 31" : [0, true, 1, 2, ["Laser 1 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (with layers)."],
  "C6 41" : [0, true, 1, 2, ["Laser 2 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (with layers)."],
  "C6 35" : [0, true, 1, 2, ["Laser 3 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (with layers)."],
  "C6 37" : [0, true, 1, 2, ["Laser 4 min power"], "%", 0.006103888, 1,
    "Minimum cutting power (with layers)."],
  "C6 32" : [0, true, 1, 2, ["Laser 1 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (with layers)."],
  "C6 42" : [0, true, 1, 2, ["Laser 2 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (with layers)."],
  "C6 36" : [0, true, 1, 2, ["Laser 3 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (with layers)."],
  "C6 38" : [0, true, 1, 2, ["Laser 4 max power"], "%", 0.006103888, 1,
    "Maximum cutting power (with layers)."],
  "C6 50" : [0, false, 1, 2, ["Laser 1 T.M. power"], "%", 0.006103888, 1,
    "Through Mode power level."],
  "C6 51" : [0, false, 1, 2, ["Laser 2 T.M. power"], "%", 0.006103888, 1,
    "Through Mode power level."],
  "C6 55" : [0, false, 1, 2, ["Laser 3 T.M. power"], "%", 0.006103888, 1,
    "Through Mode power level."],
  "C6 56" : [0, false, 1, 2, ["Laser 4 T.M. power"], "%", 0.006103888, 1,
    "Through Mode power level."],
  "C6 10" : [0, false, 1, 5, ["Pulse time"], "ms", 0.001, 1,
    "GUESS! Pulse. Laser beam active for a number of milliseconds."],
  "C6 12" : [0, false, 1, 2, ["Open delay with T.M."], "ms", 0.001, 1,
    "This is the delay which the beam will hold still at the start of every cut when Through Mode is active.."],
  "C6 13" : [0, false, 1, 2, ["Close delay with T.M."], "ms", 0.001, 1,
    "This is the delay which the beam will hold still at the end of every cut when Through Mode is active."],
  "C6 15" : [0, false, 1, 2, ["Open delay without T.M."], "ms", 0.001, 1,
    "Delay to until igniting laser beam after start of cutting."],
  "C6 16" : [0, false, 1, 2, ["Close delay without T.M."], "ms", 0.001, 1,
    "Delay before the end of cut to turn off the laser."],
  "E7 03" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Total frame, top right corner, seen from the programmed origin. Also depends on system settings (Axis Mirror, Laser Head)."],
  "E7 07" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Total frame, bottom left corner, seen from the programmed origin."],
  "E7 13" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "GUESS, related to F2 03. Total frame, top right corner, seen from the programmed origin. Also depends on system settings."],
  "E7 17" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "GUESS, related to F2 04.Total frame, bottom left corner, seen from the programmed origin."],
  "E7 50" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Total frame, top right corner, seen from the programmed origin. Also depends on system settings (Axis Mirror, Laser Head)."],
  "E7 51" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Total frame, bottom left corner, seen from the programmed origin."],
  "F2 03" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "GUESS, related to F2 03. Total frame, top right corner, seen from the programmed origin. Also depends on system settings."],
  "F2 04" : [0, false, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "GUESS, related to F2 04.Total frame, bottom left corner, seen from the programmed origin."],
  "E7 52" : [0, true, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Layer frame, top right corner, seen from the programmed origin. Also depends on system settings."],
  "E7 53" : [0, true, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Layer frame, bottom left corner, seen from the programmed origin."],
  "E7 61" : [0, true, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Layer frame, top right corner, seen from the programmed origin. Also depends on system settings."],
  "E7 62" : [0, true, 2, 5, ["X", "Y"], "mm", 0.001, 3,
    "Layer frame, bottom left corner, seen from the programmed origin."],
  "C7" : [0, false, 1, 2, ["Ramp starts at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a start value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C2" : [0, false, 1, 2, ["Ramp starts at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a start value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C0" : [0, false, 1, 2, ["Ramp starts at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a start value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C3" : [0, false, 1, 2, ["Ramp starts at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a start value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C8" : [0, false, 1, 2, ["Ramp ends at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a end value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C4" : [0, false, 1, 2, ["Ramp ends at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a end value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C1" : [0, false, 1, 2, ["Ramp ends at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a end value of Laser 1,2,3 or 4. Or a point on a power curve."],
  "C5" : [0, false, 1, 2, ["Ramp ends at this % of set power"], "%", 0.006103888, 1,
    "GUESS! This is either a end value of Laser 1,2,3 or 4. Or a point on a power curve."],
  /*Type(String) : [typeOfDecode(int), hasLayer(boolean), Mode definition] */
  "CA 01" : [1, false, {
          "00" : "Cut Mode (without layers).",
          "01" : "Scan Mode: X-swing (without layers).",
          "02" : "Scan Mode: X-unilateralism (without layers).",
          "03" : "Scan Mode: Y-swing (without layers).",
          "04" : "Scan Mode: Y-unilateralism (without layers).",
          "12" : "Fan Mode: Fan inactive (not blowing).",
          "13" : "Fan Mode: Fan active (blowing)."}],
  "CA 03" : [1, false, {
          "0D" : "Laser 1 selected/activated.",
          "0E" : "Laser 2 selected/activated.",
          "0F" : "Laser 1 & 2 selected/activated."}], // Enough for now.
  "CA 41" : [1, true, {
          "00" : "Cut Mode (with layers).",
          "02" : "Scan Mode: X-swing (with layers).",
          "01" : "Scan Mode: X-unilateralism (with layers).",
          "04" : "Scan Mode: Y-swing (with layers).",
          "03" : "Scan Mode: Y-unilateralism (with layers)."}],
  "D8" : [1, false, {
          "10" : "Origin set to machine zero (Absolute positioning).",
          "11" : "Origin set to .... (Anchor positioning).",
          "12" : "Origin set to local origin (Current positioning)."}],
  "CA 22" : [1, false, {
    // Yes, it is not nice writing 16 possibilities, but works for now.
          "00" : "There is 1 layer in this program.",
          "01" : "There are 2 layers in this program.",
          "02" : "There are 3 layers in this program.",
          "03" : "There are 4 layers in this program.",
          "04" : "There are 5 layers in this program.",
          "05" : "There are 6 layers in this program.",
          "06" : "There are 7 layers in this program.",
          "07" : "There are 8 layers in this program.",
          "08" : "There are 9 layers in this program.",
          "09" : "There are 10 layers in this program.",
          "10" : "There are 11 layers in this program.",
          "11" : "There are 12 layers in this program.",
          "12" : "There are 13 layers in this program.",
          "13" : "There are 14 layers in this program.",
          "14" : "There are 15 layers in this program.",
          "15" : "There are 16 layers in this program."}],
  "CA 10" : [1, false, {
    // Yes, it is not nice writing 16 possibilities, but works for now.
          "01" : "Output 1 active.",
          "02" : "Output 2 active.",
          "03" : "Output 1 & 2 active.",
          "04" : "Output 3 active.",
          "05" : "Output 1 & 3 active.",
          "06" : "Output 2 & 3 active.",
          "07" : "Output 1, 2 & 3 active.",
          "08" : "Output 4 active.",
          "09" : "Output 1 & 4 active.",
          "10" : "Output 2 & 4 active.",
          "11" : "Output 1, 2 & 4 active.",
          "12" : "Output 3 & 4 active.",
          "13" : "Output 1, 3 & 4 active.",
          "14" : "Output 2, 3 & 4 active.",
          "15" : "Output 1, 2, 3 & 4 active.",
          "00" : "All extra Outputs inactive (IO)."}],
  /*Type(String) : [typeOfDecode(int), hasLayer(boolean),  nrOfValues(int),
  nrOfBytesPerValue(int), ["NameFirstValue", "NameSecondValue", ...],
  valueUnit(String), valueScaleFactor(float), nrOfDecimals(int), description(String)]*/
    "888" : [3, false, 2, 1, ["?", "?"], "", 1, 3, 2, 1, ["?", "?"], "", 1, 3,
      "M......"]
};
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