let selector = document.getElementById("select")
let container = document.querySelector(".cardsContainer")

let products = {
    Mobiles:{
        apple:{name:"Iphone 14 Pro Max",price:1000,sold:33,rating:4.2,img:"/Assets/Images/iphone-14.jpg"},
        samsung:{name:"S21 ultra 512 GB",price:900,sold:43,rating:4.3,img:"/Assets/Images/samsung-s21.jpg"},
        redmi:{name:"Redmi Go",price:150,sold:50,rating:4.5,img:"/Assets/Images/redmi-go.webp"}
    },
     Laptops:{
        lenovo:{name:"Lenovo v15 G5",price:1200,sold:13,rating:4.0,img:"/Assets/Images/laptops/lenovo_laptop.jpg"},
        Hp_laptops:{name:"HP Elite Book 650 G9",price:350,sold:20,rating:3.3,img:"/Assets/Images/laptops/hp_laptop.jpg"},
        lenovo_gaming:{name:"Lenovo LOQ 15",price:1500,sold:30,rating:5.0,img:"/Assets/Images/laptops/lenovo_gaming_laptop.jpg"}
    },
    Games:{
        football_game:{name:"PlayStation Fc 2026",price:90,sold:150,rating:4.1,img:"/Assets/Images/games/football_game.jpg"},
        Fighting_game:{name:"PlayStaion Tekken 5",price:350,sold:20,rating:5.0,img:"/Assets/Images/games/tekken_game.webp"},
        Fighting_game01:{name:"Street Fighther",price:50,sold:101,rating:3.7,img:"/Assets/Images/games/street_fighther.webp"}
    },
   
}

// for(let prd in products)
// {
//     let Category =  products[prd]
//     for(let brands in Category)
//     {
//         let brand = Category[brands]
//         container.innerHTML += 
//         `
//         <div class="card">
//        <div class="imgSection">
//                  <img src="${brand.img}" alt="Redmi">
//              </div>
//              <div class="discSection">
//                  <div class="name">
//                   <span id="text">${brand.name}</span>   
//                  </div>
//                  <div class="price">Rs ${brand.price}</div>
//                  <div class="ratingSection">
//                      <div class="sold">Sold :${brand.sold} items</div>
//                      <div class="rating">Rating: ${brand.rating}</div>
//                  </div>
//              </div>
//          </div> 
//         ` 
//     }
// }

function renderProducts(data) {
  container.innerHTML = "";

  for (let category in data) {
    for (let key in data[category]) {
      let product = data[category][key];

      container.innerHTML += `
        <div class="card">
          <div class="imgSection">
            <img src="${product.img}" alt="${product.name}">
          </div>

          <div class="discSection">
            <div class="name">
              <span class="text">${product.name}</span>
            </div>

            <div class="price">Rs ${product.price}</div>

            <div class="ratingSection">
              <div class="sold">Sold: ${product.sold} items</div>
              <div class="rating">Rating: ${product.rating}</div>
            </div>
          </div>
        </div>
      `;
    }
  }
}

renderProducts(products);

selector.addEventListener("change",function () 
{
    let selectedValue = selector.value;

    if(selectedValue === "All")
    {
        renderProducts(products)
    }
    else
    {
        let selectCategory = 
        {
            [selectedValue]:products[selectedValue]
        }

        renderProducts(selectCategory)
    }
})


