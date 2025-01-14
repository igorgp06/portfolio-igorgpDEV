document.querySelectorAll('.hero-btn-a').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 225);
    });

    button.addEventListener('touch', () => {
        button.classList.remove('hover');
    });
});
