

let brands = { 
    apple: {name: "iphone" ,brand:"apple",color:"black"},
    samsung: {name: "samsung 41" ,brand:"samsung",color:"silver"},  
}

let allBrands = { apple:false , samsung:false }


let mySelect = document.querySelector("#brands")
let card = document.querySelector(".card");



mySelect.addEventListener("change", function ()
{
    let selectBrand = mySelect.value;  
    let data = brands[selectBrand]
   
    for(let key in allBrands)
    {
        allBrands[key]=false;
    }
    
    if(selectBrand in allBrands)
    {
        allBrands[selectBrand] = true;
    }
    
    card.innerHTML = 
    `
    <h3>${data.name}</h3>
    `

   
    
})

