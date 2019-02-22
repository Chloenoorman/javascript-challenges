 // Challenge 1

 function test65(x, y)
{
 return (x == 65 || y == 65) || x + y == 65);
}
console.log(test65(65, 65))
console.log(test65(30, 65))
console.log(test65(30, 30))
console.log(test65(30, 35))

// challenge 2
var side1 = 7;
var side2 = 8;
var side3 = 9;
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

// challenge 3
