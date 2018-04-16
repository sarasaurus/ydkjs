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


//~~~~~~~~~~~~~~~~~~~~~~~CHAPTER 2~~~~~~~~~~~~~~~~~~~~~~~~

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

//~~~~~~~~~~~~~~~~~~~~Chapter 3~~~~~~~~~~~~~~~~~~~~~~
// function foo(a) {
// 	var b = 2;

// 	function bar() {
	
// 	}
// 	var c = 3;
// }
// // bar();
// console.log(a,b,c);

// //not the way to do it
// function foo(a) {
//     b=a + foo2(a*2);
//     console.log(b*3);
// }
// function foo2 (a) {
//     return a-1;
// }
// var b;

// foo(2); 

// //better way
// function foo(a){
//     function foo2(a){
//         return a-1
//     }
//     var b;
//     b=a + foo2(a*2);
//     console.log(b*3);
// }
// foo(2);
var MyReallyCoolLibrary = {
	awesome: "stuff",
	doSomething: function() {
	
	},
	doAnotherThing: function() {
		
	}
};
console.log (awesome);