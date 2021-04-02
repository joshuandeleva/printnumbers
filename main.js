//program to check if a number is disible by 3 or 5 or both and ist in a range of 1 to 100
const crackPop = () => {
	for (var i = 1; i <= 100; i++) {
		if (i % 15 === 0) {
			console.log("Cracked up");
		} else if (i % 3 === 0) {
			console.log("Cracked pop");
		} else if (i % 5 === 0) {
			console.log("pop");
		} else {
			console.log(i);
		}
	}
};
crackPop();
