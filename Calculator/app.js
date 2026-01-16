// console.log("hello world")

var keyList = document.querySelector(".calcKeys")
var input = document.querySelector("#calcInput")

let firstNumber = "";
let secondNumber = "";
let operator = "";
let typingSecond = false;


keyList.addEventListener("click" , (e)=> 
{
    if(e.target.tagName !== "BUTTON") return;

    let key = e.target.innerHTML ;

 if(!isNaN(key))
 {
    if(!typingSecond)
    {
     firstNumber += key;
     input.value = firstNumber;
     console.log("first :" +firstNumber)
    }
    else
    {
      secondNumber += key;
      input.value += secondNumber
      console.log("second :" +secondNumber)
    }
 }
 
 else if(key === "+" || key === "-" || key === "x" || key === "÷")
 {
     operator = key;
     typingSecond = true; 
 }

 else if(key === "=")
 {

   if(operator === "+")
   {
      result =Number(firstNumber)+Number(secondNumber);
   }

   input.value = result;
   firstNumber = result.toString();
   secondNumber = "";
   operator = "";
   typingSecond = false;

 }

 else if (key === "Ac") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        typingSecond = false;
        input.value = "";
 }
   
    
})