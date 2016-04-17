

	function changeValue( sudoku, rowIndex, columnIndex, value){
		var row =sudoku.getRowArray()[rowIndex]
			var group = row.getGroup()
		var cell =group[columnIndex];
	cell = value;
	return sudoku;
}
	
	function loadSudoku1( sudoku){

		   
		   changeValue(sudoku, 0, 0, 9);
		   changeValue(sudoku, 0, 3, 3);
		   changeValue(sudoku, 0, 6, 5);
		   changeValue(sudoku, 0, 8, 7);
		   
 
		   
		   changeValue(sudoku, 1, 1, 8);
		   changeValue(sudoku, 1, 2, 7);
		   changeValue(sudoku, 1, 5, 1);
		   changeValue(sudoku, 1, 6, 3);
		   changeValue(sudoku, 1, 7, 4);
		   

		   
		   changeValue(sudoku, 2, 0, 5);
		   changeValue(sudoku, 2, 1, 4);
		   changeValue(sudoku, 2, 5, 6);
		   changeValue(sudoku, 2, 7, 2);
		  

		   
		   changeValue(sudoku, 3, 1, 7);
		   changeValue(sudoku, 3, 2, 6);
		   changeValue(sudoku, 3, 3, 2);
		   changeValue(sudoku, 3, 5, 8);
		   changeValue(sudoku, 3, 8, 3);
		   

		   
		   changeValue(sudoku, 4, 4, 4);
		   

		   changeValue(sudoku, 5, 0, 4);
		   changeValue(sudoku, 5, 3, 6);
		   changeValue(sudoku, 5, 5, 5);
		   changeValue(sudoku, 5, 6, 1);
		   changeValue(sudoku, 5, 7, 7);

		   
		   changeValue(sudoku, 6, 1, 9);
		   changeValue(sudoku, 6, 3, 8);
		   changeValue(sudoku, 6, 7, 6);
		   changeValue(sudoku, 6, 8, 5);

		   
		   changeValue(sudoku, 7, 1, 1);
		   changeValue(sudoku, 7, 2, 8);
		   changeValue(sudoku, 7, 3, 5);
		   changeValue(sudoku, 7, 6, 2);
		   changeValue(sudoku, 7, 7, 3);

		   
		   changeValue(sudoku, 8, 0, 7);
		   changeValue(sudoku, 8, 2, 2);
		   changeValue(sudoku, 8, 5, 3);
		   changeValue(sudoku, 8, 8, 9);

		   sudoku.setHowManyCellsLeft(44);
			return sudoku;   
			}
		