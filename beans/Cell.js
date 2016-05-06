
class Cell{
	constructor(group){
		if (group instanceof Row) {
			this.setRow(group);
		} else if (group instanceof Column) {
			this.setColumn(group);
		} else if (group instanceof ThreeByThreeSquare) {
			this.setThreeByThreeSquare(group);
		}
		// add guesses
		var DEFAULT_GUESSES = [];
		{
			if (DEFAULT_GUESSES.length == 0) {
				var i;
				for ( i = 1; i < 10; i++)
					DEFAULT_GUESSES.push(i);

			}
		}
		this.guesses = [];
		//var guesses = clone(DEFAULT_GUESSES);
		this.guesses = DEFAULT_GUESSES;
		this.RED = "red";
		this.BLUE = "blue";
		this.row;
		this.column;
		this.threeByThreeSquare;
		this.value;
		this.found;
		this.color = "black";
	//?
	var observers = [];
	}







	registerObservers  (){
		var cell;
		for ( cell in getRow().getGroup()) {
			this.addObserver(cell);
		}
		for ( cell in getColumn().getGroup()) {
			this.addObserver(cell);
		}
		for ( cell in getThreeByThreeSquare().getGroup()) {
			this.addObserver(cell);
		}

	}




	 addObserver(obj){
		observers.push(obj);
		//TODO
	}

	 getValue() {
		return this.value;
	}





	 isFound() {
		return this.found;
	}

	 setFound( found) {
		if (getValue() == 0 && found == false) {
			this.found = found;
		} else if (getValue() != 0 && found == true) {
			this.found = found;
		} else {
			console.log("trying to set cell found to " + found
				+ " but value is " + getValue());
		}
	}

	 getGuesses() {
		return this.guesses;
	}

	 setGuesses(guesses) {
		this.guesses = guesses;
	}


	 getColor() {
		return this.color;
	}

	 setColor( color) {
		this.color = color;
	}

	 getRow() {
		return this.row;
	}

	 setRow( row) {
		this.row = row;
	}

	 getColumn() {
		return this.column;
	}

	 setColumn( column) {
		this.column = column;
	}

	 getThreeByThreeSquare() {
		return this.threeByThreeSquare;
	}

	 setThreeByThreeSquare( threeByThreeSquare) {
		this.threeByThreeSquare = threeByThreeSquare;
	}

	 copy( cell)  {
		this.clone();
	}


	 toString() {
	 //StringBuffer sb = new StringBuffer();
	 //sb.append("Cell value = ");
	 //sb.append(value).append(" ");
	 //sb.append("Cell color = ");
	 //sb.append(color).append(" ");
	 //sb.append("Cell guesses = ");
	 //sb.append(guesses).append(" ");
	 //return sb.toString();
	 return this.value;
	 }

	 update( o,  arg) {
		if (arg instanceof Cell) {
			var cell = arg;
			if (cell == this) {
				return;
			}
			if (cell.found) {
				var foundValue = cell.getValue();
				clearGuess(foundValue);
				// put all the logic here
				// method1
				if (getGuesses() != null && getGuesses().size() == 1) {
//					setValue(getGuesses().get(0));
//					setColor(RED);
				}
				// method2
//				if (getGuesses() != null) {
//					for (Integer guess : getGuesses()) {
//						if (markAsUniqueGuessAndDetermine(guess, row)
//								&& markAsUniqueGuessAndDetermine(guess, column)
//								&& markAsUniqueGuessAndDetermine(guess,	threeByThreeSquare)) {
//							setValue(guess);
//							setColor(BLUE);
//							getRow().getSudoku().setSudokuHasChanged(true);
//							break;
//						}
//
//					}
//				}

			}
		}
	}

	 markAsUniqueGuessAndDetermine( number,  group) {
		var j;
		for ( j = 0; j < 9; j++) {
			var compareCell = group.getGroup().get(j);
			if (compareCell == this) {
				continue;
			}
			if (compareCell.getGuesses() != null) {
				var compareGuess;
				for ( compareGuess in compareCell.getGuesses()) {
					if (compareGuess == number) {
						return false;
					}
				}
			}
		}
		return true;
	}

	 clearGuess( foundValue) {

		// console.log(getGuesses().contains(foundValue));
		var gssidx;
		for ( gssidx = 0; gssidx < 9; gssidx++) {
			if (getGuesses() != null && getGuesses().size() > gssidx
				&& getGuesses().get(gssidx) == foundValue) {
				getGuesses().remove(gssidx);
				if (getRow().getSudoku().isSudokuHasChanged() == false) {
					getRow().getSudoku().setSudokuHasChanged(true);
				}
				return true;
			}
		}
		return false;
	}

	setValue( value) {
		if (this.value == value) {
			return;
		}
		this.value = value;
		//setGuesses(null);
        if(value == 0){
            this.found = false;
        }else{
            this.found =  true;
        }
		//?setChanged();
        this.row.sudoku.howManyCellsLeft =
            this.row.sudoku.getHowManyCellsLeft() - 1;
		console.log("Cell with coordinates : " + this.row.index
			+ "," + this.column.index + " value set by "
			//+ Thread.currentThread().getStackTrace()[2].toString()
			+ "\n to : " + value);
		//notifyObservers(this);
	}



}

