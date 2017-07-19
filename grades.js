let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// console.log(Math.max(...scores));
// console.log(Math.min(...scores));

// let F = [];
// let D = [];
// let C = [];
// let B = [];
// let A = [];

let currentGrade = "";
let F = 0;
let D = 0;
let C = 0;
let B = 0;
let A = 0;

// function letterGrades(grades) {
	for (let i = 0; i < scores.length; i++) {
		// console.log(grades);
		currentGrade = scores[i];
		// console.log(currentGrade);
		if (currentGrade >= 50 && currentGrade <= 60) {
			F += 1
			
		} else if (currentGrade >= 61 && currentGrade <= 70) {
			
			D += 1 
			
		} else if (currentGrade >= 71 && currentGrade <= 80) {
			
			C += 1 
		} else if (currentGrade >= 81 && currentGrade <= 90) {
			
			B += 1

		} else if (currentGrade >= 91 && currentGrade <= 100) {
			
			A += 1 
			// console.log(letterGrade);
		}
	}

console.log("There are " + A + " As.");
console.log("There are " + B + " Bs.");
console.log("There are " + C + " Cs.");
console.log("There are " + D + " Ds.");
console.log("There are " + F + " Fs.");
console.log(Math.max(...scores));
console.log(Math.min(...scores));

// letterGrades(scores);