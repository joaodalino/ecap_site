        document.addEventListener('DOMContentLoaded', function() {
            const scroller = document.querySelector('.ajusteparceiros');
            let state = true;
            setInterval(() => {
                if (state) {
                    scroller.scrollLeft += 1.5; // scroll to the right by 1.5 pixels
                    if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth)
                        state = false;
                } else {
                    scroller.scrollLeft -= 3; // scroll to the left by 1.5 pixels
                    if (scroller.scrollLeft <= 0)
                        state = true;
                }
            }, 15);
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
        

