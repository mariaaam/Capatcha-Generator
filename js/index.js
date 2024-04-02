
// html element

let TryBtn=document.getElementById("Try");
let checkBtn=document.getElementById("check");
let input=document.getElementById("input");
let capText=document.getElementById("capText");
let img= document.getElementById("img");
let parent=document.getElementById("parent")

// add variable


let CorrectAns="";

// function

function generateCap(){
    let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 let result = "";
 for(let i=1 ; i<=6 ;i++){
    result += chars[Math.trunc(Math.random() * chars.length)];
 }
 CorrectAns=result;
 capText.innerHTML=result;
}

generateCap();



function CheckAns(){
    if(input.value === CorrectAns){
        // alert("congteration");
        img.classList.remove("d-none");
        parent.classList.add("d-none");
    }
    else{
        alert("try again");
        img.classList.add("d-none");
        parent.classList.remove("d-none");
    }
}

// events+


TryBtn.onclick=generateCap;
checkBtn.onclick=CheckAns;