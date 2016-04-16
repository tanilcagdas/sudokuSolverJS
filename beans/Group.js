
class Group {

    constructor (sudoku, index) {
        this.index = index;
        this.sudoku = sudoku;
        if (this.group == null) {
            //group=new ArrayList<Cell>();
            group = [];

            var i;
            for (i = 0; i < 9; i++) {
                var cell = new Cell(this);
                group.push(cell);
            }
        }
    }

    


    toString() {
        var sb = "";
        var cell;
        for (cell in group) {
            sb = sb + cell.toString();
        }
        return sb;
    }

}