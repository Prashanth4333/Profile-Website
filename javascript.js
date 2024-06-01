document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu");
  const navbar = document.getElementById("navbar");

  menuBtn.addEventListener("click", function () {
    if (navbar.style.display === "flex") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "flex";
    }
  });
});
