//=================================================================
//   This program requires the "asciichart" npm module
//=================================================================

var asciichart = require("asciichart");

//=================================================================
//=========================== Sin Wave ============================
//=================================================================
var s0 = new Array(120);
var config = {
 
    offset:  3,          // axis offset from the left (min 2)
    height:  10,         // any height you want
 
}
for(var i=0; i< s0.length; i++){
    s0[i] = 15 * Math.sin(i*((Math.PI * 8)/s0.length));
}
console.log("\n\n\n")
console.log("------ Sin Wave ------")
console.log(asciichart.plot(s0,config));
//=================================================================
//========================== Line (y=8x) ==========================
//=================================================================
var s1 = new Array(120);
for(var i=0; i< s1.length; i++){
    s1[i] = 8*i;
}
console.log("\n\n\n")
console.log("------ Line: Y=8x ------")
console.log(asciichart.plot(s1,config));
//=================================================================
//==================== Cubic Function (y=2x^3) ====================
//=================================================================
var s2 = new Array(120);
for(var i=0; i< s2.length; i++){
    s2[i] = 2*i**3;
}
console.log("\n\n\n")
console.log("------ Cubic: Y=2x^3 ------")
console.log(asciichart.plot(s2,config));

//=================================================================
//===================== Bottom Half of Circle =====================
//=================================================================
var s3 = new Array(121);
var r = (s3.length-1)/2;
// console.log("r:", r)
for(var i=0; i< s3.length; i++){
    s3[i] = r-Math.sqrt(r**2-(i-r)**2);
}
// console.log(s3)
console.log("\n\n\n")
console.log("------ Bottom Half of Circle: (X-10)^2 + (Y-10)^2 = 100 ------")
console.log(asciichart.plot(s3,config));
