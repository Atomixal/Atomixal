console.log("Hit me up on discord :3\n@Atomixal");

window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x70e2f,
    color1: 0xd200ff,
    color2: 0x3d892a,
    wingSpan: 17.0,
    separation: 100.0,
    alignment: 1.0,
    cohesion: 14.0,
  });

  // Add event listener for button click
  document
    .getElementById("butterfliesToggle")
    .addEventListener("click", toggleButterflies);
});

function toggleButterflies() {
  let div = document.getElementById("vanta"); // Remove extra "#"
  let button = document.getElementById("butterfliesToggle");

  if (div.style.display === "none") {
    div.style.display = "block";
    button.textContent = "Turn off butterflies!";
  } else {
    div.style.display = "none";
    button.textContent = "Turn on butterflies!";
  }
}
