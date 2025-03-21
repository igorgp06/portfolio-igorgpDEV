document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const closeIcon = document.querySelector('.close-icon');
    const navbarLinks = document.querySelector('.navbar-links');
    const links = document.querySelectorAll('.links li a');

    function resetMenu() {
        if (window.innerWidth > 950) {
            navbarLinks.classList.remove('active');
            closeIcon.style.display = 'none';
            toggleButton.style.display = 'none';
        } else {
            toggleButton.style.display = 'flex';
            closeIcon.style.display = 'none';
            navbarLinks.classList.remove('active');
        }
    };

    toggleButton.addEventListener('click', function () {
        navbarLinks.classList.add('active');
        toggleButton.style.display = 'none';
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function () {
        navbarLinks.classList.remove('active');
        closeIcon.style.display = 'none';
        toggleButton.style.display = 'flex';
    });

    links.forEach(link => {
        link.addEventListener('click', function () {
            navbarLinks.classList.remove('active');
            closeIcon.style.display = 'none';
            if (window.innerWidth <= 950) {
                toggleButton.style.display = 'flex';
            } else {
                toggleButton.style.display = 'none'
            }
        });
    });

    window.addEventListener('resize', resetMenu);

    resetMenu()
});
