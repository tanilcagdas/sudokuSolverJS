/**
 * Created by tanilcagdas on 02/04/16.
 */
function test() {
    var sudoku = new Sudoku() ;

    loadDemoSudoku(sudoku);

     document.getElementById("sudoku").innerHTML = sudoku.getColumnArray();
   
}
