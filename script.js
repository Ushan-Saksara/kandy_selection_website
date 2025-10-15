// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon-1");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}




// -------- SLIDER AUTO-SLIDE -------- //
let index = 0;

// Get both sliders (desktop + mobile)
const desktopSlider = document.getElementById("slider");
const mobileSlider = document.getElementById("slider1");

setInterval(() => {
  index = (index + 1) % desktopSlider.children.length;

  // Move desktop slider
  if (desktopSlider) {
    desktopSlider.style.transform = `translateX(-${index * 100}%)`;
  }

  // Move mobile slider
  if (mobileSlider) {
    mobileSlider.style.transform = `translateX(-${index * 100}%)`;
  }
}, 5000);




// Toggle dropdown by ID
function toggleDropdown(id) {
  const menu = document.getElementById(id);
  const isVisible = menu.classList.contains("show");

  // Close all other dropdowns
  document.querySelectorAll(".dropdown-content, .dropdown-content1").forEach(m => {
    m.classList.remove("show");
  });

  // Toggle clicked one
  if (!isVisible) {
    menu.classList.add("show");
  }
}





// Hover show/hide
function showDropdown(id) {
  document.getElementById(id).classList.add("show");
}

function hideDropdown(id) {
  document.getElementById(id).classList.remove("show");
}

// Close dropdowns when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn1')) {
    document.querySelectorAll(".dropdown-content, .dropdown-content1").forEach(menu => {
      menu.classList.remove("show");
    });
  }
};




const wrapper = document.getElementById("boxWrapper");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

let scrollIndex = 0;

rightBtn.addEventListener("click", () => {
  const boxes = wrapper.children.length;
  if (scrollIndex < boxes) { // keep 4 visible
    scrollIndex++;
    wrapper.style.transform = `translateX(-${scrollIndex * 85}%)`;
  }
});

leftBtn.addEventListener("click", () => {
  if (scrollIndex > 0) {
    scrollIndex--;
    wrapper.style.transform = `translateX(-${scrollIndex * 100}%)`;
  }
});


const wrapper1 = document.getElementById("boxWrapper1");
const leftBtn1 = document.querySelector(".arrow.left1");
const rightBtn1 = document.querySelector(".arrow.right1");

let scrollIndex1 = 0;

rightBtn1.addEventListener("click", () => {
  const boxes = wrapper1.children.length;
  if (scrollIndex1 < boxes - 6) { // keep 4 visible
    scrollIndex1++;
    wrapper1.style.transform = `translateX(-${scrollIndex1 * 98}%)`;
  }
});

leftBtn1.addEventListener("click", () => {
  if (scrollIndex1 > 0) {
    scrollIndex1--;
    wrapper1.style.transform = `translateX(-${scrollIndex1 * 100}%)`;
  }
});