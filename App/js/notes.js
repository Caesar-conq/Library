const form = document.getElementById("notes-form");
const textInput = document.getElementById("notes-input");
const addBtn = document.getElementById("add-btn");
const notesContainer = document.getElementById("note-container");

let allNotes = getNotes();
updateNotesToUI();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addNotes();
});

function addNotes() {
  const noteText = textInput.value.trim();
  if (noteText.length > 0) {
    const noteObject = {
      text: noteText,
    };
    allNotes.push(noteObject);
    saveNotes();
    updateNotesToUI();
    textInput.value = "";
  }
}

function createNotes(note, noteIndex) {
  const notes = document.createElement("div");
  notes.className = "note";
  notes.innerHTML = `
  <div class="note-content">
            <button class="dlt-btn">
              <i class="bx bx-x"></i>
            </button>
            <span class="text-content">
              ${note.text}
            </span>
          </div>
          <button class="read-more">Read More</button>
  `;
  let dltBtn = notes.querySelector(".dlt-btn");
  dltBtn.addEventListener("click", () => {
    allNotes.splice(noteIndex, 1);
    saveNotes();
    updateNotesToUI();
  });
  let readMore = notes.querySelector(".read-more");
  readMore.addEventListener("click", () => {
    let expanded = readMore.parentElement.classList.toggle("expanded");
    if (expanded) {
      return (readMore.textContent = "Read Less");
    } else {
      return (readMore.textContent = "Read More");
    }
  });
  return notes;
}

function updateNotesToUI() {
  notesContainer.innerHTML = "";
  allNotes.forEach((note, noteIndex) => {
    const noteItem = createNotes(note, noteIndex);
    notesContainer.append(noteItem);
  });
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(allNotes));
}
function getNotes() {
  const notes = localStorage.getItem("notes") || "[]";
  return JSON.parse(notes);
}
