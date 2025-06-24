console.log("Hit me up on discord :3\n@Atomixal");

// Global variables for Vanta effect management
let vantaEffect = null;

// Vanta configuration object
const vantaConfig = {
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
};

function initializeVanta() {
  if (!vantaEffect) {
    vantaEffect = VANTA.BIRDS(vantaConfig);
  }
}

function destroyVanta() {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
}

function toggleButterflies() {
  const div = document.getElementById("vanta");
  const button = document.getElementById("butterfliesToggle");
  const currentlyDisabled = localStorage.getItem('butterfliesDisabled') === 'true';
  
  if (currentlyDisabled) {
    // Turn on butterflies
    div.style.display = "block";
    initializeVanta();
    button.textContent = "Turn off butterflies!";
    localStorage.setItem('butterfliesDisabled', 'false');
  } else {
    // Turn off butterflies
    div.style.display = "none";
    destroyVanta();
    button.textContent = "Turn on butterflies!";
    localStorage.setItem('butterfliesDisabled', 'true');
  }
}

function initializePage() {
  // Check localStorage for butterfly preference
  const butterfliesDisabled = localStorage.getItem('butterfliesDisabled') === 'true';
  const button = document.getElementById("butterfliesToggle");
  
  // Set initial state based on saved preference
  if (butterfliesDisabled) {
    document.getElementById("vanta").style.display = "none";
    button.textContent = "Turn on butterflies!";
  } else {
    initializeVanta();
    button.textContent = "Turn off butterflies!";
  }
  
  button.addEventListener("click", toggleButterflies);
}

// Initialize when DOM is loaded
window.addEventListener("DOMContentLoaded", initializePage);