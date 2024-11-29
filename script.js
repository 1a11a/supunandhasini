// Countdown Timer
const weddingDate = new Date("January 15, 2025 08:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "<p>The wedding has started!</p>";
  }
};

const timer = setInterval(countdown, 1000);

const form = document.getElementById('rsvpForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    // Collect form data into an object
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Log the data (for debugging)
    console.log('Collected Data:', data);

    // Send the data to the Google Apps Script URL
    fetch('https://script.google.com/macros/s/AKfycbwCynbX0qhurvIKR_dPpFruRoZIeJHNhpt8jRbY7-NLKDD_9oWpV5EqzKgo7m60utwv/exec', { // Replace with your Web App URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the form data as JSON
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === "success") {
            alert('RSVP Submitted! Data added to Google Sheet.');
            form.reset(); // Reset the form
        } else {
            alert('Error submitting RSVP. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting RSVP. Please try again.');
    });
});

