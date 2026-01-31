

let brands = { 
    apple: {name: "iphone" ,brand:"apple",color:"black"},
    samsung: {name: "samsung 41" ,brand:"samsung",color:"silver"},  
}

// console.log(brands.samsung.name)

let mySelect = document.querySelector("#brands")
// let selectedValue = mySelect.value
// let selectedIndex = mySelect.selectedIndex
// let options = mySelect.options

// mySelect.addEventListener("click" , function() {
//    var options = mySelect.querySelector("option")
//    console.log(options)
// })
mySelect.addEventListener("change", function()
{
    if(mySelect.value == "apple")
    {
        console.log("apple")
    }
    else
    {
        console.log("samsung")
    }
})
