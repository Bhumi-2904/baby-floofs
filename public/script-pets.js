document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".pet-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const id = card.dataset.id;
            window.location.href = `/pets/${id}`;
        });
    });
});
