// Function to calculate age
const ageCalculate = () => {
  // Get today's date
  const today = new Date();

  // Get the user-input birth date
  const inputDate = new Date(document.getElementById("date-input").value);

  // Convert dates to milliseconds since the Unix epoch
  const birthTime = inputDate.getTime();
  const currentTime = today.getTime();

  // Check if birth date is in the future
  if (birthTime > currentTime) {
    alert("Not Born Yet");
    displayResult("-", "-", "-", "-", "-"); // Display placeholders for days, months, years, hours, and minutes
    return;
  }

  // Calculate the time difference in milliseconds
  const diffTime = currentTime - birthTime;

  // Calculate years, months, days, hours, minutes, and seconds from the time difference
  const years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (diffTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (diffTime % (1000 * 60)) / 1000
  );

  // Display the calculated age
  displayResult(days, months, years, hours, minutes, seconds);

document.querySelector(".output-wrapper").style.display = "flex";
};
// Function to display the age result
const displayResult = (days, months, years, hours, minutes, seconds) => {
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

// Attach ageCalculate function to the button click event
document.getElementById("calc-age-btn").addEventListener("click", ageCalculate);

// Update seconds continuously
setInterval(() => {
  const currentDate = new Date();
  const inputDate = new Date(document.getElementById("date-input").value);
  const timeDifference = currentDate - inputDate;
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  document.getElementById("seconds").textContent = seconds;
}, 1000);