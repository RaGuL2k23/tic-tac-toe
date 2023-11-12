const GameBoard = (function(){   
   let winner='noOne',xOry=0 ;let noOfBoxFilled = 0;
   const row = 3;
   const col = 3; 
   const gameBoard =[];
   const gamePad = document.querySelector(".gameBoard");

   for(let i =0;i<row;i++){
    gameBoard[i] =[];
    
    for(let j=0;j<col;j++){
        let box = document.createElement('div');
        box.classList.add('box');
        gamePad.appendChild(box);
        gameBoard[i].push([]);
        box.setAttribute('data-box',`${i}${j}`);

    }
   }




   const checkWinner = function(arr){
    ['x','o'].forEach( (el)=> { 
        checkFullColumns(arr,el);checkFullRows(arr,el);
        checkMainDiagonal(arr,el);checkOffDiagonal(arr,el)
    } );
     checkNoOfBoxFilled();
   }

    function checkNoOfBoxFilled(){
       if(noOfBoxFilled >=9 && winner=="noOne"){
        console.log("Game is a Tie Brother",noOfBoxFilled)
        }
    }

    function checkFullColumns(arr,el){
        value = el;
        for(i = 0;i<3;i++){
            if(arr[0][i] == value && arr[1][i] == value &&arr[2][i] == value){
                winner = value;
                winnerFound(value);
            }
        }
    }

    function checkFullRows (arr,el){
        value = el;
        for(i = 0;i<3;i++){
            if(arr[i][0] == value && arr[i][1] == value &&arr[i][2] == value){
                winner = value;
                winnerFound(value);
            }
        }
    }

    function checkMainDiagonal(arr,el){
        value = el;
            if(arr[0][0] == value && arr[1][1] == value &&arr[2][2] == value){
                winner = value;
                winnerFound(value);
            }
    }
    
    function checkOffDiagonal(arr,el){
        value=el;
        if(arr[0][2] == value && arr[1][1] == value &&arr[2][0] == value){
            winner = value;
            winnerFound(value);
        }
    }
    function winnerFound(value){
        if(value){
            console.log("Hey winner is "+winner);
        }
        /*prevnts from giving additional input values to boxes*/
        boxes.forEach( (box) => {if(box.textContent=='') {box.textContent=` `} } );
    }

 
let boxes = document.querySelectorAll(".box");
    const startGame = function(){
        boxes.forEach( (box)=>{
            box.addEventListener('click',()=>addValue(box) )
            
        });
    }
//filling with dummy value
boxes.forEach( (box) =>  box.textContent='' )
function addValue(box){
    
    if(box.textContent ==''){
        xOry++;
        //filling x or y for unfilled values alone 
        //prevents from changing already assigned values
        box.textContent = xOry%2==1?'x':'o';
        let boxNo = (box.dataset.box);
        [j,k]=boxNo.split('');
        gameBoard[j][k] = box.textContent;
        noOfBoxFilled++;
         checkWinner(gameBoard);
    }
}
         return{startGame}
  })();

  startButton = document.querySelector(".startButton");
  startButton.addEventListener('click',GameBoard.startGame)