
class Group {

    constructor (sudoku, index) {
        this.index = index;
        this.sudoku = sudoku;
        if (this.group == null) {
            //group=new ArrayList<Cell>();
            this.group = [];

            var i;
            for (i = 0; i < 9; i++) {
                var cell = new Cell(this);
                this.group.push(cell);
            }
        }
    }

    getGroup(){
        return this.group;
    }


    toString() {
        var sb = "";
        var cell;
        for (var i = 0; i < this.group.length; i++) {
        var cell = group[i];
            sb = sb + cell.toString();
        }
        return sb;
    }

}