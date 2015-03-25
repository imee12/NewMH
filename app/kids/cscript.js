// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
//(function($) {
	(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		angular.module('kids')
    .controller('kidsController', ['kidsService', function(kidsService){

    var puzzleData = [
			 	{
					clue: "_____ means too much sugar in the blood.",
					answer: "diabetes",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "______ does not work very well in Type 2 diabetes.",
					answer: "insulin",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 2
				},
				//
				// {
				// 	clue: "______ may be a cause of Type 1 diabetes.",
				// 	answer: "genetics",
				// 	position: 5,
				// 	orientation: "across",
				// 	startx: 4,
				// 	starty: 5
				// },
				 {
					clue: "High blood sugars can make you feel very ____.",
					answer: "tired",
					position: 2,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "High blood sugar levels can affect your ____.",
					answer: "eyes",
					position: 4,
					orientation: "across",
					startx: 4,
					starty: 4
				},
				{
					clue: "_____ ______ and exercising are keys to staying well with diabetes.",
					answer: "eatinghealthy",
					position: 5,
					orientation: "across",
					startx: 1,
					starty: 7
				},
{
				clue: "The _____ produces insulin.",
				answer: "pancreas",
				position: 5,
				orientation: "down",
				startx: 9,
				starty: 1
			},
			{
			clue: "Even _____ can get diabetes!",
			answer: "animals",
			position: 7,
			orientation: "across",
			startx: 8,
			starty: 3
		}


			]

		$('#puzzle-wrapper').crossword(puzzleData);

	}]);
});
///})();
