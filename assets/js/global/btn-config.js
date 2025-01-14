document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.default-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200);
        });

        buttons.addEventListener('touch', () => {
            button.classList.remove('hover');
        })
    })
})
