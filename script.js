// Numbers animation (slow-moving counter)
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 100; // Slow speed for counter animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / speed;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 10); // Slower update
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelector('.menu-items');
    const totalItems = document.querySelectorAll('.menu-item').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Loop to the last item
    } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Loop to the first item
    }

    // Move the slider
    items.style.transform = `translateX(-${currentIndex * 100}%)`;
}
