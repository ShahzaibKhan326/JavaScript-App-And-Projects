let container = document.querySelector(".card_container");

fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json())
.then(data => {
    container.innerHTML = "";

    data.forEach((item, index) => {
        createCard(item, index);
    });
})
.catch(err => console.log(err));


function createCard(item, index) {

    let cardHTML = `
        <div class="head">
            <img src="Assets/male_pic.png" width="80" height="80">
            <h3>User Name</h3>
        </div>
        <h5 style="text-align:center">${item.title}</h5>
        <p>${item.body}</p>
        <button class="detail_btn">Interested</button>
    `;

    container.innerHTML += `
        <div class="card" data-id="${index}" data-original='${cardHTML.replace(/'/g, "&apos;")}'>
            ${cardHTML}
        </div>
    `;
}


container.addEventListener("click", function (e) {

    let card = e.target.closest(".card");

    if (e.target.classList.contains("detail_btn")) {

        let cardId = card.getAttribute("data-id");

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {

            let user = users[cardId % users.length];

            card.innerHTML = `
                <div class="head">
                    <img src="Assets/male_pic.png" width="80" height="80">
                    <h3>${user.name}</h3>
                </div>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Company:</b> ${user.company.name}</p>
                <button class="back_btn">Back</button>
            `;
        });
    }

    if (e.target.classList.contains("back_btn")) {

        let original = card.getAttribute("data-original");
        card.innerHTML = original;
    }

});