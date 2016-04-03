


   
   var index;
	
	//private ArrayList<Cell> group;
	var group = [];

	var sudoku;


	var Group;
	Group = function (sudoku, index) {
		setIndex(index);
		setSudoku(sudoku);
		if (group==null){
			//group=new ArrayList<Cell>();
            group = [];

			var i;
            for( i=0;i<9;i++){
				var cell = new Cell(this);
				group.push( cell );
			}
		}
	}


	function getGroup() {
		return group;
	}

    function  setGroup(group) {
		this.group = group;
	}

    function  getIndex() {
      return index;
   }

    function  setIndex( index) {
      this.index = index;
   }

   /**
 * @return the sudoku
 */
 function getSudoku() {
	return sudoku;
}

/**
 * @param sudoku the sudoku to set
 */
function setSudoku( sudoku) {
	this.sudoku = sudoku;
}

	 function toString() {
		var sb = "";
        var cell;
		for ( cell in group) {
			sb = sb + cell.toString();
		}
		return sb;
	}
	
