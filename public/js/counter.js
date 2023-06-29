const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
};
const startCounter = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll('.counter');
            const speed = 500;

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });

            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(startCounter, options);

const counterSection = document.getElementById('home__counter');
observer.observe(counterSection);