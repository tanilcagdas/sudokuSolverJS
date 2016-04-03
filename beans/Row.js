//public class Row extends Group {
var group;

var Row;
Row = function (sudoku, index) {
    //super(sudoku, index);
    group = new Group(sudoku, index);
}

function getGroup(){
    return this.group;
}




