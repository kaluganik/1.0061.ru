/*
==========================================================
script.js
Сайт: Закладки популярных российских сайтов

Данный файл отвечает за интерактивность страницы.
==========================================================
*/


/*
==========================================================
Поиск по карточкам
==========================================================
*/

// Получаем поле поиска
const searchInput = document.getElementById("search");

// Получаем все карточки
const cards = document.querySelectorAll(".card");

// Проверяем, существует ли поле поиска
if (searchInput) {

    // Событие при каждом вводе символа
    searchInput.addEventListener("input", function () {

        // Переводим запрос пользователя в нижний регистр
        const value = this.value.toLowerCase();

        // Перебираем все карточки
        cards.forEach(function (card) {

            // Получаем текст карточки
            const text = card.textContent.toLowerCase();

            // Если найдено совпадение
            if (text.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/*
==========================================================
Кнопка "Наверх"
==========================================================
*/

// Создаем кнопку
const button = document.createElement("button");

// ID кнопки
button.id = "toTop";

// Символ стрелки
button.innerHTML = "↑";

// Подсказка
button.title = "Наверх";

// Добавляем кнопку на страницу
document.body.appendChild(button);


// Показываем кнопку после прокрутки
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});


// Прокрутка наверх
button.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*
==========================================================
Анимация появления карточек
==========================================================
*/

window.addEventListener("load", function () {

    cards.forEach(function (card, index) {

        card.style.opacity = "0";

        card.style.transform = "translateY(20px)";

        setTimeout(function () {

            card.style.transition = "0.4s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }, index * 70);

    });

});


/*
==========================================================
Автоматическое обновление года в подвале
==========================================================
*/

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = "© " + year + " Каталог популярных российских сайтов";

}


/*
==========================================================
Подсветка поля поиска
==========================================================
*/

if (searchInput) {

    searchInput.addEventListener("focus", function () {

        this.style.boxShadow = "0 0 12px rgba(25,118,210,.4)";

    });

    searchInput.addEventListener("blur", function () {

        this.style.boxShadow = "none";

    });

}


/*
==========================================================
Вывод количества карточек в консоль

Полезно при разработке.
==========================================================
*/

console.log("Количество карточек:", cards.length);


/*
==========================================================
Конец файла
==========================================================
*/
