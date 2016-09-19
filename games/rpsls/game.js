// # = Name - Beats
//-----------------
// 1 = Rock - 3, 4
// 2 = Paper - 1, 5
// 3 = Scissors - 2, 4
// 4 = Lizard - 2, 5
// 5 = Spock - 1, 3
//====================
// # = result
//-------------------
// 1 = tie
// 2 = lose
// 3 = win
//====================
runGame = function(id) {
	var computer = getComputer();
	var result;
	if (id === computer) {
		result = 1;
	} else if (id === 1) {
		if (id === 2 || id === 5) {
			result = 2;
		} else {
			result = 3;
		}
	} else if (id === 2) {
		if (id === 3 || id === 4) {
			result = 2;
		} else {
			result = 3;
		}
	} else if (id === 3) {
		if (id === 1 || id === 5) {
			result = 2;
		} else {
			result = 3;
		}
	} else if (id === 4) {
		if (id === 1 || id === 3) {
			result = 2;
		} else {
			result = 3;
		}
	} else if (id === 5) {
		if (id === 2 || id === 4) {
			result = 2;
		} else {
			result = 3;
		}
	}
	
	if (result === 1) {
		window.alert("Tie game!");
	} else if (result === 2) {
		window.alert("You lost!");
	} else {
		window.alert("You won!");
	}
}

var getComputer = function() {
	var number = Math.round(Math.random()*10);
	var choice = getChoice(number);
	return choice;
}

var getChoice = function(number) {
	if (number === 2) {
		number = number/2;
	} else if (number === 4) {
		number = number/2;
	} else if (number === 6) {
		number = number/2;
	} else if (number === 8) {
		number = number/2;
	} else if (number === 10) {
		number = number/2;
	}
	
	return number;
}