document.addEventListener('DOMContentLoaded', () => {
    const fotos = document.querySelectorAll('.galeria-item img');
    const sobreposicoes = document.querySelectorAll('.galeria-item .sobreposicao');
    const botaoTema = document.querySelector('.botao-tema');
    const logo = document.querySelector('#logo');

    // Exibir sobreposição ao passar o mouse
    fotos.forEach((foto, index) => {
        foto.addEventListener('mouseover', () => {
            sobreposicoes[index].style.opacity = '1';
        });
        foto.addEventListener('mouseout', () => {
            sobreposicoes[index].style.opacity = '0';
        });
    });

    // Alternar tema
    botaoTema.addEventListener('click', () => {
        document.body.classList.toggle('tema-claro');
        if (document.body.classList.contains('tema-claro')) {
            logo.src = 'img/logo_sem_sem_fundo.webp'; // Caminho para a logo do tema claro
        } else {
            logo.src = 'img/logo_solo_leveling.png'; // Caminho para a logo do tema escuro
        }
    });
});
