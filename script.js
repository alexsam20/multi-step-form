document.addEventListener('DOMContentLoaded', () => {
    /* 1. Сначала я получу корневой элемент формы из класса .form-wizard */
    const form = document.querySelector('.form-wizard');
    /* 9. Я получуу элемент .progress */
    const progress = form.querySelector('.progress');
    /* 34. Я выделю все элементы формы с классом '.steps-container' */
    const stepsContainer = form.querySelector('.steps-container');
    /* 30. Я выделю все элементы формы с классом '.step' */
    const steps = form.querySelectorAll('.step');
    /* 2. Затем я выделяю все элементы <li> в классе .progress-container */
    const stepIndicators = form.querySelectorAll('.progress-container li');
    console.log(form);
    console.log(stepIndicators);
    console.log(stepIndicators.length);
    /* 12. Выбираю все кнопки формы */
    const prevButton = form.querySelector(".prev-btn");
    const nextButton = form.querySelector(".next-btn");
    const submitButton = form.querySelector(".submit-btn");


    /* 3. Затем я получу корневой элемент и переопределю переменную --steps в CSS */
    document.documentElement.style.setProperty("--steps", stepIndicators.length);
    /* 4. Здесь я определяю текущий step и переношу его в индекс первого шага */
    let currentStep = 0;
    
    /* 17. Я создам эту функцию (updateProgress()) и перенесу в неё логику отслеживания прогресса на каждом шаге */    
    const updateProgress = () => {
        /* 10. Внутри функции я я рассчитываю процент ширины и зависимости от текущего шага (currentStep)  */
        let width = currentStep / (stepIndicators.length - 1);
        console.log(width);
        /* 11. Я использую полученный результат для изменения длины элемента индикатора выполнения */
        progress.style.transform = `scaleX(${width})`;
        /* 35. Внутри функции обновления прогресса я сделаю так, что бы высота соответствовала высоте текущего шага */
        stepsContainer.style.height = steps[currentStep].offsetHeight + "px";
        /* 6. Внутри функции я буду проходить циклом каждый этап выполнения */
        stepIndicators.forEach((indicator, index) => {
            /* 7. Затем я изменю текущий ('current') класс для каждого из них */
            indicator.classList.toggle('current', currentStep === index);
            /* 8. Изменяю состояние класса на "Готово" ('done') */
            indicator.classList.toggle('done', currentStep > index);
        });
        /* 31. Далее я продублирую этапы выполнения для каждого цикла и внесу изменения для этапов заполнения форм */
        steps.forEach((step, index) => {
            /* 33. Мне нужно изменить положение шагов формы, что бы оно соответствовало индикаторам выполнения */
            step.style.transform = `translateX(-${currentStep * 100}%)`;
            /* 32. Затем я изменю текущий ('current') класс для каждого из них */
            step.classList.toggle('current', currentStep === index);
        });

        /* 29. А внутри, я вызываю кнопки обновления */
        updateButtons();
    };

    /* 24. Далее я создам функцию для обновления видимости кнопок */
    const updateButtons = () => {
        /* 25. Кнопока "Prev" будет скрыта на первом шаге */
        prevButton.hidden = currentStep === 0;
        /* 26. Кнопока "Next" будет скрыта на последнем шаге */
        nextButton.hidden = currentStep >= stepIndicators.length - 1;
        /* 27. Что касается кнопоки "Submit", я буду показывать её только тогда, когда кнопка "Next" будет скрыта */
        submitButton.hidden = !nextButton.hidden;

    };

    //* event listeners

    /* 19. Далее будет множество обработчиков события  click для кнопки Prev */
    prevButton.addEventListener('click', (e) => {
        /* 14. На всякий случай, если тип кнопки не указан, я заблокирую отправку формы */
        e.preventDefault(); // prevent form submission
        /* 15. В то время, пока текущее значение больше нуля, я буду уменьшать его на единицу */
        if(currentStep > 0) {
            currentStep--;
            /* 16. Далее, я вызову функцию отслеживания хода выполнения обновлений */
            updateProgress();
        }
    });

    /* 20. Далее я продублирую код предыдущей кнопки (prevButton) и внесу некоторые коректировки, и применю их к кнопке Next */
    nextButton.addEventListener('click', (e) => {
        /* 21. На всякий случай, если тип кнопки не указан, я заблокирую отправку формы */
        e.preventDefault(); // prevent form submission
        /* 22. Пока текущее значение меньше количества шагов (элементов <li>)?, я буду увеличивать его на единицу */
        if(currentStep < stepIndicators.length - 1) {
            currentStep++;
            /* 23. Далее, я вызову функцию отслеживания хода выполнения обновлений */
            updateProgress();
        }
    });

    /* 5. Далее, я создам функцию, которая будет имитировать последовательность шагов */
    /* 18. Я отключу функцию имитации последовательности шагов, поскольку она выполнила свою задачу */
    /*setInterval(() => {

        currentStep++;

        console.log(currentStep);

        if(currentStep > stepIndicators.length - 1) {
            currentStep = 0;
        } */

        /* 10. Внутри функции я я рассчитываю процент ширины и зависимости от текущего шага (currentStep)
        let width = currentStep / (stepIndicators.length - 1);
        console.log(width);*/

        /* 11. Я использую полученный результат для изменения длины элемента индикатора выполнения 
        progress.style.transform = `scaleX(${width})`;*/

        /* 6. Внутри функции я буду проходить циклом каждый этап выполнения
        stepIndicators.forEach((indicator, index) => { */
            /* 7. Затем я изменю текущий ('current') класс для каждого из них
            indicator.classList.toggle('current', currentStep === index); */
            /* 8. Изменяю состояние класса на "Готово" ('done')
            indicator.classList.toggle('done', currentStep > index);
        }); */

    /*}, 2000);*/

    /* 28. Далее, я инициализирую многошаговую форму, вызвав функцию отслеживания прогресса обновления  */
    updateProgress();

});