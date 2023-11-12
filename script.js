const GameBoard = (function(){   
   let winner='noOne',xOry=0 ,noOfBoxFilled = 0,winners=[];
   const row = 3;
   const col = 3; 
   const gameBoard =[];
   const gamePadContainer =document.querySelector(".gameBoardContainer");console.log(gamePadContainer)
   const gamePad = document.createElement("div");
   gamePad.setAttribute('class','gameBoard');console.log(gamePad)
   const displayer = document.querySelector('.displayer');
   let boxes;
          
        for(let i =0;i<row;i++){
            gameBoard[i] =[];//row
            
            for(let j=0;j<col;j++){
                
                gameBoard[i].push([]);//columns

                let box = document.createElement('div');
                box.classList.add('box');
                gamePad.appendChild(box);
                box.setAttribute('data-box',`${i}${j}`);
        
            }
            }   
            gamePadContainer.appendChild(gamePad);console.log(gamePad)
           boxes = document.querySelectorAll(".box");

   const checkWinner = function(arr){
    ['x','o'].forEach( (el)=> { 
        checkFullColumns(arr,el);checkFullRows(arr,el);
        checkMainDiagonal(arr,el);checkOffDiagonal(arr,el)
    } );
     checkForTie();
   }

    function checkForTie(){
       if(noOfBoxFilled >=9 && winner=="noOne"){
        displayer.textContent="Game is a Tie Brother";
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
        winner = value=='x'?player1:player2;
        if(value){
            displayer.textContent = ("Hey winner is "+winner);
            winners.push(winner);
          
             winners.forEach( (e,i)=>{
                const div = document.createElement("div");
                div.textContent +=(`\nRound:${i+1},winner is,${e}`);
                displayer.appendChild(div);} );
           
        }
        /*prevnts from giving additional input values to boxes
        cause after winning no need to accept any x or o inputs*/
        boxes.forEach( (box) => {if(box.textContent=='') {box.textContent=` `} } );
    }

 

    const startGame = function(){
        winner='noOne';noOfBoxFilled =0;xOry=0;//strtng frm scratch
        // createGamePad(); 
        boxes.forEach( (box)=>{
            box.addEventListener('click',()=>addValue(box) )
            
        });
    }
//filling with dummy value ;, 
    const restartGame = function(){ 
        boxes.forEach( (box) =>  box.textContent='');
        for(i=0;i<3;i++){ //erase previouse array values
            for(j=0;j<3;j++){//to none
                gameBoard[i][j]='';
            }
        }
        startGame();
    }
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
    //Handling display and other things
    

     return{startGame,restartGame}
  })();


  let player1,player2;
  player1 = document.querySelector("#name1").value;
  player2 = document.querySelector("#name2").value;
  submitName = document.querySelector("#submitNames");
  function getNames(){
    player1 = document.querySelector("#name1").value;
  player2 = document.querySelector("#name2").value;
  }
  startButton = document.querySelector(".startButton");
  reStartButtton = document.querySelector(".reStartButton");
  startButton.addEventListener('click',GameBoard.startGame);
  reStartButtton.addEventListener('click',GameBoard.restartGame);   

  //['rocky', 'rocky', 'rocky', 'bababoi'].
  //forEach( (e,i)=>console.log(i+1,'th','winner is',e) )