let x = 1
let y = 2
let z = 3
console.log("x:", x, "y:", y, "z:", z)

//

fetch('https://raw.githubusercontent.com/hdonapatiCBS/MyTests/main/TCWithYoubora').then(function (response) {
	// The API call was successful!
	console.log('success!', response);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
