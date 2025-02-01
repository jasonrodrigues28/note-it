document.addEventListener("DOMContentLoaded", function() {
    var noteField = document.getElementById("note");
    var saveButton = document.getElementById("save");

    // Load saved note when the popup opens
    chrome.storage.local.get(["note"], function(result) {
        if (result.note) {
            noteField.value = result.note;
        }
    });

    // Save the note when the button is clicked
    saveButton.addEventListener("click", function() {
        chrome.storage.local.set({ "note": noteField.value });
    });
});
