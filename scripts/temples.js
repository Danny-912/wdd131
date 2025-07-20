const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Get the last modified date and display it
document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
    }
});

