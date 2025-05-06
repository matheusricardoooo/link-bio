const linkButtons = document.querySelectorAll('.link-button');

function aplicarEfeitoHover(botao) {
    botao.addEventListener('mouseenter', () => {
        botao.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        botao.style.transform = 'scale(1.03)';
    });

    botao.addEventListener('mouseleave', () => {
        botao.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        botao.style.transform = 'scale(1)';
    });

    botao.addEventListener('touchstart', () => {
        botao.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        botao.style.transform = 'scale(1.03)';
    });

    botao.addEventListener('touchend', () => {
        botao.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        botao.style.transform = 'scale(1)';
    });
}