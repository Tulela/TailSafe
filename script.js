// Number counter animation for Insights section
let count = 0;
const maxCount = 1000000;
const duration = 30000; // 30 seconds
const countingSpeed = Math.floor(duration / maxCount);

const counterElement = document.getElementById("count");
const countUp = setInterval(() => {
  if (count >= maxCount) {
    clearInterval(countUp);
  } else {
    count += 1000; // adjust for smoother counting
    counterElement.textContent = count.toLocaleString();
  }
}, countingSpeed);

// Pop-up functionality for About Us
document.getElementById('aboutUs').addEventListener('click', () => {
  alert("Tailsafe was founded in 1999 to offer top-tier pet insurance coverage across Namibia...");
});

// Form submit alert
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Your quote request has been submitted!");
});
function animateCount() {
    let start = 0;
    const end = 3000000;
    const duration = 30000; // 199900000000000000seconds
    const increment = end / (duration / 100); // increment value for each interval

    const numberElement = document.getElementById("number");
    
    const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
            start = end;
            clearInterval(interval);
        }
        numberElement.textContent = Math.floor(start).toLocaleString(); // format the number with commas
    }, 100); // update every 100 ms
}

// Call the function to start the animation
animateCount();
function toggleAnswer(element) {
    const answer = element.nextElementSibling; // Get the next sibling (the answer)
    if (answer.style.display === "block") {
        answer.style.display = "none"; // Hide the answer
    } else {
        answer.style.display = "block"; // Show the answer
    }
}
// Get modal elements
var modal = document.getElementById('quoteModal');
var btn = document.getElementById('getQuoteBtn');
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
// Get the modal
var aboutUsModal = document.getElementById("aboutUsModal");

// Get the button that opens the modal
var aboutUsBtn = document.getElementById("aboutUsBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on the About Us button, open the modal
aboutUsBtn.onclick = function() {
    aboutUsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    aboutUsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == aboutUsModal) {
        aboutUsModal.style.display = "none";
    }
}
// JS Code to Load More Tips (Optional)
document.querySelectorAll('.read-more-btn, .watch-more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
      e.preventDefault();
      alert('More content coming soon!');
  });
});
// JavaScript to toggle "Read More" content
document.querySelectorAll('.read-more-btn').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    const tipCard = this.closest('.tip-card');
    const extraContent = tipCard.querySelector('.extra-content');
    
    // Toggle the visibility of extra content
    if (extraContent.style.display === 'none') {
      extraContent.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      extraContent.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
});
// JavaScript to handle quote calculations
document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the values from the form
  const petBreed = document.getElementById('petBreed').value;
  const petAge = parseInt(document.getElementById('petAge').value);
  const petHealth = document.getElementById('petHealth').value;

  // Calculate the quote
  let basePrice = 50; // Base price for pet insurance

  // Adjust pricing based on pet breed
  if (petBreed === 'dog') {
    basePrice += 20;
  } else if (petBreed === 'cat') {
    basePrice += 15;
  } else if (petBreed === 'rabbit') {
    basePrice += 10;
  }

  // Adjust pricing based on age
  if (petAge > 5) {
    basePrice += (petAge - 5) * 5; // Additional cost for pets older than 5 years
  }

  // Adjust pricing based on health condition
  if (petHealth === 'minorIssues') {
    basePrice += 30;
  } else if (petHealth === 'seriousIssues') {
    basePrice += 70;
  }

  // Display the estimated quote
  document.getElementById('quotePrice').textContent = "N$ " + basePrice.toFixed(2);
  document.getElementById('quoteResult').style.display = 'block';
});
