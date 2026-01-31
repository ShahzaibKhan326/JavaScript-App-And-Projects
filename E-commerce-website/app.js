

let brands = { 
    apple: {name: "iphone" ,brand:"apple",color:"black"},
    samsung: {name: "samsung 41" ,brand:"samsung",color:"silver"},  
}

let allBrands = { apple:false , samsung:false }


let mySelect = document.querySelector("#brands")
let 


mySelect.addEventListener("change", function ()
{
    let selectBrand = mySelect.value;  
   
    for(let key in allBrands)
    {
        allBrands[key]=false;
    }
    
    if(selectBrand in allBrands)
    {
        allBrands[selectBrand] = true;
    }
    

    console.log(allBrands)
    console.log(brands[selectBrand])
    
})

