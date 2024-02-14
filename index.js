const createNotesBtn = document.querySelector(".create-notes");
const contentSection = document.querySelector(".notes");
showData();

createNotesBtn.addEventListener("click", () => {
  const newNote = document.createElement("div");
  newNote.innerHTML = `<input type="text" placeholder="title..."/ >
    <div>
    <textarea name="" id="" placeholder="Enter notes here..."></textarea>
    <img src="./images/delete.png" alt="" class="delete-notes">`;
  newNote.classList.add("input-notes");
  contentSection.appendChild(newNote);
  saveData();

  const dustbin = newNote.querySelector(".delete-notes");

  dustbin.addEventListener("click", (event) => {
    newNote.remove();
    saveData();
  });
});

function saveData() {
  localStorage.setItem("data", contentSection.innerHTML);
  console.log(contentSection.innerHTML);
  console.log("saved");
}

function showData() {
  contentSection.innerHTML = localStorage.getItem("data");
  var inputNotes = document.querySelector(".notes").childNodes;
  console.log(inputNotes.length);
  inputNotes.forEach((element) => {
    element.classList.add("input-notes");
    const dustbin = element.querySelector(".delete-notes");

    dustbin.addEventListener("click", (event) => {
      element.remove();
      saveData();
    });
  });
}
