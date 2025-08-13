// script.js

// === Multi-step Form Navigation ===
const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".btn.next");
const prevBtns = document.querySelectorAll(".btn.prev");
let currentStep = 0;

function showStep(step) {
  steps.forEach((formStep, index) => {
    formStep.classList.toggle("active", index === step);
  });
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (validateStep(currentStep)) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
  });
});

function validateStep(stepIndex) {
  const inputs = steps[stepIndex].querySelectorAll("input, select");
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}

// === Form Submission ===
document.getElementById("libraryForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const status = document.getElementById("status");
  status.textContent = "⏳ Submitting...";
  
  const formData = {
    employeeName: this.employeeName.value,
    employeeID: this.employeeID.value,
    date: this.date.value,
    bookTitle: this.bookTitle.value,
    authorName: this.authorName.value,
    isbn: this.isbn.value,
    category: this.category.value,
    copies: this.copies.value
  };

  fetch("https://script.google.com/macros/s/AKfycby-owMwpxV3wwwl9A0DOjYdoSIvMOSi79Sq5XUR0Wltby6Q3osOl-aKL-DkNm_yRqw/exec", {
    method: "POST",
    mode: "no-cors", // Keep this if you don't need response data
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
  .then(() => {
    status.textContent = "✅ Form submitted successfully!";
    this.reset();
    currentStep = 0;
    showStep(currentStep);
  })
  .catch(() => {
    status.textContent = "❌ Error submitting form. Please try again.";
  });
});

// Show the first step on page load
showStep(currentStep);
