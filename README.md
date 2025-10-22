# Stage 0 → Stage 1 – Profile Card & Multi-Page Frontend App

This repository contains my **Stage 0** and **Stage 1**

This is my submission for **Stage 0: Build a Testable Profile Card** using plain **HTML**, **CSS**, and **JavaScript (vanilla)**.

# Project Description
A small, accessible, and responsive Profile Card that includes:
- User name  
- Short biography  
- Avatar image  
- Hobbies and dislikes lists  
- Social links  
- Current time (in milliseconds)  

All elements include the required `data-testid` attributes for automated testing.

# Technologies Used
- Semantic **HTML5**
- **CSS3** (Flexbox, responsive design)
- **Vanilla JavaScript**

# How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/Ahmo0/Stage0-profile-card.git





# Stage 1 – Multi-Page App Extension

Stage 1 expands the profile card into a **multi-page web app** that includes:
- **Home (index.html)** – Profile card from Stage 0  
- **About (about.html)** – Reflective page with required sections  
- **Contact (contact.html)** – Accessible form with validation  

Each page uses **semantic HTML**, shares a consistent **responsive CSS layout**, and includes all required **`data-testid`** attributes.

---

# Pages & Test IDs

# Home Page (`index.html`)
- `test-profile-card`, `test-user-name`, `test-user-bio`, `test-user-avatar`,  
  `test-user-time`, `test-user-hobbies`, `test-user-dislikes`,  
  `test-user-social-links`, etc.

# About Page (`about.html`)
- Root: `test-about-page`  
- Sections:  
  - Bio — `test-about-bio`  
  - Goals — `test-about-goals`  
  - Areas of low confidence — `test-about-confidence`  
  - Note to future self — `test-about-future-note`  
  - Extra thoughts — `test-about-extra`

# Contact Page (`contact.html`)
- Inputs:  
  - Full Name — `test-contact-name`  
  - Email — `test-contact-email`  
  - Subject — `test-contact-subject`  
  - Message — `test-contact-message`  
- Submit button — `test-contact-submit`  
- Error messages — `test-contact-error-<field>`  
- Success message — `test-contact-success`

---

# Validation Rules (Contact Page)
- All fields required  
- Email must be valid (`name@example.com`)  
- Message must be ≥ 10 characters  
- Success message shows only after valid submission  
- Errors linked to inputs via `aria-describedby` for accessibility  

---

# Technologies used
- Semantic HTML5  
- Responsive CSS3 (Flexbox + Media Queries)  
- Vanilla JavaScript (Form validation + dynamic messages)  
- Accessible forms and navigation  
- Keyboard navigable layout  
- Shared CSS file for consistent look and feel  

# Run Locally
```bash
git clone https://github.com/Ahmo0/Stage0-profile-card.git
cd Stage0-profile-card