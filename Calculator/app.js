let input = document.querySelector("#calcInput");
let keys = document.querySelector(".calcKeys")
let showOperation = document.getElementById("result");

let firstValue = "";
let secondValue = "";
let operation ="";
let isSecond = false;
let result = 0;

keys.addEventListener("click", (e)=>
{
   if(e.target.tagName !== "BUTTON") return;

   let key = e.target.innerText;

   if(!isNaN(key))
   {
      if(!isSecond)
      {
         firstValue += key;
         input.value = firstValue;
         showOperation.textContent += key;
      }
      else
      {
         secondValue += key;
         input.value = secondValue;
         showOperation.textContent += key;
      }
   }
   else if(key === "+" || key === "-" || key === "x" || key === "/" || key === "%")
   {
      operation = key;
      isSecond = true;
      showOperation.textContent += key
   }

   else if(key === "=")
   {
      
      if(firstValue === "" || secondValue === "") return;

      switch(operation)
      {
         case "+":
         result = Number(firstValue) + Number(secondValue);
         break;
          case "-":
         result = Number(firstValue) - Number(secondValue);
         break;
          case "x":
         result = Number(firstValue) * Number(secondValue);
         break;
          case "/":
         result = Number(secondValue)===0 ? "Error" : Number(firstValue) / Number(secondValue);
         break;
         case "%":
         result = Number(firstValue) % Number(secondValue);
         break;
         
      }
   


      input.value = result;
      
      firstValue = result.toString();
      secondValue = "";
      operation = "";
      isSecond = false;
      showOperation.innerText = ""


   }
   else if(key === "Ac")
   {
      input.value = "";
      firstValue = "";
      secondValue = "";
      operation = "";
      isSecond = false;
      showOperation.innerText = ""
   }
   
   
  
   
})

  
