document.querySelectorAll('hero-btn-a').forEach(button => {
    button.addEventListener('clicl', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked')
        }, 225);
    });
});