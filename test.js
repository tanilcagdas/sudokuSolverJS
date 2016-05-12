/**
 * Created by tanilcagdas on 02/04/16.
 */
function test() {
    sudoku = new Sudoku() ;
    printSudoku(sudoku);


}

function loadDemoSudokuTest() {
    loadDemoSudoku(sudoku);
    printSudoku(sudoku);
}

function solveSudokuTest() {
    sudoku = solveSudoku(sudoku);
    printSudoku(sudoku);

}

function printSudoku(sudoku) {
    var str = "<center> <table>";
    for(var i = 0; i<9 ; i++){
        str = str + "<tr>";
        for(var j = 0; j<9 ; j++){
            str = str + "<td";
            str = str +    ' style=" width: 15px ; height : 15px;';
            str = str +    'color: '+sudoku.getColumnArray()[j].getGroup()[i].getColor()+';';
            if( (i+j)%2 === 0){
                str = str +    '  background-color: #C3CECE";';

            }
            str = str +    '"';
            str = str + ">";

            var val =  sudoku.getColumnArray()[i].getGroup()[j].getValue();
            if(val != undefined && val != 0){
                str = str + val;
            }else{
                str = str + " <input type='text' size='1'> "
            }

            str = str + "</td>";
        }
        str = str + "</tr>";

    }
    str = str + "</table>";

    document.getElementById("sudoku").innerHTML = str;
}
