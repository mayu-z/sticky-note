


document.addEventListener('DOMContentLoaded', function() {
    const newModel = document.getElementById("newModel");
    const plus = document.getElementById("plus");
    const closeBtn = document.getElementById("closeButton");
    const notePreview = document.getElementById("notePreview");
    const noteMenu = document.getElementById("noteMenu");
    const preview = document.getElementById("preview");
    const noteeMenu = document.getElementById("noteeMenu");
    const submitNote1 = document.getElementById("submitNote")
    const submitNote = document.getElementById("submitNote1");
    const savedNotesContainer = document.getElementById("savedNotesContainer");
    const colorBtn = document.querySelectorAll(".color-option");

    let newNote = null;

    plus.addEventListener('click', () => {
        // Resetting everything when the plus button is clicked
        newModel.style.display = "flex";
        inputTitle.value = "";
        inputContent.value = "";
        notePreview.style.backgroundColor = getComputedStyle(colorBtn[0]).backgroundColor;
        preview.innerHTML = ''; // Clear previous preview content
        preview.style.display = "none"; // Hide the preview
        newNote = null; // Reset newNote
    });

    closeBtn.addEventListener('click', () => {
        newModel.style.display = "none";
    });

    if (colorBtn.length > 0) {
        notePreview.style.backgroundColor = getComputedStyle(colorBtn[0]).backgroundColor;
    }

    colorBtn.forEach(child => {
        child.addEventListener('click', () => {
            notePreview.style.backgroundColor = getComputedStyle(child).backgroundColor;
        });
    });

    noteMenu.addEventListener('click', () => {
        const title = document.getElementById("inputTitle").value;
        const content = document.getElementById("inputContent").value;
        const noteColor = getComputedStyle(notePreview).backgroundColor;

        // Creating the new note element
        newNote = document.createElement('div');
        newNote.className = 'note';
        newNote.style.backgroundColor = noteColor;
        newNote.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        newNote.style.border = "2px solid white"
        // Clearing any existing preview content and adding the new note
        preview.innerHTML = '';
        preview.appendChild(newNote);

        // Ensure the preview buttons are also added back
        preview.appendChild(noteeMenu.parentElement);
        preview.style.display = "flex"; // Show the preview
        newModel.style.display = "none"; // Hide the form
    });

    noteeMenu.addEventListener('click', () => {
        // When "Back?" is clicked, go back to the note form
        preview.style.display = "none";
        newModel.style.display = "flex";
    });

    // submitnote.addEventListener('click', () => {
    //     newNote.style.border = "none"
    //     if (newNote) {
    //         const savedNote = newNote.cloneNode(true); // Clone the previewed note
    //         savedNotesContainer.appendChild(savedNote);
    //         newNote = null; // Reset newNote after saving
    //         preview.innerHTML = ''; // Clear the preview after submission
    //         preview.style.display = "none"; // Hide the preview
    //     } else {
    //         console.log("No note to submit.");
    //     }
        
    // });

    submitNote.addEventListener('click', () => {
        newNote.style.border = "none"
        if (newNote) {
            const savedNote = newNote.cloneNode(true); // Clone the previewed note
            savedNotesContainer.appendChild(savedNote);
            newNote = null; // Reset newNote after saving
            preview.innerHTML = ''; // Clear the preview after submission
            preview.style.display = "none"; // Hide the preview
        } else {
            console.log("No note to submit.");
        }
        
    });


    // function submitNoteHandler() {
    //     if (newNote) {
    //         newNote.style.border = "none"; // Remove border before saving
    //         const savedNote = newNote.cloneNode(true); // Clone the previewed note
    //         savedNotesContainer.appendChild(savedNote);
    //         newNote = null; // Reset newNote after saving
    //         preview.innerHTML = ''; // Clear the preview after submission
    //         preview.style.display = "none"; // Hide the preview
    //     } else {
    //         console.log("No note to submit.");
    //     }
    // }

    // submitNote1.addEventListener('click', submitNoteHandler);
    // submitNote.addEventListener('click', submitNoteHandler);



    submitNote1.addEventListener('click', () => {
        const title = document.getElementById("inputTitle").value;
        const content = document.getElementById("inputContent").value;
        const noteColor = getComputedStyle(notePreview).backgroundColor;

        // Creating the new note element
        const newNoteForSave = document.createElement('div');
        newNoteForSave.className = 'note';
        newNoteForSave.style.backgroundColor = noteColor;
        newNoteForSave.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        newNoteForSave.style.border = "none";
        savedNotesContainer.appendChild(newNoteForSave); // Save the note directly

        // Reset the form and close it
        inputTitle.value = "";
        inputContent.value = "";
        newModel.style.display = "none";
    });
    
});