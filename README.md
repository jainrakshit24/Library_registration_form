# 📚 Library Book Registration System

A **multi-step, card-based form** for registering library books with a clean UI, smooth animations, and Google Sheets integration via **Google Apps Script**.
Built using **TypeScript**, **HTML5**, and **CSS3** for better maintainability and type safety.

---

## 🚀 Features

* **Multi-step navigation** – Next / Back buttons for seamless flow
* **Modern UI** – Card layout with responsive design
* **Form validation** – Ensures correct input before moving forward
* **Google Apps Script integration** – Saves data directly to Google Sheets
* **Loading clock animation** – Shows while submitting data
* **Success popup** – Confirms completion after submission
* **TypeScript-based codebase** – Clean, typed, and maintainable logic

---

## 🖥️ Tech Stack

* **HTML5** – Markup structure
* **CSS3** – Styling & animations
* **TypeScript** – Core logic & form validation
* **Google Apps Script** – Backend to store data in Google Sheets

---

## 📂 Project Structure

```
📁 Library-Book-Registration
│── 📄 index.html        # Main HTML
│── 📄 style.css         # Styling & animations
│── 📄 script.ts         # TypeScript source code
│── 📄 script.js         # Compiled JavaScript (auto-generated)
│── 📄 README.md         # Documentation
```

---

## ⚙️ Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/library-book-registration.git
   cd library-book-registration
   ```

2. **Install TypeScript** (if not already installed)

   ```bash
   npm install -g typescript
   ```

3. **Compile TypeScript to JavaScript**

   ```bash
   tsc script.ts
   ```

4. **Open `index.html`** in your browser.

5. **Set Up Google Apps Script**

   * Create a new Google Sheet
   * Go to **Extensions → Apps Script**
   * Paste the backend script (see below)
   * Deploy as a **Web App** (set access to *Anyone with the link*)
   * Replace the URL in `script.ts`:

     ```typescript
     const scriptURL: string = 'YOUR_GOOGLE_APP_SCRIPT_URL';
     ```

---

## 📜 Google Apps Script Example

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  sheet.appendRow([
    data.employeeName,
    data.employeeID,
    data.date,
    data.bookTitle,
    data.authorName,
    data.isbn,
    data.category,
    data.copies
  ]);
  return ContentService.createTextOutput("Success");
}
```

---

## 🎯 Future Enhancements

* Admin dashboard for viewing submissions in real-time
* Search & filter options for registered books
* Email confirmation after successful registration

---

## 🤝 Contributing

* Fork the repository
* Create a feature branch
* Commit changes
* Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** – free to use, modify, and distribute.

---
