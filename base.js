
// Menu Section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Contact
const form = document.querySelector('.contact form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});

// Fetch menu JSON URL
const menuContainer = document.querySelector('.menu-items');
const menuURL = "https://api.jsonbin.io/v3/b/6910ce36ae596e708f4e9df7"; // এখানে শুধু তোমার JSON URL বসাও

fetch(menuURL)
    .then(res => res.json())
    .then(data => {
        menuContainer.innerHTML = ''; 
        data.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('menu-item');
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            menuContainer.appendChild(div);
        });
    })
    .catch(err => {
        console.error('Error fetching menu:', err);
        menuContainer.innerHTML = '<p>Menu cannot be loaded at this time.</p>';
    });
