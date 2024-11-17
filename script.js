const typedTextElement = document.getElementById("typed-text");
const texts = ["Bem-vindo ao meu portfólio!", "Descubra mais sobre mim!", "Sinta-se à vontade!"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pausa antes de apagar
            return;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Inicia o efeito ao carregar a página
typeEffect();
