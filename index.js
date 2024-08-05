

// Set the target date and time for the countdown
const targetDate = new Date("June 7, 2025 16:30:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  

  // Display the calculated time in the HTML elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Countdown expired";
  }
}, 1000);


document.addEventListener("DOMContentLoaded", () => {
  // Select all nav links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Select the navbar collapse element
  const navbarCollapse = document.querySelector("#navbarSupportedContent");

  // Add click event listener to each nav link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Check if the navbar collapse element is currently open
      if (navbarCollapse.classList.contains("show")) {
        // Remove the "show" class to collapse the menu
        const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bootstrapCollapse.hide();
      }
    });
  });
});
