let List = document.querySelector(".list");
let textArea = document.querySelector("#textArea");

let targetLi = null; // store selected li for edit

function addList() {
  if (textArea.value.trim() === "") return;

  let li = document.createElement("li");

  li.innerHTML = `
    <span id="elip">${textArea.value}</span>
    <div class="btns">
      <button class="edit" onclick="editList(this)">Edit</button>
      <button class="delete btn" onclick="deleteList(this)">Delete</button>
    </div>
  `;

  List.append(li);
  textArea.value = "";
}

function editList(btn) {
  targetLi = btn.parentNode.parentNode; // save li
  let text = targetLi.children[0].innerText;
  textArea.value = text;
}

function updateList() {
  if (!targetLi) return;

  targetLi.children[0].innerText = textArea.value;
  textArea.value = "";
  targetLi = null;
}

function deleteList(btn) {
  let li = btn.parentNode.parentNode;
  li.remove();
}
