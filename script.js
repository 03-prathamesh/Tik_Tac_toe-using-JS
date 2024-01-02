let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgContainer= document.querySelector(".message-container");
let msg=document.querySelector("#msg");
let turn0=true;
let new_game=document.querySelector("#new_game");
let reset_game=document.querySelector("#reset");

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];


const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");  //hide the container //here hide is the classname 
  
}




//adding the event listner to each box, querryselectorAll represent as array which containt multiple elements in it
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // box.innerHTML = "x";
         if(turn0===true){    //if(turn0)
            box.innerText="0";
            turn0=false;
            
         }
         else{
            box.innerText="x";
            turn0=true;
         }
         box.disabled=true;

         checkWinner();
        
        
     });//,{ once: true });  // with the help of this you can click on the button only once
});





const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    // alert("Text set");
    msgContainer.classList.remove("hide");
    // alert("Text shown");
    disableBoxes();
}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        //  console.log(pattern[0],pattern[1],pattern[2]);
        //  console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Value=boxes[pattern[0]].innerText;
        let pos2Value=boxes[pattern[1]].innerText;

        let pos3Value=boxes[pattern[2]].innerText;
        
        if(pos1Value!="" && pos2Value!="" && pos3Value!=""){
             if(pos1Value===pos2Value && pos2Value===pos3Value){
                // alert( "Congratulations! Player" + pos2Value+" is the  winner");
              
                // msgContainer.classList.remove("message-container");
                showWinner(pos2Value);
             }
        }
    }
}



const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}

// enable boxes for the new game

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}




new_game.addEventListener("click",resetGame);          //ya button vr click kelyavr resetGame he function trigger hoil
reset_game.addEventListener("click",resetGame);          //ya button vr click kelyavr resetGame he function trigger hoil





