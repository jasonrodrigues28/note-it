document.addEventListener("DOMContentLoaded", function() {
    var noteField = document.getElementById("note");
    var saveButton = document.getElementById("save");
    var clearButton = document.getElementById("clear");

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

    // Clear the note when the button is clicked
    clearButton.addEventListener("click", function() {
        noteField.value = "";
        chrome.storage.local.set({ "note": "" });
    });
});
