 const GameBoard = (function(){   
    let winner ;
   const row = 3;
   const col = 3; 
   const gameBoard =[];
   for(let i =0;i<row;i++){
    gameBoard[i] =[];
    for(let j=0;j<col;j++){
        gameBoard[i].push([]);
        if (i==1){
            gameBoard[1][j] = 'x'; 
        }
        else{
            gameBoard[i][j] = 'o';
        }
    }
   }

   gameBoard[2][1]='x';gameBoard[0][1]='';

//    const checkEmptyBox = function(arr){
//     for(let i =0;i<row;i++){
//         for(let j=0;j<col;j++){
//             if([i][j] == ''){

//             }
//         }
//        }
//    }

   const checkWinner = function(arr){
    ['x','o'].forEach( (el)=> checkFullColumns(arr,el) );
    ['x','o'].forEach( (el)=> checkMainDiagonal(arr,el) );
    ['x','o'].forEach( (el)=> checkOffDiagonal(arr,el) );
    ['x','o'].forEach( (el)=> checkFullRows(arr,el) );
    
   }

    function checkFullColumns(arr,el){
        value = el;
        for(i = 0;i<3;i++){
            if(arr[0][i] == value && arr[1][i] == value &&arr[2][i] == value){
                winner = value;
                console.log("winner is "+winner);
                return value;
            }
        }
    }

    function checkFullRows (arr,el){
        value = el;
        for(i = 0;i<3;i++){
            if(arr[i][0] == value && arr[i][1] == value &&arr[i][2] == value){
                winner = value;
                console.log("winner is "+winner);
                return winner;
            }
        }
    }

    function checkMainDiagonal(arr,el){
        value = el;
            if(arr[0][0] == value && arr[1][1] == value &&arr[2][2] == value){
                winner = value;
                console.log("winner is "+winner);
                return value;
            }
    }
    
    function checkOffDiagonal(arr,el){
        value=el;
        if(arr[0][2] == value && arr[1][1] == value &&arr[2][0] == value){
            winner = value;
            console.log("winner is "+winner);
            return value;
        }
    }
    function winnerFound(value){
        if(value){
            console.log("Hey winner is "+winner);
        }
        else{
            console.log("continue game");
        }
    }
    
    return {gameBoard,checkWinner,row };
 })()
 
 console.log(GameBoard.gameBoard.forEach ((e)=>e.forEach( (el)=>console.log(el) )) );
console.log(GameBoard.gameBoard)