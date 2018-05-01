//=================================================================
//   This program requires the "ml-matrix" npm module
//=================================================================

var {
    Matrix,
    inverse,
} = require('ml-matrix');
//=================================================================
//===================== System of 2 Equations =====================
//=================================================================
console.log("---------------------------")
console.log(" System of equations:")
console.log(" Eq-1:  8x + 12y = 52")
console.log(" Eq-2: -8x +  6y = 2 ")
console.log("---------------------------")
var A = new Matrix([[8,12],[-8,6]]);
var B = new Matrix([[52],[2]]);
console.log("Matrix A:", A);
console.log("Matrix B:", B);

var Ainv = inverse(A);
console.log("Inverse of A:", Ainv);
// console.log(A.mmul(Ainv)); // should be eaul to the identity matrix

var X = Ainv.mmul(B);
console.log("Solution Matrix X:", X);

console.log("\n-----------------------------------")
console.log(" Solution")
console.log("x =", X[0][0].toFixed(2))
console.log("y =", X[1][0].toFixed(2))
console.log("------------------------------------")

console.log("\n==========================================================\n==========================================================")
//=================================================================
//===================== System of 4 Equations =====================
//=================================================================
console.log("\n-----------------------------------")
console.log(" System of equations:")
console.log(" Eq-1:   8x + 5y + 2z + 3v =  37")
console.log(" Eq-2:  -5x + 4y - 7z + 2v = -77")
console.log(" Eq-3:   6x +  y + 3z - 4v =  34")
console.log(" Eq-4:  -9x + 5y +  z + 7v = -30")
console.log("------------------------------------")
var A2 = new Matrix([[8,5,2,3],[-5,4,-7,2],[6,1,3,-4],[-9,5,1,7]]);
var B2 = new Matrix([[37],[-77],[34],[-30]]);
console.log("Matrix A2:", A2);
console.log("Matrix B2:", B2);

var A2inv = inverse(A2);
console.log("Inverse of A2:", A2inv);
// console.log(A.mmul(Ainv)); // should be eaul to the identity matrix

var X2 = A2inv.mmul(B2);
console.log("Solution Matrix X2:", X2);

console.log("\n-----------------------------------")
console.log(" Solution")
console.log("x =", X2[0][0].toFixed(2))
console.log("y =", X2[1][0].toFixed(2))
console.log("z =", X2[2][0].toFixed(2))
console.log("v =", X2[3][0].toFixed(2))
console.log("------------------------------------")