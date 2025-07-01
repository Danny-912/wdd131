// Get the current year and display it
const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = 2025;

// Get the last modified date and display it
const lastModifiedSpan = document.getElementById("last-modified");
lastModifiedSpan.textContent = "Last Modified: " + document.lastModified;