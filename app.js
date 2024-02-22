const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");

aboutButton.addEventListener("click", () => {
    // Show the "Om oss" section and hide the others
    const sections = document.getElementsByTagName("section");
    for (const section of sections) {
        if (section.textContent.includes("Om oss")) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    }
});

contactButton.addEventListener("click", () => {
    // Show the "Kontakt oss" section and hide the others
    const sections = document.getElementsByTagName("section");
    for (const section of sections) {
        if (section.textContent.includes("Kontakt oss")) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    }
});