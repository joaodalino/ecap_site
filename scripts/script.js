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