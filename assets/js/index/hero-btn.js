document.querySelectorAll('.hero-btn-a').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 225); /* TODO: esse código deve ser global para todos os botões do site */
    });

    button.addEventListener('touch', () => {
        button.classList.remove('hover');
    });
});
