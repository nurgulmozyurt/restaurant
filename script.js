// Menu-link naar juiste sectie
document.querySelectorAll('a[href="#menu"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (!window.location.pathname.includes("index.html")) {
      event.preventDefault();
      window.location.href = "index.html#menu";
    }
  });
});

// Dropdown-functionaliteit
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.querySelector(".dropdown-content");

  if (dropdown && dropdownContent) {
    dropdown.addEventListener("mouseenter", function () {
      dropdownContent.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
      dropdownContent.style.display = "none";
    });
  }
});
