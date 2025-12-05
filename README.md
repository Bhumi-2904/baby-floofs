# Baby Floofs – Pet Adoption Mini App

Baby Floofs is a minimal, aesthetically designed pet adoption application built with **Express.js**, **EJS**, and a soft pastel design system.  
The goal is simple: create a warm, approachable interface where users can browse pets, explore their personalities, and view detailed profiles.

This project focuses on clean structure, responsive UI, and maintaining a consistent, gentle brand voice throughout the application.

---

## Features

- Clean, pastel-themed UI inspired by soft Gen-Z aesthetics  
- Dynamic routing using Express (`/pets` and `/pets/:id`)  
- Modular EJS templates for scalability  
- Dedicated pages for Home, Pets, Pet Details, About, and Contact  
- Organized public assets for styling and scripts  
- Lightweight JavaScript for interactions  
- Well-structured and beginner-friendly codebase  

---

## Tech Stack

- **Node.js**
- **Express.js**
- **EJS Templating**
- **Bootstrap 5**
- **Custom CSS**
- **Vanilla JavaScript**

---

## Folder Structure

```
EJSDir/
│
├── public/
│   ├── style.css
│   ├── style-pets.css
│   ├── style-pet-details.css
│   ├── style-about-contact.css
│   ├── script.js
│   ├── script-pets.js
│   └── script-pet-details.js
│
├── views/
│   ├── home.ejs
│   ├── pets.ejs
│   ├── pet-details.ejs
│   ├── about.ejs
│   └── contact.ejs
│
├── data_pet.json
├── index.js
├── package.json
└── package-lock.json

```
---

## Routes Overview

| Route            | Description                          |
|-----------------|--------------------------------------|
| `/`             | Home page                            |
| `/pets`         | All pets displayed in grid layout    |
| `/pets/:id`     | Individual pet detail page           |
| `/about`        | About the project                    |
| `/contact`      | Contact form page                    |

---

## Setup Instructions

1. Clone the repository:
```
git clone https://github.com/your-username/baby-floofs.git
cd baby-floofs
```
2. Install dependencies:
```
npm install
```
3. Start the server:
```
node index.js
```
4. Visit the app:
```
http://localhost:8080
```

## Design Philosophy

- Soft, welcoming visual environment
- Rounded elements and pastel color palette
- Clean typography (Poppins + Nunito)
- Personality-centric pet profiles
- Focus on clarity, warmth, and consistent microcopy

## Future Enhancements

- Database integration (MongoDB or PostgreSQL)
- User accounts and favorites
- Pet filtering and search
- Backend handling of form submissions

## Author

Created with attention to detail, structured development practices, and a focus on aesthetic presentation.

## License

This project is intended for educational and portfolio use.
