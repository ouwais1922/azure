
// 0    1     2
// x    x     x

// 3    4     5
// x    x     x


// 6    7     8
// x    x     x


// [0,1,2]
// [3,4,5]
// [6,7,8]
// [0,3,6]
// [1,4,7]
// [2,5,8]
// [0,4,8]
// [2,4,6]


type TSquarevalue = 'X' | 'O' | null

export const checkWinner = (square:TSquarevalue[])=>{
    const winningCombination  = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0;i<winningCombination.length;i++){
     const [a,b,c] = winningCombination[i]
     if(square[a] && square[a] === square[b] && square[a] === square[c]){
         return square[a]
     }
    }
    return null

}