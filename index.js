document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
    });
});

// Example of dynamic message on menu items
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        alert(`You selected: ${this.querySelector('h3').textContent}`);
    });
});