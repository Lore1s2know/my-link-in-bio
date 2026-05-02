document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  // Simple fade-in animation
  container.style.opacity = 0;
  container.style.transition = "opacity 1s ease-in-out";

  setTimeout(() => {
    container.style.opacity = 1;
  }, 100);

  // Log a little message for curious recruiters
  console.log("Portfolio loaded. Welcome to Lorena's journey!");
});
