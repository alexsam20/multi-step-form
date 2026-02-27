document.addEventListener('DOMContentLoaded', () => {
    /* Сначала я получу корневой элемент формы с классом .form-wizard */
    const form = document.querySelector('.form-wizard');
    /* Затем я выделяю все элементы <li> в селекторе .progress-container */
    const stepIndicators = form.querySelectorAll('.progress-container li');
    console.log(form);
    console.log(stepIndicators);
    console.log(stepIndicators.length);
    /* Затем я получу корневой элемент и переопределю переменную --steps в CSS */
    document.documentElement.style.setProperty("--steps", stepIndicators.length);

});