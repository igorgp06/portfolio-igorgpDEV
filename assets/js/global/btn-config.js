document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.default-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200);
        });

        /* TODO: fazer a lógica q analisa o tamanho da tela */
    })
})
