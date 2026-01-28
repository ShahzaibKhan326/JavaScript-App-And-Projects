let List = document.querySelector(".list");
let textArea = document.querySelector("#textArea");
let editBtn = document.querySelector(".edit");
let input = "";
let selectedLi = null;
function addList() {
  input = `
<span id="elip">${textArea.value}</span>
<div class="btns">
<button class ="edit" onclick="editList(this)">Edit</button><button class="delete btn" onclick="deleteList()">Delete</button>
</div> `;

  let li = document.createElement("li");
  li.innerHTML = input;
  List.append(li);
  li.input = "";
}

function editList(id)
{
    selectedLi = id.parentNode.parentNode
    let text = selectedLi.childNodes[1]
    textArea.value = text.innerText;  
}

function updateList()
{
   let text = selectedLi.childNodes[1].innerText
     text = textArea.value ;
}

function deleteList(id)
{
    selectedLi = id.parentNode.parentNode;
    console.log(selectedLi)
    List.removeChild(selectedLi)
    
}
