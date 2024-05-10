const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");

var myAudio = document.getElementById("myAudio");

function togglePlayPause() {
  if (myAudio.paused) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
}

function changeVolume() {
  myAudio.volume = document.getElementById("volumeControl").value;
}

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

window.addEventListener('scroll', function() {
    var image = document.querySelector('nokken-image');
    var imagePosition = image.getBoundingClientRect();

    if(imagePosition.top < window.innerHeight && imagePosition.bottom >= 0) {
        image.classList.add('show-on-scroll');
    } else {
        image.classList.remove('show-on-scroll');
    }
});