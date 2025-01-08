document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const fadeInHorizontalElements = document.querySelectorAll('.fade-in-horizontal');
    const fadeInHorizontalVElements = document.querySelectorAll('.fade-in-horizontal-v');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    fadeInHorizontalElements.forEach(element => {
        observer.observe(element);
    });

    fadeInHorizontalVElements.forEach(element => {
        observer.observe(element);
    });
});

const infosButton = document.getElementById('infosButton');
const modalWndow = document.getElementById('modalWindow');
const modalWindowBack = document.getElementById('modalWindowBack');

infosButton.addEventListener('click', function() {
    modalWndow.style.display = 'block';
    modalWindowBack.style.display = 'block';
});

modalWindowBack.addEventListener('click', function() {
    modalWndow.style.display = 'none';
    modalWindowBack.style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
    })
    .catch(error => {
        console.error('Error:', error);
    });
});