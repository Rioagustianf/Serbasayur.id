// src/assets/js/adminHandler.js
export const handleAdminNavigation = () => {
  // Add hovered class to selected list item
  const list = document.querySelectorAll(".navigation li");

  function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }

  list.forEach((item) => item.addEventListener("mouseover", activeLink));

  // Menu Toggle
  const toggle = document.querySelector(".toggle");
  const navigation = document.querySelector(".navigation");
  const main = document.querySelector(".main");

  if (toggle && navigation && main) {
    toggle.onclick = () => {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };
  } else {
    console.error("Toggle, navigation, or main elements not found.");
  }
};
