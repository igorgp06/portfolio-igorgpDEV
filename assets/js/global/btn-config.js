document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.default-button');

    function ButtonHover() {
        const width = window.innerWidth;
        buttons.forEach(button => {
            if (width < 991) {
                button.style.pointerEvents = 'none';
            } else {
                button.style.pointerEvents = 'auto';
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 200);
        });
    });

    window.addEventListener('resize', ButtonHover);

    ButtonHover();
});
