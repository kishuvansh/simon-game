// if any key is pressed it is started 
// level 1 is started
let gameSeq=[];
let userSeq=[];
let Started=false;
let level=0;
let btns=["blue","red","yellow","green"];
let h3=document.querySelector("h3");;
document.addEventListener("keypress",function(){
    if(Started==false){
        console.log("Game Started");
        Started=true; 
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");},500);
        console.log("btn ")
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");  
    }, 500);
}
function levelup(){
    userSeq=[];
    level++;
    // flash button
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    console.log(randIdx);
    let randcolor=btns[randIdx];
    gameSeq.push(randcolor);
    console.log(gameSeq);
    let randBTn=document.querySelector(`.${randcolor}`);
    btnflash(randBTn);

}
function checkAns(indx){
    // console.log("curr level:"+level);
    
    if(userSeq[indx]===gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(() => {
            levelup();
           }, 1000); 
           score();
        }
       
        
    }
    else{
        h3.innerText="GAME OVER! Press any key to restart";
        // background color change

       document.querySelector("body").style.backgroundColor="red"; 
        setTimeout(() => {
          document.querySelector("body").style.backgroundColor="blanchedalmond";  
        },500);
        restartGame();
    }
}

function btnPress(){
    console.log("btn pressed");
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor)
    console.log(userSeq); 
    checkAns(userSeq.length-1);
}
let allbtns= document.querySelectorAll(".btn");
for(let button of allbtns){
     button.addEventListener("click",btnPress);
}
function restartGame(){
    Started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    score();  
}
// adding score feature score is equal to level 
// score should be displayed at the left top in a box
function score(){
    
    let h2=document.querySelector(".score h2");
    h2.innerText=`score: ${level}`;
}