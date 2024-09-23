document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.ajusteparceiros');
    
    if (!scroller) return;

    let state = true;
    let scrollSpeed = 1.5;
    let scrollingActive = false;  // Controle para verificar se a animação do slider está ativa
    let userScrolling = false;    // Controle para pausar a animação enquanto o usuário estiver rolando no site
    let pauseTimeout;

    function scrollAnimation() {
        if (scrollingActive && !userScrolling) {  // Pausa a animação enquanto o usuário estiver rolando
            if (state) {
                scroller.scrollLeft += scrollSpeed;
                if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
                    state = false;
                }
            } else {
                scroller.scrollLeft -= scrollSpeed * 2;
                if (scroller.scrollLeft <= 0) {
                    state = true;
                }
            }
        }
        requestAnimationFrame(scrollAnimation);
    }

    // Função para pausar a animação durante a rolagem
    function pauseSliderWhileScrolling() {
        userScrolling = true;  // Pausa a animação

        // Se o usuário parar de rolar, retome após 1 segundo
        clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => {
            userScrolling = false;
        }, 1);
    }

    // Detecta rolagem em toda a página
    window.addEventListener('scroll', pauseSliderWhileScrolling);

    // Inicia a animação quando o elemento estiver visível
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollingActive = true;  // Ativa o slider automático
            } else {
                scrollingActive = false;  // Pausa o slider automático
            }
        });
    });

    // Observa a div .ajusteparceiros
    observer.observe(scroller);

    scrollAnimation();  // Inicia a animação do slider
});



        let valor = false; 

        document.getElementById("butas").addEventListener("click", function() {
            // Alterna o valor lógico de 'valor' a cada clique
            valor = !valor;
            
            // Seleciona o elemento da tag que você quer mudar o display
            const menutelefone = document.querySelector(".menutelefone");

            // Verifica o estado de 'valor' para aplicar o display adequado
            if (valor === true) {
                menutelefone.style.display = "flex"; // Mostra o menu
            } else {
                menutelefone.style.display = "none"; // Esconde o menu
            }
        });

        document.getElementById("brutus").addEventListener("click", function() {
            // Alterna o valor lógico de 'valor' a cada clique
            valor = !valor;
            
            // Seleciona o elemento da tag que você quer mudar o display
            const menutelefone = document.querySelector(".menutelefone");

            // Verifica o estado de 'valor' para aplicar o display adequado
            if (valor === true) {
                menutelefone.style.display = "flex"; // Mostra o menu
            } else {
                menutelefone.style.display = "none"; // Esconde o menu
            }
        });