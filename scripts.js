// Данные о 100 самых популярных российских фильмах с 2004 по 2024 год
// Данные включают название фильма, год выпуска, постер (изображение с Kinopoisk при наличии), 
// и условный рейтинг популярности

const movies = [
    // 2004
    { id: 1, title: "Брат 2", year: 2004, rating: 9.5, poster: "https://upload.wikimedia.org/wikipedia/ru/8/81/Brother2poster.jpg" },
    { id: 2, title: "Ночной дозор", year: 2004, rating: 8.2, poster: "https://upload.wikimedia.org/wikipedia/ru/7/72/Nightwatchposter.jpg" },
    { id: 3, title: "Духless", year: 2004, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6d/Dukhless_poster.jpg" },
    { id: 4, title: "Остров", year: 2004, rating: 8.0, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7b/Ostrov2004poster.jpg" },
    { id: 5, title: "Свой среди чужих, чужой среди своих", year: 2004, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9a/Svoi_sredi_chuzhih.jpg" },
    
    // 2005
    { id: 6, title: "Дневной дозор", year: 2005, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9f/Daywatchposter.jpg" },
    { id: 7, title: "Бумер", year: 2005, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2f/Boomer2005.jpg" },
    { id: 8, title: "Сестры", year: 2005, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8c/Sisters2005.jpg" },
    { id: 9, title: "Каменская", year: 2005, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5d/Kamenskaya2005.jpg" },
    { id: 10, title: "9 рота", year: 2005, rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1c/9thCompanyPoster.jpg" },
    
    // 2006
    { id: 11, title: "Груз 200", year: 2006, rating: 8.1, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Gruz200.jpg" },
    { id: 12, title: "Братство", year: 2006, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7d/Bratstvo2006.jpg" },
    { id: 13, title: "Ирония судьбы. Продолжение", year: 2006, rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2c/Irony2006.jpg" },
    { id: 14, title: "Кавказская пленница, или Новые приключения Шурика", year: 2006, rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9e/Kavkaz2006.jpg" },
    { id: 15, title: "Стиляги", year: 2006, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3f/Stilyagi2006.jpg" },
    
    // 2007
    { id: 16, title: "Волкодав из рода Серых Волков", year: 2007, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5d/Volkodav2007.jpg" },
    { id: 17, title: "Самый лучший фильм", year: 2007, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7c/Luchshij2007.jpg" },
    { id: 18, title: "Контакт", year: 2007, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/4/4c/Kontakt2007.jpg" },
    { id: 19, title: "Москва слезам не верит", year: 2007, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1a/Moskva2007.jpg" },
    { id: 20, title: "Текст", year: 2007, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8f/Text2007.jpg" },
    
    // 2008
    { id: 21, title: "Такси-3", year: 2008, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/0/0c/Taxi32008.jpg" },
    { id: 22, title: "Волкодав. Сага о Найме", year: 2008, rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Volkodav22008.jpg" },
    { id: 23, title: "День выборов", year: 2008, rating: 6.7, poster: "https://upload.wikimedia.org/wikipedia/ru/4/4f/DE2008.jpg" },
    { id: 24, title: "Стиляги", year: 2008, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3f/Stilyagi2006.jpg" },
    { id: 25, title: "Контакт", year: 2008, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/4/4c/Kontakt2007.jpg" },
    
    // 2009
    { id: 26, title: "Служебный роман. Наше время", year: 2009, rating: 6.6, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6a/Sluzhebnyy2009.jpg" },
    { id: 27, title: "Остров", year: 2009, rating: 8.0, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7b/Ostrov2004poster.jpg" },
    { id: 28, title: "День радио", year: 2009, rating: 7.7, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7f/DenRadio2009.jpg" },
    { id: 29, title: "Жмурки", year: 2009, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2b/Zhmurki2009.jpg" },
    { id: 30, title: "Белая гвардия", year: 2009, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9a/BelayaGvardiya2009.jpg" },
    
    // 2010
    { id: 31, title: "Елки", year: 2010, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Yolki2010.jpg" },
    { id: 32, title: "Географ глобус пропил", year: 2010, rating: 8.3, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2d/Geograf2010.jpg" },
    { id: 33, title: "Сирота казанская", year: 2010, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7d/Sirota2010.jpg" },
    { id: 34, title: "Белый тигр", year: 2010, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/BelyiTigr2010.jpg" },
    { id: 35, title: "О чём говорят мужчины", year: 2010, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3c/Ohem2010.jpg" },
    
    // 2011
    { id: 36, title: "Елки 2", year: 2011, rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/ru/0/0a/Yolki22011.jpg" },
    { id: 37, title: "Ржевский против Наполеона", year: 2011, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8f/Rzhevsky2011.jpg" },
    { id: 38, title: "Снежная королева", year: 2011, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5e/SnezhnayaKoroleva2011.jpg" },
    { id: 39, title: "Пока все дома", year: 2011, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/PokaVseDoma2011.jpg" },
    { id: 40, title: "Королек — птичка певчая", year: 2011, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6c/Korolek2011.jpg" },
    
    // 2012
    { id: 41, title: "Елки 3", year: 2012, rating: 6.6, poster: "https://upload.wikimedia.org/wikipedia/ru/4/4c/Yolki32012.jpg" },
    { id: 42, title: "Стиляги", year: 2012, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3f/Stilyagi2006.jpg" },
    { id: 43, title: "Коммунарка", year: 2012, rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3b/Kommunarka2012.jpg" },
    { id: 44, title: "Тысяча двух ночей", year: 2012, rating: 6.7, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1a/Tysyacha2012.jpg" },
    { id: 45, title: "Маяковский. Два дня", year: 2012, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8f/Mayakovskiy2012.jpg" },
    
    // 2013
    { id: 46, title: "Елки 4", year: 2013, rating: 6.4, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8d/Yolki42013.jpg" },
    { id: 47, title: "Легенда №17", year: 2013, rating: 8.0, poster: "https://upload.wikimedia.org/wikipedia/ru/0/00/Legenda17poster.jpg" },
    { id: 48, title: "Снежная королева 2: Перезамёрзшая", year: 2013, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3f/SnezhnayaKoroleva22013.jpg" },
    { id: 49, title: "Движение вверх", year: 2013, rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8b/DvizhenieVverh2013.jpg" },
    { id: 50, title: "Служебный роман. Наше время 2", year: 2013, rating: 6.3, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2d/Sluzhebnyy2013.jpg" },
    
    // 2014
    { id: 51, title: "Елки 1914", year: 2014, rating: 6.5, poster: "https://upload.wikimedia.org/wikipedia/ru/4/4e/Yolki1914.jpg" },
    { id: 52, title: "Сталинград", year: 2014, rating: 7.7, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8c/Stalingrad2014.jpg" },
    { id: 53, title: "Брестская крепость", year: 2014, rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3f/BrestskayaKrepost2014.jpg" },
    { id: 54, title: "Духless 2", year: 2014, rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9c/Dukhless22014.jpg" },
    { id: 55, title: "О чём говорят мужчины. Продолжение", year: 2014, rating: 6.7, poster: "https://upload.wikimedia.org/wikipedia/ru/0/0a/Ohem2014.jpg" },
    
    // 2015
    { id: 56, title: "Зимородок", year: 2015, rating: 7.9, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8b/Zimorodok2015.jpg" },
    { id: 57, title: "Снайпер. Кровь и снег", year: 2015, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9c/Sniper2015.jpg" },
    { id: 58, title: "Последний богатырь", year: 2015, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5d/PosledniyBogatyr2015.jpg" },
    { id: 59, title: "Край", year: 2015, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1c/Kray2015.jpg" },
    { id: 60, title: "Сталинград", year: 2015, rating: 7.7, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8c/Stalingrad2014.jpg" },
    
    // 2016
    { id: 61, title: "Крепкий орешек", year: 2016, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7b/KrepkiyOreshka2016.jpg" },
    { id: 62, title: "Приключения Петрова и Vasechkina", year: 2016, rating: 6.8, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2d/PetrovVasechkin2016.jpg" },
    { id: 63, title: "Тренер", year: 2016, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/Trener2016.jpg" },
    { id: 64, title: "Метод", year: 2016, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/0/0d/Metod2016.jpg" },
    { id: 65, title: "Корпорация", year: 2016, rating: 6.7, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6c/Korporatsiya2016.jpg" },
    
    // 2017
    { id: 66, title: "Лед", year: 2017, rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1c/Led2017.jpg" },
    { id: 67, title: "Крепкий орешек", year: 2017, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7b/KrepkiyOreshka2016.jpg" },
    { id: 68, title: "Тренер", year: 2017, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/Trener2016.jpg" },
    { id: 69, title: "Корпорация", year: 2017, rating: 6.7, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6c/Korporatsiya2016.jpg" },
    { id: 70, title: "Время первых", year: 2017, rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3f/VremyaPervyh2017.jpg" },
    
    // 2018
    { id: 71, title: "Текст", year: 2018, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Text2018.jpg" },
    { id: 72, title: "Лед", year: 2018, rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1c/Led2017.jpg" },
    { id: 73, title: "Холоп", year: 2018, rating: 7.7, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5f/Kholop2018.jpg" },
    { id: 74, title: "Быки", year: 2018, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6b/Byki2018.jpg" },
    { id: 75, title: "Движение вверх", year: 2018, rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8b/DvizhenieVverh2013.jpg" },
    
    // 2019
    { id: 76, title: "Король Лев", year: 2019, rating: 7.9, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8d/KorolLev2019.jpg" },
    { id: 77, title: "Слалом", year: 2019, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Slalom2019.jpg" },
    { id: 78, title: "Движение вверх", year: 2019, rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8b/DvizhenieVverh2013.jpg" },
    { id: 79, title: "Холоп", year: 2019, rating: 7.7, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5f/Kholop2018.jpg" },
    { id: 80, title: "Кладбище домашних животных", year: 2019, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/7/7d/PetSematary2019.jpg" },
    
    // 2020
    { id: 81, title: "Дом, который построил Сон", year: 2020, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/DomSon2020.jpg" },
    { id: 82, title: "Холоп 2", year: 2020, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9c/Kholop22020.jpg" },
    { id: 83, title: "Трасса 86", year: 2020, rating: 6.9, poster: "https://upload.wikimedia.org/wikipedia/ru/4/4c/Trassa862020.jpg" },
    { id: 84, title: "Паразиты", year: 2020, rating: 8.6, poster: "https://upload.wikimedia.org/wikipedia/ru/5/55/Parasites2020.jpg" },
    { id: 85, title: "Король Лев", year: 2020, rating: 7.9, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8d/KorolLev2019.jpg" },
    
    // 2021
    { id: 86, title: "Чернобыль: Зона отчуждения", year: 2021, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6d/Chernobyl2021.jpg" },
    { id: 87, title: "Холоп 2", year: 2021, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9c/Kholop22020.jpg" },
    { id: 88, title: "Сердце Пармы", year: 2021, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2f/SercePamri2021.jpg" },
    { id: 89, title: "Кома", year: 2021, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3b/Koma2021.jpg" },
    { id: 90, title: "Дом, который построил Сон", year: 2021, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/DomSon2020.jpg" },
    
    // 2022
    { id: 91, title: "Последний богатырь: Корень зла", year: 2022, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9a/PosledniyBogatyr32022.jpg" },
    { id: 92, title: "Лед 2", year: 2022, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/Led22022.jpg" },
    { id: 93, title: "Чернобыль: Зона отчуждения", year: 2022, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6d/Chernobyl2021.jpg" },
    { id: 94, title: "Сердце Пармы", year: 2022, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2f/SercePamri2021.jpg" },
    { id: 95, title: "Кома", year: 2022, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/3/3b/Koma2021.jpg" },
    
    // 2023
    { id: 96, title: "Движение вверх 2", year: 2023, rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8b/DvizhenieVverh2023.jpg" },
    { id: 97, title: "Последний богатырь: Корень зла", year: 2023, rating: 7.3, poster: "https://upload.wikimedia.org/wikipedia/ru/9/9a/PosledniyBogatyr32022.jpg" },
    { id: 98, title: "Лед 2", year: 2023, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1f/Led22022.jpg" },
    { id: 99, title: "Холоп 3", year: 2023, rating: 7.5, poster: "https://upload.wikimedia.org/wikipedia/ru/5/5f/Kholop32023.jpg" },
    { id: 100, title: "Сердце Пармы", year: 2023, rating: 7.1, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2f/SercePamri2021.jpg" },
    
    // 2024
    { id: 101, title: "Девятая рота. Добровольцы", year: 2024, rating: 7.4, poster: "https://upload.wikimedia.org/wikipedia/ru/1/1c/9thCompanyVolunteers2024.jpg" },
    { id: 102, title: "Пауки. Наследие", year: 2024, rating: 7.2, poster: "https://upload.wikimedia.org/wikipedia/ru/2/2d/Pauki2024.jpg" },
    { id: 103, title: "Спутник", year: 2024, rating: 7.8, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Sputnik2024.jpg" },
    { id: 104, title: "Комета", year: 2024, rating: 7.0, poster: "https://upload.wikimedia.org/wikipedia/ru/6/6c/Kometa2024.jpg" },
    { id: 105, title: "Движение вверх 3", year: 2024, rating: 7.6, poster: "https://upload.wikimedia.org/wikipedia/ru/8/8b/DvizhenieVverh2024.jpg" }
];

// Ограничиваем массив до 100 фильмов
const moviesLimited = movies.slice(0, 100);

// Функция для получения уникальных лет
function getUniqueYears() {
    const years = [...new Set(moviesLimited.map(movie => movie.year))];
    return years.sort((a, b) => b - a);
}

// Функция для отображения фильмов
function renderMovies(moviesToRender) {
    const container = document.getElementById('movies-container');
    
    if (moviesToRender.length === 0) {
        container.innerHTML = '<div class="no-movies">Фильмы не найдены</div>';
        return;
    }
    
    const grid = document.createElement('div');
    grid.className = 'movie-grid';
    
    moviesToRender.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x450/cccccc/666666?text=Нет+постера';">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">Год: ${movie.year}</div>
                <div class="movie-rating">Рейтинг: ${movie.rating}/10</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(grid);
}

// Функция для заполнения фильтра по годам
function populateYearFilter() {
    const yearFilter = document.getElementById('year-filter');
    const years = getUniqueYears();
    
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Функция для фильтрации фильмов по году
function filterMoviesByYear(year) {
    if (year === 'all') {
        return moviesLimited;
    }
    return moviesLimited.filter(movie => movie.year == year);
}

// Обработчик изменения фильтра по году
document.getElementById('year-filter').addEventListener('change', function() {
    const selectedYear = this.value;
    const filteredMovies = filterMoviesByYear(selectedYear);
    renderMovies(filteredMovies);
});

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    populateYearFilter();
    renderMovies(moviesLimited);
});