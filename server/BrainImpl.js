



    var RED = "red";
	var BLUE = "blue";
	var ROW = "row";
	var ALL = "all";
	var COLUMN = "column";
	var THREExTHREE = "3x3";
	var DEFAULT_GUESSES;
	var trial;
	var sudokuCorrect = true;

	function defaultGuesses(){
		var arr= [];
		var i ;
		for ( i = 1; i < 10; i++)
		arr.push(i);
		return arr;
	}
	/*	= new ArrayList<Integer>();

	private int trial;
	{
		if (DEFAULT_GUESSES.size() == 0) {
			for (int i = 1; i < 10; i++)
				DEFAULT_GUESSES.push(i);

		}
	}
	private boolean sudokuCorrect;*/

	function solveSudoku( sudoku) {
		var sudokuSolution ;
            /*= new Sudoku();*/
		sudokuSolution = sudoku.copy();
		sudokuSolution.sudokuHasChanged = true;
		try {
			evaluateGuesses(sudokuSolution);
		} catch (e) {
			console.error("Error Ocured", e);
		}
		//  Solve the f.cking sudoku

		//  Check if the sudoku has changed
		trial = 1;
		while (sudokuSolution.sudokuHasChanged) {
			while (sudokuSolution.sudokuHasChanged) {
				solveSudokuByAlgorithm1(sudokuSolution);
			}
			solveSudokuByAlgorithm2(sudokuSolution);

		}
		if (!sudokuSolution.solved) {
			try {
				//TODO NotSolvedWriter.log(sudoku, sudokuSolution);
			} catch (e) {
				console.error( "Error Ocured", e);
			}
		}
		return sudokuSolution;
	}

	function solveSudokuStepByStep( sudokuSolution, algorithm) {
		try {
			evaluateGuesses(sudokuSolution);
		} catch ( e) {
			console.error( "Error Ocured", e);
		}

		//  Check if the sudoku has changed
		trial = 1;

		//  reflection
		var methodName = "solveSudokuByAlgorithm" + algorithm;
		try {

			this[methodName](this,  sudokuSolution);

		} catch (e) {
			console.error("Error Ocured", e);
		} 
		return sudokuSolution;
	}

	function solveSudokuByAlgorithm1( sudokuSolution) {
		sudokuSolution.sudokuHasChanged = false;
		try {
			clearGuessesInGroupOfSudoku(sudokuSolution);
		} catch (e) {
			console.error("Error Ocured", e);
		}
		try {
			determineCellsWhoHas1Guess(sudokuSolution);
		} catch (e) {
			console.error( "Error Ocured", e);
		}
		if (sudokuSolution.howManyCellsLeft  == 0) {
			sudokuSolution.setSolved(true);
			sudokuSolution.setSudokuHasChanged(false);
            console.log("Sudoku is solved");
			return sudokuSolution;
		}
        console.log("This is the trial number: " + trial);
		trial++;
		return sudokuSolution;
	}

	function solveSudokuByAlgorithm2( sudokuSolution) {
		if (sudokuSolution.howManyCellsLeft != 0)
			try {
				determineWhoHasUniqueGuessInGroup(sudokuSolution);
			} 
			catch (e) {

				//if(e.getCause() instanceof SudokuException){
					console.error(e);
					return sudokuSolution;
				//}else {
				//	console.log(Level.SEVERE, "Error Ocured", e);
				//}

			}
		// 
		if (sudokuSolution.getHowManyCellsLeft() == 0) {
			sudokuSolution.setSolved(true);
			sudokuSolution.setSudokuHasChanged(false);
			console.log("Sudoku is solved");
			return sudokuSolution;
		}
		return sudokuSolution;
	}

	function loadDemoSudoku( demoSudoku) {
		//  set all zeros
        var row;
			for ( row = 0; row < demoSudoku.getRowArray().length; row++) {
            var column;
			for ( column = 0; column < demoSudoku.getRowArray()[row]
					.getGroup().length; column++)
				var cell = demoSudoku.getRowArray()[row].getGroup()[column];
				cell.setValue(0);
		}
		//  put known values
		
		loadSudoku1(demoSudoku);

		return demoSudoku;

	}

	function methodRange( sudoku,  methodName,  range){
		var method;
		if (range === ALL ) {
			//method = getClass().getDeclaredMethod(methodName, Cell.class);
            var row;
			for ( row = 0; row < 9; row++) {
                var columnIndex;
				for ( columnIndex = 0; columnIndex < 9; columnIndex++) {
					var cell = sudoku.rowArray[row].group[columnIndex];
					//method.invoke(this, cell);

					this[methodName](  cell);
				}
			}
		} else {
			var str = null;
			//method = getClass().getDeclaredMethod(methodName, Group.class);
			if (methodName === "clearGuessesInGroup")
				str = "Clearing guesses";
			else if (methodName === "determineWhoHasUniqueGuessInGroup")
				str = "Determining Who Has Unique Guess In Group";

			var group = null;
            var i;
			for ( i = 0; i < 9; i++) {
				if (range === ROW) {
					group = sudoku.getRowArray()[i];
				} else if (range === COLUMN ) {
					group = sudoku.getColumnArray()[i];
				} else if (range === "3x3") {
					group = sudoku.getThreeByThreeArray()[i];
				}
				// console.log(str + " from " + range +
				// " with the index of: " + i);
				//method.invoke(this, group);
				this[methodName](  group);
			}
		}
	}

	function  evaluateGuessesForCell( cell) {
		if (cell.getValue() == 0) {
			cell.setGuesses( defaultGuesses());
		} else {
			cell.setFound(true);
		}

		// console.log(cell.getValue() + ", " + cell.isFound());
	}

	function  clearGuessesInGroup( group) {
		var foundValuesInGroup =[];
		var i;
		for ( i = 0; i < 9; i++) {
			if (group.getGroup()[i].getValue() != 0) {
				foundValuesInGroup.push(group.getGroup()[i].getValue());
			}
		}
        var foundValues;
		for ( foundValues in foundValuesInGroup) {
            var groupidx;
			for ( groupidx = 0; groupidx < 9; groupidx++) {
                var gssidx;
				for ( gssidx = 0; gssidx < 9; gssidx++) {
					var Guesses = null;
					try {
						Guesses = group.getGroup()[groupidx].getGuesses();
					} catch (e) {
						console.error( "Error Ocured", e);
					}
					if (Guesses != null && Guesses.length > gssidx
							&& Guesses[gssidx] == foundValues) {
						group.getGroup()[groupidx].getGuesses()
								.splice(gssidx, 1);
						if (group.sudoku.sudokuHasChanged === false) {
							group.sudoku.sudokuHasChanged = true;
						}


					}
				}
			}

		}
	};

	function  determineCellsWhoHas1GuessForCell( cell){
		if (cell.getValue() === 0 && cell.getGuesses() != null
				&& cell.getGuesses().length === 1) {
			var value = cell.getGuesses().get(0);
			cell.setValue(value);
			cell.setColor(RED);
			if (cell.getRow().sudoku.sudokuHasChanged === false) {
				cell.getRow().sudoku.sudokuHasChanged = true;
				console.log("sudoku has changed value has been found");
			}
		}
	}


	function  determineWhoHasUniqueGuessInGroupForGroup( group) {
		var number ;

		for ( number = 1; number < 10; number++) {
			var uniqueGuessCount = 0;
            var cell;
			for ( cell in  group.getGroup()) {
				if (cell.guesses != null) {
                    var guess;
					for ( guess in cell.getGuesses()) {
						if (guess == number) {
							uniqueGuessCount++;
						}
					}
				}
			}
			if (uniqueGuessCount == 1) {
                var cell;
				for (cell in group.getGroup()) {
					if(cell.value()==number){
//						console.log("The number : " + number +" is a unique guess but it exists in the group");
						return;
					}
				}
				
				
				markAsUniqueGuessAndDetermine(number, group);
				setSudokuCorrect(true);
				isSudokuCorrect(group);
				if(!isSudokuCorrect()){
					throw new SudokuException("Sudoku is not Correct after markAsUniqueGuessAndDetermine number : " +number+", group : "+group );
				}
			};
		}
	}

	function  markAsUniqueGuessAndDetermine( number,  group) {
        var i;
		for ( i = 0; i < 9; i++) {
			var cell = group.getGroup().get(i);
			if (cell.getGuesses() != null) {
                var guess;
				for (guess in cell.getGuesses()) {
					if (guess == number) {
						// TODO check others
                        var j;
						for ( j = 0; j < 9; j++) {
							if (i == j)
								continue;
							var compareCell = group.getGroup().get(j);
							if (compareCell.getGuesses() != null) {
                                var compareGuess;
							for (compareGuess in compareCell.getGuesses()) {
								if (compareGuess == number) {
									return;
								}
							}
							};
						}
						cell.setValue(number);
						cell.setColor(BLUE);
						group.getSudoku().setSudokuHasChanged(true);
						break;
					};
				}
			};
		}
	};

	function  evaluateGuesses( sudoku) {
		methodRange(sudoku, "evaluateGuessesForCell", ALL);
	}

	function  clearGuessesInGroupOfSudoku( sudoku) {
		methodRange(sudoku, "clearGuessesInGroup", ROW);
		methodRange(sudoku, "clearGuessesInGroup", COLUMN);
		methodRange(sudoku, "clearGuessesInGroup", "3x3");
	}

	function  determineCellsWhoHas1Guess( sudokuSolution) {
		methodRange(sudokuSolution, "determineCellsWhoHas1GuessForCell", ALL);
		console.log(sudokuSolution.getHowManyCellsLeft()
				+ " Cells is waiting to be solved");
	}


	function determineWhoHasUniqueGuessInGroup( sudokuSolution) {
		methodRange(sudokuSolution, "determineWhoHasUniqueGuessInGroupForGroup", ROW);
		methodRange(sudokuSolution, "determineWhoHasUniqueGuessInGroupForGroup",
				COLUMN);
		methodRange(sudokuSolution, "determineWhoHasUniqueGuessInGroupForGroup", "3x3");

	}

	

	/*function  isSudokuCorrect(Sudoku sudoku) throws SecurityException, NoSuchMethodException, IllegalArgumentException, IllegalAccessException, InvocationTargetException{
		setSudokuCorrect(true);
		methodRange(sudoku, "isSudokuCorrect",ROW);
		if(isSudokuCorrect())
		methodRange(sudoku, "isSudokuCorrect",COLUMN);
		if(isSudokuCorrect())
		methodRange(sudoku, "isSudokuCorrect",THREExTHREE);
		return isSudokuCorrect();
	}*/

	function isSudokuCorrect( group) {
		var i;
        for ( i = 0; i < 9; i++) {
			var uniqueValue = group.getGroup().get(i).getValue();
			if(uniqueValue == 0){
				continue;
			}
            var j;
			for ( j = 0; j < 9; j++) {
				if(i==j)
					continue;
				var compareValue = group.getGroup().get(j).getValue();
				if(compareValue == uniqueValue){
					setSudokuCorrect(false);

				}
			}
			
		}
	}

	/**
	 * @return the sudokuCorrect
	 */
	function  isSudokuCorrect() {
		return sudokuCorrect;
	}

	/**
	 * @param sudokuCorrect the sudokuCorrect to set
	 */
	function  setSudokuCorrect( sudokuCorrect) {
		this.sudokuCorrect = sudokuCorrect;
	}


