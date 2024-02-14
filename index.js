const createNotesBtn = document.querySelector(".create-notes");
const contentSection = document.querySelector(".notes");

// Call showData function to load saved notes when the page loads
showData();

createNotesBtn.addEventListener("click", () => {
  const newNote = document.createElement("div");
  newNote.innerHTML = `
    <input type="text" class="note-title" placeholder="Title..."/>
    <div><textarea class="note-content" placeholder="Enter notes here..."></textarea>
    <img src="./images/delete.png" alt="" class="delete-notes"></div>
  `;
  newNote.classList.add("input-notes");
  contentSection.appendChild(newNote);

  // Save data whenever a new note is created
  saveData();

  const dustbin = newNote.querySelector(".delete-notes");

  dustbin.addEventListener("click", (event) => {
    newNote.remove();
    saveData();
  });

  // Add event listeners to input fields and textareas for saving data
  const titleInput = newNote.querySelector(".note-title");
  const contentTextarea = newNote.querySelector(".note-content");

  titleInput.addEventListener("input", saveData);
  contentTextarea.addEventListener("input", saveData);
});

function saveData() {
  // Loop through each note and save its content
  const notes = document.querySelectorAll(".input-notes");
  const data = [];

  notes.forEach((note) => {
    const title = note.querySelector(".note-title").value;
    const content = note.querySelector(".note-content").value;
    data.push({ title, content });
  });

  // Store the data in localStorage
  localStorage.setItem("notes", JSON.stringify(data));
}

function showData() {
  // Retrieve saved notes from localStorage
  const savedData = JSON.parse(localStorage.getItem("notes"));

  if (savedData) {
    savedData.forEach((note) => {
      const newNote = document.createElement("div");
      newNote.innerHTML = `
        <input type="text" class="note-title" value="${note.title}" placeholder="Title..."/>
        <div><textarea class="note-content" placeholder="Enter notes here...">${note.content}</textarea>
        <img src="./images/delete.png" alt="" class="delete-notes"></div>
      `;
      newNote.classList.add("input-notes");
      contentSection.appendChild(newNote);

      // Add event listeners for saving data when input changes
      const titleInput = newNote.querySelector(".input-notes input");
      const contentTextarea = newNote.querySelector(".input-notes textarea");

      titleInput.addEventListener("input", saveData);
      contentTextarea.addEventListener("input", saveData);

      // Add event listener for deleting note
      const dustbin = newNote.querySelector(".delete-notes");
      dustbin.addEventListener("click", () => {
        newNote.remove();
        saveData();
      });
    });
  }
}
