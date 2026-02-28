document.addEventListener('DOMContentLoaded', () => {
    /* 1. Сначала я получу корневой элемент формы из класса .form-wizard */
    const form = document.querySelector('.form-wizard');
    /* 9. Я получуу элемент .progress */
    const progress = form.querySelector('.progress')
    /* 2. Затем я выделяю все элементы <li> в классе .progress-container */
    const stepIndicators = form.querySelectorAll('.progress-container li');
    console.log(form);
    console.log(stepIndicators);
    console.log(stepIndicators.length);
    /* 3. Затем я получу корневой элемент и переопределю переменную --steps в CSS */
    document.documentElement.style.setProperty("--steps", stepIndicators.length);
    /* 4. Здесь я определяю текущий step и переношу его в индекс первого шага */
    let currentStep = 0;
    /* 5. Далее, я создам функцию, которая будет имитировать последовательность шагов */
    setInterval(() => {

        currentStep++;

        console.log(currentStep);

        if(currentStep > stepIndicators.length - 1) {
            currentStep = 0;
        }

        /* 10. Внутри функции я я рассчитываю процент ширины и зависимости от текущего шага (currentStep)  */
        let width = currentStep / (stepIndicators.length - 1);
        console.log(width);
        /* Я использую полученный результат для изменения длины элемента индикатора выполнения */
        progress.style.transform = `scaleX(${width})`;


        /* 6. Внутри функции я буду проходить циклом каждый этап выполнения */
        stepIndicators.forEach((indicator, index) => {
            /* 7. Затем я изменю текущий ('current') класс для каждого из них */
            indicator.classList.toggle('current', currentStep === index);
            /* 8. Изменяю состояние класса на "Готово" ('done') */
            indicator.classList.toggle('done', currentStep > index);
        });

    }, 2000);

});