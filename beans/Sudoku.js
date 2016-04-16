
	
	 var rowArray= [];
	 var columnArray= [];
	 var threeByThreeArray= [];
	 var solved=false;
	 var HowManyCellsLeft=81;
	 var puzzleId;
	 var puzzleLevel;
	 var sudokuHasChanged = false;




	 var Sudoku;
	 Sudoku = function () {
		 var i;
		 for (i = 0; i < 9; i++) {
			 rowArray.push(new Row(this, i));
		 }
		 syncColumnsToRow();
		 syncThreeByThreeSquaresToRow();
		 registerAllObservers();
		 console.log("created new sudoku");
	 };


	 function registerAllObservers() {
		 var row;
		for ( row in rowArray) {
			var cell;
			for ( cell in row.getGroup()) {
				cell.registerObservers();
			}
		}
		
	}


	//GETTERS & SETTERS
	 function getRowArray() {
		if ( rowArray == null){
			rowArray = [];
		}
		return rowArray;
	}
	 function setRowArray(rowArray) {
		this.rowArray = rowArray;
	}
	 function getColumnArray() {
		return columnArray;
	}
	 function setColumnArray( columnArray) {
		this.columnArray = columnArray;
	}
	 function getThreeByThreeArray() {
		return threeByThreeArray;
	}
	 function setThreeByThreeArray( threeByThreeArray) {
		this.threeByThreeArray = threeByThreeArray;
	}
	
	 function isSolved() {
		return solved;
	}


	 function setSolved( solved) {
		this.solved = solved;
	}


	 function getHowManyCellsLeft() {
		return HowManyCellsLeft;
	}


	 function setHowManyCellsLeft( howManyCellsLeft) {
		HowManyCellsLeft = howManyCellsLeft;
	}


	 function  getPuzzleId() {
		return puzzleId;
	}


	 function setPuzzleId( puzzleId) {
		this.puzzleId = puzzleId;
	}




	 function  getPuzzleLevel() {
		return puzzleLevel;
	}


	 function setPuzzleLevel( puzzleLevel) {
		this.puzzleLevel = puzzleLevel;
	}


	 function  syncColumnsToRow(){
		columnArray=[];
		 var rowIndex;
		for( rowIndex=0;rowIndex<9;rowIndex++)
		{
			var columnIndex;
			for( columnIndex=0;columnIndex<9;columnIndex++)
			{
				
					if(columnArray.length<columnIndex+1){
						columnArray.push( new Column(this,columnIndex));
//						console.log("created collumn for row : "+ row +", collumn: "+ collumn );
					}
				var cell;

                var row = rowArray[rowIndex];
                var group = row.group;
                cell = group[columnIndex];
				columnArray[columnIndex].group[rowIndex]= cell;
				cell.column = columnArray[columnIndex];

			}
		}
	}


	 function syncThreeByThreeSquaresToRow() {
		threeByThreeArray.clear();
		
		
		syncThreeByThreeSquaresToRowHelper(0, 3, 0, 3);
		syncThreeByThreeSquaresToRowHelper(0, 3, 3, 6);
		syncThreeByThreeSquaresToRowHelper(0, 3, 6, 9);
		syncThreeByThreeSquaresToRowHelper(3, 6, 0, 3);
		syncThreeByThreeSquaresToRowHelper(3, 6, 3, 6);
		syncThreeByThreeSquaresToRowHelper(3, 6, 6, 9);
		syncThreeByThreeSquaresToRowHelper(6, 9, 0, 3);
		syncThreeByThreeSquaresToRowHelper(6, 9, 3, 6);
		syncThreeByThreeSquaresToRowHelper(6, 9, 6, 9);
		
		
	}

	 function syncThreeByThreeSquaresToRowHelper( rowStart, rowEnd, columnStart, columnEnd){
		var threeByThreeIndex=0;
		var groupCount=0;
		 var rowIndex;
		for( rowIndex=rowStart;rowIndex<rowEnd;rowIndex++)
		{
			var columnIndex;
			for( columnIndex=columnStart;columnIndex<columnEnd;columnIndex++,groupCount++)
			{
				threeByThreeIndex=calculateGroup(rowIndex, columnIndex);
					//alt taraf ok 
					if(threeByThreeArray.length<threeByThreeIndex+1){
						threeByThreeArray.push( new ThreeByThreeSquare(this,threeByThreeIndex));
//						console.log("created ThreeByThreeSquare for group: "+group +", row : "+ row +", collumn: "+ collumn );
					}
					//alt taraf ok
					var cell=rowArray.get(rowIndex).getGroup().get(columnIndex);
					threeByThreeArray.get(threeByThreeIndex).getGroup().set(groupCount, cell);
					cell.setThreeByThreeSquare(threeByThreeArray.get(threeByThreeIndex));
//					Cell leftCell=threeByThreeArray.get(group).getGroup().get(groupCount);
					
//					console.log("For threebythree "+leftCell.equals(rightCell)+" , "+leftCell.toString()+" , "+rightCell.toString());
			}
		}
		
	}

	 function  calculateGroup( row, column){
		var group=0;
		if (row<3&&column<3)group=0;
		else if (row<3&&column<6) group=1;
		else if (row<3&&column<9) group=2;
		else if (row<6&&column<3) group=3;
		else if (row<6&&column<6) group=4;
		else if (row<6&&column<9) group=5;
		else if (row<9&&column<3) group=6;
		else if (row<9&&column<6) group=7;
		else if (row<9&&column<9) group=8;
		
		return group;
	}
	
	/**
	 * @return the sudokuHasChanged
	 */
	function  isSudokuHasChanged() {
		return sudokuHasChanged;
	}


	/**
	 * @param sudokuHasChanged the sudokuHasChanged to set
	 */
	function setSudokuHasChanged( sudokuHasChanged) {
		this.sudokuHasChanged = sudokuHasChanged;
	}


	 function  copy(){
		 //var sudoku=new Sudoku();
		 var i;
		for ( i =0; i<9; i++ ) {
			var row = sudoku.getRowArray().get(i);
			var j;
			for ( j =0; j<9; j++) {
				var cell = row.getGroup().get(j);
				cell.setValue(this.getRowArray().get(i).getGroup().get(j).getValue());
			}
		}
		return sudoku;
	}





	 function  compareTo(o) {
		// TODO Auto-generated method stub
		return 0;
	}
	

	
	
	 /*function  toString() {
		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++) {
				Cell cell = getRowArray().get(i).getGroup().get(j);
				sb.append("Cell ").append(i).append(j).append(" : ");
				sb.append(cell.getValue()).append(" ");
				if (!cell.getColor().equals("black")) {
					sb.append("Guesses : ");
					sb.append(cell.getGuesses()).append(" ");
					sb.append("Color :  ");
					sb.append(cell.getColor()).append(" ");
				}
				sb.append("\n");
			}
		}
		return sb.toString();
	}*/



