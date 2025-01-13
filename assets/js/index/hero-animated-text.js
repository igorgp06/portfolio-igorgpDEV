document.addEventListener('DOMContentLoaded', function () {
    const textAnimationSpan = document.querySelector('.animated-text');
    const textArray = ["Desenvolvimento Web", "Soluções Criativas", "Otimizações Web", "E-Commerce", "Funcionalidade"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 1000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function write() {
        if (charIndex < textArray[textArrayIndex].length) {
            textAnimationSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(write, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    };

    function erase() {
        if (charIndex > 0) {
            textAnimationSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(write, newTextDelay + 500);
        }
    };

    function insertAnimation() {
        textAnimationSpan.textContent = textArray[textArrayIndex];
        charIndex = textArray[textArrayIndex].length;
        setTimeout(erase, newTextDelay);
    };
    
    function adjustSize() {
        const animatedText = document.querySelector('.animated-text');
        const parentWidth = animatedText.parentElement.offsetWidth;

        animatedText.style.fontSize = '2.2rem';
        animatedText.style.fontWeight = '550';
        if (animatedText.scrollWidth > parentWidth) {
            animatedText.style.fontSize = '1.5rem';
            animatedText.style.fontWeight = '500';
        }
    };

    window.addEventListener('resize', adjustSize);
    document.addEventListener('DOMContentLoaded', adjustSize);

    insertAnimation();
});
