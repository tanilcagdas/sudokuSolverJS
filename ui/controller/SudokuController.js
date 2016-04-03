
	//String className="main.java.server.BrainImpl";
	// BrainIF brain;
	
	/* static Sudoku sudoku;*/
	
	 var sudokuSolution;
	
	 /*boolean sudokuCorrect;
	
	 long selectedSudokuId;
	 int selectedSudokuLevel;*/
	
	
	

		//brain = (BrainIF) BrainIF.class.forName(className).newInstance();
		reset();


	function action(){
		sudokuSolution=solveSudoku(sudoku);
		return "succes";
	}

	function solveStepByStep1(){
		solveStepByStep( 1);
		return "succes";
	}
	function solveStepByStep2(){
		solveStepByStep( 2);
		return "succes";
	}
	function solveStepByStep( algorithm){
		if(!startedSolving()){
			sudokuSolution=solveSudokuStepByStep(sudoku, algorithm);
		}else{
			sudokuSolution=solveSudokuStepByStep(sudokuSolution, algorithm);
		}
		return "succes";
	}

	function startedSolving() {
		for ( i = 0; i < 9; i++) {
			for ( j = 0; j < 9; j++) {
				cell = sudokuSolution.getRowArray().get(i).getGroup().get(j);
				if(cell.getValue() != 0){
					return true;
				}
			}
		};
		return false;
    };
    function reset(){
		sudoku= new Sudoku();
		sudokuSolution = new Sudoku();
		return null;
    }
    function loadDemoSudoku(){
		reset();
		sudoku = brain.loadDemoSudoku(sudoku);
		return null;
    }
    function loadWebSudoku() {
		reset();
		sudoku = Parser.parseWebSudoku(0,selectedSudokuLevel);
		return null;
    }
    function loadCustomWebSudoku() {
		reset();
		sudoku = Parser.parseWebSudoku(getSelectedSudokuId(),getSelectedSudokuLevel());
		return null;
    }
    function loadUnSolvedSudoku() {
		reset();
		sudoku = NotSolvedWriter.readANonSolvedSudoku();
		return null;
	}

	function isSudokuCorrect() {
		if(startedSolving()){
			return 	brain.isSudokuCorrect(sudokuSolution);
		}else {
			return false;
		}
    }
    /**
	 * @param sudokuCorrect the sudokuCorrect to set
	 */
	function setSudokuCorrect(sudokuCorrect) {
		this.sudokuCorrect = sudokuCorrect;
	}

	function getDemoSudoku() {
		return sudoku;
	}

	function setDemoSudoku( demoSudoku) {
		SudokuController.sudoku = demoSudoku;
	}
	function getSudokuSolution() {
		return sudokuSolution;
	}
	function setSudokuSolution( sudokuSolution) {
		SudokuController.sudokuSolution = sudokuSolution;
	}

	function getSelectedSudokuId() {
		return selectedSudokuId;
	}

	function setSelectedSudokuId( selectedSudokuId) {
		this.selectedSudokuId = selectedSudokuId;
	}

	function getSelectedSudokuLevel() {
		return selectedSudokuLevel;
	}

	function setSelectedSudokuLevel( selectedSudokuLevel) {
		this.selectedSudokuLevel = selectedSudokuLevel;
	} 

