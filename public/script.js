const PET_DATA = {
    "1": {
        "name": "Milo",
        "type": "Dog",
        "age": 2,
        "breed": "Beagle",
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=60",
        "description": "Friendly, energetic, and loves cuddles. Milo will follow you around like a shadow!",
        "caption": "The certified cuddle expert who loves treats."
    },
    "2": {
        "name": "Snowy",
        "type": "Cat",
        "age": 1,
        "breed": "Persian",
        "image": "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=60",
        "description": "A calm, fluffy queen who loves warm sunspots and soft blankets. Requires brushing and adoration.",
        "caption": "A gentle baby floof demanding five-star service."
    },
    "3": {
        "name": "Buddy",
        "type": "Dog",
        "age": 4,
        "breed": "Golden Retriever",
        "image": "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg",
        "description": "A loyal sweetheart who loves fetch, belly rubs, and literally everyone. He's the perfect paw-fect match for a family.",
        "caption": "Your new bestie, ready for endless adventure."
    },
    "4": {
        "name": "Luna",
        "type": "Cat",
        "age": 3,
        "breed": "Maine Coon",
        "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=60",
        "description": "A majestic fluffball with big eyes and bigger attitude. Extremely photogenic and requires a high-quality scratching post.",
        "caption": "The tiny drama queen, but with *fabulous* fur."
    },
    "5": {
        "name": "Coco",
        "type": "Dog",
        "age": 1,
        "breed": "Pomeranian",
        "image": "https://i.pinimg.com/564x/24/c8/07/24c80784d34ac86d1fc35658b45641be.jpg",
        "description": "Small, sassy, and adorable. Coco thinks she's 6 feet tall and runs the house. Loves tiny sweaters.",
        "caption": "Pure baby floof, 90% sass, 10% fluff."
    }
};

/**
 * Creates the HTML markup for a single pet card.
 * @param {object} pet - The pet data object.
 * @param {string} id - The pet ID.
 * @returns {string} The HTML string for the pet card.
 */
function createPetCard(pet, id) {
    // NOTE: The link is updated to use the Express route pattern /pets/:id
    return `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card pet-card h-100">
                <img src="${pet.image}" class="card-img-top pet-card-img" alt="${pet.name}, the ${pet.breed}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title mb-1">${pet.name} (${pet.type})</h5>
                    <p class="card-text text-muted small mb-2">${pet.breed}</p>
                    <p class="card-text personality-caption">${pet.caption}</p>
                    <a href="/pets/${id}" class="btn custom-btn-outline rounded-pill mt-auto">View Profile</a>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders a subset of pet cards for the Home Page showcase.
 */
function renderHomeShowcase() {
    const showcaseContainer = document.getElementById('pet-showcase-grid');
    if (showcaseContainer) {
        // Show only the first 3 pets for the Home page
        const petIDs = Object.keys(PET_DATA).slice(0, 3);
        let html = '';
        petIDs.forEach(id => {
            html += createPetCard(PET_DATA[id], id);
        });
        showcaseContainer.innerHTML = html;
    }
}

/**
 * Renders all pet cards for the Meet the Pets page.
 * Assumes this script runs on the /pets page
 */
function renderAllPetsGrid() {
    const gridContainer = document.getElementById('all-pets-grid');
    if (gridContainer) {
        let html = '';
        for (const id in PET_DATA) {
            html += createPetCard(PET_DATA[id], id);
        }
        gridContainer.innerHTML = html;
    }
}

/**
 * Renders the detail view for a specific pet.
 * Assumes this script runs on the /pets/:id page
 */
function renderPetDetails() {
    const path = window.location.pathname;
    // Extract the pet ID from the URL path (e.g., /pets/3 -> 3)
    const petIdMatch = path.match(/\/pets\/(\d+)$/);
    const petId = petIdMatch ? petIdMatch[1] : null;

    const pet = PET_DATA[petId];

    if (!pet) {
        // Handle case where pet ID is missing or invalid
        const detailContainer = document.querySelector('.pet-detail-page .container');
        if (detailContainer) {
             detailContainer.innerHTML = `
                <div class="text-center py-5">
                    <h1 class="display-4 showcase-title">Oops! Floof Not Found.</h1>
                    <p class="lead tagline-text">Looks like this gentle baby is currently on a very important nap or has already found their paw-fect match!</p>
                    <a href="/pets" class="btn custom-btn-primary rounded-pill mt-3">Back to the Floofs</a>
                </div>
            `;
        }
        return;
    }

    // Populate the template elements
    document.getElementById('pet-detail-title').textContent = `${pet.name} | Baby Floofs`;
    document.getElementById('pet-image').src = pet.image;
    document.getElementById('pet-image').alt = `${pet.name}'s profile image`;
    document.getElementById('pet-name').textContent = pet.name;
    document.getElementById('pet-personality').textContent = pet.caption;
    document.getElementById('pet-type').textContent = pet.type;
    document.getElementById('pet-breed').textContent = pet.breed;
    document.getElementById('pet-age').textContent = `${pet.age} ${pet.age === 1 ? 'Year' : 'Years'} Old`;
    document.getElementById('pet-description').textContent = pet.description;
}


// Simple router-like behavior based on the current page path
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path.includes('/index')) {
        renderHomeShowcase();
    } else if (path === '/pets' || path.includes('/pets')) {
        // If the path is exactly /pets, render the grid.
        if (path === '/pets') {
            renderAllPetsGrid();
        } else if (path.match(/\/pets\/\d+$/)) {
            // If the path matches /pets/:id, render details.
            renderPetDetails();
        }
    }
});