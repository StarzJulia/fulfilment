window.onload = function () {
    new LazyLoad({
        elements_selector: ".lazy",
        unobserve_entered: true,
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

    Array.from(mpItems).forEach(function (element) {
        element.addEventListener("click", function () {
            const mpName = element.getAttribute('data-mp');

            Array.from(mpItems).forEach(function (item) {
                if (item.getAttribute('data-mp') === mpName) {
                    item.classList.add('mp-list__item--active');
                } else item.classList.remove('mp-list__item--active');
            });

            Array.from(mpContentItems).forEach(function (item) {
                if (item.getAttribute('data-mp') === mpName) {
                    item.classList.add('mp-content__item--active');
                } else item.classList.remove('mp-content__item--active');
            })
        });
    });

    mpItems[0]?.click();

    const modelsItems = document.getElementsByClassName('models-list__item');
    const modelsContentItems = document.getElementsByClassName('models-content__item');

    Array.from(modelsItems).forEach(function (element) {
        element.addEventListener("click", function () {
            const modelType = element.getAttribute('data-type');

            Array.from(modelsItems).forEach(function (item) {
                if (item.getAttribute('data-type') === modelType) {
                    item.classList.add('models-list__item--active');
                } else item.classList.remove('models-list__item--active');
            });

            Array.from(modelsContentItems).forEach(function (item) {
                if (item.getAttribute('data-type') === modelType) {
                    item.classList.add('models-content__item--active');
                } else item.classList.remove('models-content__item--active');
            })
        });
    });

    modelsItems[0]?.click();

    // mp small
    const mpItemsSmall = document.getElementsByClassName('mp-small-list__link');

    Array.from(mpItemsSmall).forEach(function (element) {
        element.addEventListener("click", function () {
            const mpName = element.getAttribute('data-mp');

            Array.from(mpItems).forEach(function (item) {
                if (item.getAttribute('data-mp') === mpName) {
                    item.click();
                }
            });
        });
    });

    // forms
    const validateEmail = (email) => {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }

    const validateName = (name) => {
        return /^[A-zА-я ]+$/.test(name)
    }

    const validateField = (name) => {
        const field = document.getElementById(name);
        const value = field.value;
        const isRequired = field.required;
        switch (name) {
            case 'name':
                return validateName(value);
            case 'email':
                return validateEmail(value);
            case 'agreement':
                return isRequired ? field.checked : true;
            default:
                return value !== undefined && value !== '';
        }
    }

    const valudateMainForm = () => {
        let isValid = true;

        isValid &&= validateField('name');
        isValid &&= validateField('email');
        isValid &&= validateField('agreement');

        console.log(validateField('name'), validateField('email'), validateField('agreement'))

        return isValid
    }

    document.getElementById('main_form').onsubmit = function (event) {
        event.preventDefault();

        if (valudateMainForm()) {
            document.getElementById('main_form__button').removeAttribute('disabled');
            // send form
            return
        }

        document.getElementById('main_form__button').setAttribute('disabled', true);
        return
    }

    const mainFormFields = document.getElementsByClassName('main_form__field');
    Array.from(mainFormFields).forEach(function (element) {
        ['change', 'input'].forEach((event) => {
            element.addEventListener(event, () => {
                if (valudateMainForm()) {
                    document.getElementById('main_form__button').removeAttribute('disabled');
                    return
                }
                document.getElementById('main_form__button').setAttribute('disabled', true);
            });
        })
    });
}
