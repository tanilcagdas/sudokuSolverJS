

//public class Column extends Group {
var group;

	var Column;
	 Column = function( sudoku, index) {

		 group = new Group(sudoku, index);

	}
	

	function toString() {

		return group.toString();
	}

