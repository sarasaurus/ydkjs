//'use strict';

// function foo(a) {
// 	var b = a;
// 	return a + b;
// }


// var c = foo( 2 );

// console.log("c is wha? ", c);

// function foo(a) {
//     console.log( a + b );
//     b = a;
// }
// foo(2);

///// CHAPTER 2

// function foo(a) {

// 	var b = a * 2;

// 	function bar(c) {
// 		console.log( a, b, c );
// 	}

// 	bar(b * 3);
// }

// foo( 2 );
// // 3 scopes, global (foo), within foo (a and b) and within bar (c)

// function foo(str, a) {
//     eval( str );
//     console.log(a,b);
// }
// var b = 2;
// foo ("var b=3;", 1);
