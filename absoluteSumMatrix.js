/* S Algo Absoulute Sum Matrix
absoluteSumMatrix should calculate the absolute sum between both cross-axes in a grid matrix
Example Given a matrix:
[
   [ 1, 3, 4 ],
   [ -2, -3, -5 ] ,
   [ 6, 2, 5 ]
]
Find the absolute sum of each diagonal and return the total sum. The matrix will always be 3x3.
ex: 1 + -3 + 5 = 3, 4 + -3 + 6 = 7 return 3 + 7 */

// Here  matrix is 3 by 3 always
function absoluteSumMatrix(mat){

    diag1 = mat[0][0]+mat[1][1]+mat[2][2]
    diag2 = mat[0][2]+mat[1][1]+mat[2][0]
    console.log("mat :", mat.length)
    return diag1+diag2

}

sum = absoluteSumMatrix([
    [ 1, 3, 4 ],
    [ -2, -3, -5 ] ,
    [ 6, 2, 5 ]
 ])

 console.log("Sum: ",sum)

// General function for N dimension sqaure matrix 
function absoluteSumMatrixNDim(mat){
    console.log("mat dimension :", mat.length)
    lenOfMatrix = mat.length
    diag1Sum = 0
    diag2Sum = 0
    for(let i=0; i< lenOfMatrix; i++){
        diag1Sum= diag1Sum + mat[i][i]
        diag2Sum = diag2Sum + mat[i][lenOfMatrix-1-i]
    }
    return Math.abs(diag1Sum) + Math.abs(diag2Sum)
}

generalSum = absoluteSumMatrixNDim([
    [ 1, 3, 4 ,0],
    [ -2, -3, -5, 1 ] ,
    [ 6, 2, 5, 0 ],
    [ 0, 1, 1, 1 ]
 ])

 console.log("Sum for square matrix with any dimension: ",generalSum)


 const absoluteSumMatrix_reduce = matrix => {
    const URtoLL = matrix.reduce((acc, curr, idx) => {
      console.log("acc: ", acc," curr: ",curr, " idx: ",idx," curr[matrix.length - 1 - idx]: ",curr[matrix.length - 1 - idx])  
      return curr[matrix.length - 1 - idx] + acc
    }, 0)
    
    const ULtoLR = matrix.reduce((acc, curr, idx) => {
        console.log("acc: ", acc," curr: ",curr, " idx: ",idx," curr[idx]: ",curr[idx])  
      return curr[idx] + acc
    }, 0)
    
    return Math.abs(URtoLL) + Math.abs(ULtoLR)
  }

  sum_reduced =absoluteSumMatrix_reduce([ 
    [ 1, 3, 4 ],
    [ -2, -3, -5 ] ,
    [ 6, 2, 5 ]
    ])

    console.log("sum reduced: ",sum_reduced)