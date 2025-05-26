document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll("#filter-buttons button");
    const cards = document.querySelectorAll("#cards .card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add active class to clicked button
            button.classList.add("active");
            
            // Get filter value
            const filter = button.dataset.filter;

            // Filter cards
            cards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === "all" || category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});