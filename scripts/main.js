window.onload = function() {
    new LazyLoad({
        elements_selector: ".lazy",
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const activeDiv = document.querySelector(this.getAttribute('href'));
            const header = document.getElementById('header');
            const topPosition = activeDiv?.offsetTop - header.offsetHeight;

            window.scroll({
                top: topPosition, 
                left: 0, 
                behavior: 'smooth'
            });
        });
    });

    const mpItems = document.getElementsByClassName('mp-list__item');
    const mpContentItems = document.getElementsByClassName('mp-content__item');

    Array.from(mpItems).forEach(function(element) {
        element.addEventListener("click", function() {
            const mpName = element.getAttribute('data-mp');

            Array.from(mpItems).forEach(function(item) {
                if (item.getAttribute('data-mp') === mpName) {
                    item.classList.add('mp-list__item--active');
                } else item.classList.remove('mp-list__item--active');
            });
            
            Array.from(mpContentItems).forEach(function(item) {
                if (item.getAttribute('data-mp') === mpName) {
                    item.classList.add('mp-content__item--active');
                } else item.classList.remove('mp-content__item--active');
            })
        });
    });

    mpItems[0]?.click();

    const modelsItems = document.getElementsByClassName('models-list__item');
    const modelsContentItems = document.getElementsByClassName('models-content__item');

    Array.from(modelsItems).forEach(function(element) {
        element.addEventListener("click", function() {
            const modelType = element.getAttribute('data-type');

            Array.from(modelsItems).forEach(function(item) {
                if (item.getAttribute('data-type') === modelType) {
                    item.classList.add('models-list__item--active');
                } else item.classList.remove('models-list__item--active');
            });
            
            Array.from(modelsContentItems).forEach(function(item) {
                if (item.getAttribute('data-type') === modelType) {
                    item.classList.add('models-content__item--active');
                } else item.classList.remove('models-content__item--active');
            })
        });
    });

    modelsItems[0]?.click();

    // mp small
    const mpItemsSmall = document.getElementsByClassName('mp-small-list__link');

    Array.from(mpItemsSmall).forEach(function(element) {
        element.addEventListener("click", function() {
            const mpName = element.getAttribute('data-mp');

            Array.from(mpItems).forEach(function(item) {
                if (item.getAttribute('data-mp') === mpName) {
                    item.click();
                }
            });
        });
    });
}