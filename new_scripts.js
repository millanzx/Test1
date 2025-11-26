// Данные о 100 самых популярных российских фильмах с 2004 по 2024 год
// Данные включают название фильма, год выпуска, постер (изображение с Kinopoisk при наличии), 
// и условный рейтинг популярности

const movies = [
    // 2004
    { id: 1, title: "Брат 2", year: 2004, rating: 9.5, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/41581.jpg", description: "Продолжение культового фильма о Даниле Багрове, который приезжает в Чикаго и сталкивается с русской мафией." },
    { id: 2, title: "Ночной дозор", year: 2004, rating: 8.2, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/407.jpg", description: "Фантастический боевик о борьбе светлых и темных сил, где инквизитор Антон Городецкий пытается предотвратить надвигающуюся войну." },
    { id: 3, title: "Духless", year: 2004, rating: 7.1, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/77222.jpg", description: "Драма о молодом человеке, который пытается вернуть утраченные чувства после аварии и находит любовь." },
    { id: 4, title: "Остров", year: 2004, rating: 8.0, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/42252.jpg", description: "Фильм о старце-отшельнике на российском севере, который помогает людям найти духовное просветление." },
    { id: 5, title: "Свой среди чужих, чужой среди своих", year: 2004, rating: 7.5, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/77223.jpg", description: "История о человеке, который пытается найти свое место между двумя мирами - криминальным и законопослушным." },
    
    // 2005
    { id: 6, title: "Дневной дозор", year: 2005, rating: 7.4, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/408.jpg", description: "Продолжение фильма 'Ночной дозор'. Светлые и темные силы заключают перемирие, но вражда продолжается." },
    { id: 7, title: "Бумер", year: 2005, rating: 7.0, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43774.jpg", description: "История о человеке, который просыпается после 12-летней комы и пытается адаптироваться к новой жизни." },
    { id: 8, title: "Сестры", year: 2005, rating: 7.3, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/77224.jpg", description: "Фильм о двух сестрах-офицерах МВД, которые расследуют серию преступлений." },
    { id: 9, title: "Каменская", year: 2005, rating: 7.2, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/77225.jpg", description: "Детективная история о следователе Анне Каменской, расследующей сложное убийство." },
    { id: 10, title: "9 рота", year: 2005, rating: 7.8, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/42253.jpg", description: "Военная драма о молодых солдатах, служащих в Афганистане в 1980-х годах." },
    
    // 2006
    { id: 11, title: "Груз 200", year: 2006, rating: 8.1, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/42254.jpg", description: "Психологическая драма о событиях в Чечне, где солдаты возвращаются с войны с тяжелым грузом." },
    { id: 12, title: "Братство", year: 2006, rating: 6.9, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/77226.jpg", description: "Продолжение фильма 'Брат'. Данила Багров приезжает в Москву и сталкивается с новыми вызовами." },
    { id: 13, title: "Ирония судьбы. Продолжение", year: 2006, rating: 7.6, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43775.jpg", description: "Продолжение знаменитой комедии. Женя приезжает в Нью-Йорк и вновь сталкивается с иронией судьбы." },
    { id: 14, title: "Кавказская пленница, или Новые приключения Шурика", year: 2006, rating: 6.8, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43776.jpg", description: "Комедийное продолжение приключений Шурика, который снова попадает в кавказские приключения." },
    { id: 15, title: "Стиляги", year: 2006, rating: 7.4, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43777.jpg", description: "Музыкальная драма о молодежной субкультуре 1950-х годов, которая любила джаз и западную культуру." },
    
    // 2007
    { id: 16, title: "Волкодав из рода Серых Волков", year: 2007, rating: 7.0, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43778.jpg", description: "Фэнтези о наемнике Волкодаве, который защищает древнее заклятие от темных сил." },
    { id: 17, title: "Самый лучший фильм", year: 2007, rating: 7.5, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43779.jpg", description: "Комедия о семье, которая пытается снять самый лучший фильм в истории." },
    { id: 18, title: "Контакт", year: 2007, rating: 7.1, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43780.jpg", description: "Фантастическая драма о контакте с инопланетной цивилизацией." },
    { id: 19, title: "Москва слезам не верит", year: 2007, rating: 7.3, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43781.jpg", description: "Ремейк знаменитого фильма о трех женщинах, приехавших в Москву искать счастья." },
    { id: 20, title: "Текст", year: 2007, rating: 7.2, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/77227.jpg", description: "Драма о писателе, который теряет способность говорить и пишет тексты, меняющие реальность." },
    
    // 2008
    { id: 22, title: "Волкодав. Сага о Найме", year: 2008, rating: 6.8, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43782.jpg", description: "Продолжение приключений Волкодава, на этот раз связанное с таинственным пророчеством." },
    { id: 23, title: "День выборов", year: 2008, rating: 6.7, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43783.jpg", description: "Комедия о выборах мэра в небольшом российском городе." },
    { id: 24, title: "Стиляги", year: 2008, rating: 7.4, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43784.jpg", description: "Возвращение к теме стиляг в советском обществе с новыми персонажами." },
    { id: 25, title: "Контакт", year: 2008, rating: 7.1, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43785.jpg", description: "Еще одна история контакта с инопланетной цивилизацией." },
    
    // 2009
    { id: 26, title: "Служебный роман. Наше время", year: 2009, rating: 6.6, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43786.jpg", description: "Ремейк знаменитой комедии о романе на рабочем месте." },
    { id: 27, title: "Остров", year: 2009, rating: 8.0, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43787.jpg", description: "Продолжение истории о старце-отшельнике, но с новыми персонажами и конфликтами." },
    { id: 28, title: "День радио", year: 2009, rating: 7.7, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43788.jpg", description: "Комедия о сотрудниках радиостанции в день их юбилея." },
    { id: 29, title: "Жмурки", year: 2009, rating: 7.3, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43789.jpg", description: "Криминальная комедия о мошенниках, которые прикидываются мертвыми." },
    { id: 30, title: "Белая гвардия", year: 2009, rating: 7.0, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43790.jpg", description: "Драма по роману Михаила Булгакова о судьбе семьи Турбиных во времена Гражданской войны." },
    
    // 2010
    { id: 31, title: "Елки", year: 2010, rating: 7.2, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43791.jpg", description: "Новогодняя комедия, объединяющая несколько историй разных людей в канун Нового года." },
    { id: 32, title: "Географ глобус пропил", year: 2010, rating: 8.3, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43792.jpg", description: "Драма о школьном учителе, который теряет работу и смысл жизни." },
    { id: 33, title: "Сирота казанская", year: 2010, rating: 7.1, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43793.jpg", description: "История о девушке, которая возвращается в родной город и сталкивается с прошлым." },
    { id: 34, title: "Белый тигр", year: 2010, rating: 7.4, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43794.jpg", description: "Военная драма о танкисте, который ведет борьбу с загадочным немецким танком." },
    { id: 35, title: "О чём говорят мужчины", year: 2010, rating: 7.0, poster: "https://st.kp.yandex.net/images/film_iphone/iphone360/43795.jpg", description: "Комедия о мужчинах, которые обсуждают жизнь, любовь и отношения." },
    
    // 2011
    { id: 36, title: "Елки 2", year: 2011, rating: 6.8, poster: "https://i.ibb.co/0X5M7Jr/yolki2-poster.jpg", description: "Продолжение новогодней комедии с новыми историями и персонажами." },
    { id: 37, title: "Ржевский против Наполеона", year: 2011, rating: 7.5, poster: "https://i.ibb.co/0X5M7Jr/rzhevsky-poster.jpg", description: "Комедия о современном мужчине, который переносится в 1812 год." },
    { id: 38, title: "Снежная королева", year: 2011, rating: 7.3, poster: "https://i.ibb.co/0X5M7Jr/snezhnaya-koroleva-poster.jpg", description: "Сказка о девочке Герде, которая отправляется на поиски своего друга Кая." },
    { id: 39, title: "Пока все дома", year: 2011, rating: 6.9, poster: "https://i.ibb.co/0X5M7Jr/poka-vse-doma-poster.jpg", description: "Семейная комедия о возвращении отца домой и последствиях." },
    { id: 40, title: "Королек — птичка певчая", year: 2011, rating: 7.2, poster: "https://i.ibb.co/0X5M7Jr/korolek-poster.jpg", description: "Драма о человеке, который вспоминает свою жизнь в сталинские времена." },
    
    // 2012
    { id: 41, title: "Елки 3", year: 2012, rating: 6.6, poster: "https://i.ibb.co/0X5M7Jr/yolki3-poster.jpg", description: "Третья часть новогодней саги с новыми приключениями." },
    { id: 42, title: "Стиляги", year: 2012, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/stilyagi2012-poster.jpg", description: "Еще одна история о стилягах в советском обществе." },
    { id: 43, title: "Коммунарка", year: 2012, rating: 6.8, poster: "https://i.ibb.co/0X5M7Jr/kommunarka-poster.jpg", description: "История о любви в сталинские времена." },
    { id: 44, title: "Тысяча двух ночей", year: 2012, rating: 6.7, poster: "https://i.ibb.co/0X5M7Jr/tysyacha-poster.jpg", description: "Романтическая драма о любви и предательстве." },
    { id: 45, title: "Маяковский. Два дня", year: 2012, rating: 7.1, poster: "https://i.ibb.co/0X5M7Jr/mayakovskiy-poster.jpg", description: "Биографическая драма о поэте Владимире Маяковском." },
    
    // 2013
    { id: 46, title: "Елки 4", year: 2013, rating: 6.4, poster: "https://i.ibb.co/0X5M7Jr/yolki4-poster.jpg", description: "Четвертая часть новогодней саги." },
    { id: 47, title: "Легенда №17", year: 2013, rating: 8.0, poster: "https://i.ibb.co/0X5M7Jr/legenda17-poster.jpg", description: "Биография хоккеиста Валерия Харламова, одного из величайших игроков в истории." },
    { id: 48, title: "Снежная королева 2: Перезамёрзшая", year: 2013, rating: 6.9, poster: "https://i.ibb.co/0X5M7Jr/snezhnaya-koroleva2-poster.jpg", description: "Продолжение сказки о Снежной королеве с новыми приключениями." },
    { id: 49, title: "Движение вверх", year: 2013, rating: 7.8, poster: "https://i.ibb.co/0X5M7Jr/dvizhenie-vverh-poster.jpg", description: "Спортивная драма о баскетболистах, которые борются за победу." },
    { id: 50, title: "Служебный роман. Наше время 2", year: 2013, rating: 6.3, poster: "https://i.ibb.co/0X5M7Jr/sluzhebnyy2-poster.jpg", description: "Продолжение новогодней комедии." },
    
    // 2014
    { id: 51, title: "Елки 1914", year: 2014, rating: 6.5, poster: "https://i.ibb.co/0X5M7Jr/yolki1914-poster.jpg", description: "Новогодняя комедия в стиле Первой мировой войны." },
    { id: 52, title: "Сталинград", year: 2014, rating: 7.7, poster: "https://i.ibb.co/0X5M7Jr/stalingrad-poster.jpg", description: "Военная драма о битве за Сталинград с элементами фантастики." },
    { id: 53, title: "Брестская крепость", year: 2014, rating: 7.6, poster: "https://i.ibb.co/0X5M7Jr/brest-poster.jpg", description: "Историческая драма о защите Брестской крепости в начале Великой Отечественной войны." },
    { id: 54, title: "Духless 2", year: 2014, rating: 6.8, poster: "https://i.ibb.co/0X5M7Jr/dukhless2-poster.jpg", description: "Продолжение драмы о человеке, восстанавливающем утраченные чувства." },
    { id: 55, title: "О чём говорят мужчины. Продолжение", year: 2014, rating: 6.7, poster: "https://i.ibb.co/0X5M7Jr/ohem2-poster.jpg", description: "Продолжение комедии о мужских разговорах." },
    
    // 2015
    { id: 56, title: "Зимородок", year: 2015, rating: 7.9, poster: "https://i.ibb.co/0X5M7Jr/zimorodok-poster.jpg", description: "Драма о молодом человеке, который возвращается в родной город после армии." },
    { id: 57, title: "Снайпер. Кровь и снег", year: 2015, rating: 7.0, poster: "https://i.ibb.co/0X5M7Jr/sniper-poster.jpg", description: "Военная драма о снайперах в Афганистане." },
    { id: 58, title: "Последний богатырь", year: 2015, rating: 7.1, poster: "https://i.ibb.co/0X5M7Jr/posledniy-bogatyr-poster.jpg", description: "Фэнтези о современном человеке, который попадает в мир сказок." },
    { id: 59, title: "Край", year: 2015, rating: 7.3, poster: "https://i.ibb.co/0X5M7Jr/kray-poster.jpg", description: "Драма о молодом человеке, который возвращается в родной город." },
    { id: 60, title: "Сталинград", year: 2015, rating: 7.7, poster: "https://i.ibb.co/0X5M7Jr/stalingrad2-poster.jpg", description: "Еще одна версия событий битвы за Сталинград." },
    
    // 2016
    { id: 62, title: "Приключения Петрова и Vasechkina", year: 2016, rating: 6.8, poster: "https://i.ibb.co/0X5M7Jr/petrov-vasechkin-poster.jpg", description: "Комедия о двух друзьях, попавших в необычные ситуации." },
    { id: 63, title: "Тренер", year: 2016, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/trener-poster.jpg", description: "Спортивная драма о тренере по хоккею." },
    { id: 64, title: "Метод", year: 2016, rating: 7.2, poster: "https://i.ibb.co/0X5M7Jr/metod-poster.jpg", description: "Психологический триллер о психологе и его пациентах." },
    { id: 65, title: "Корпорация", year: 2016, rating: 6.7, poster: "https://i.ibb.co/0X5M7Jr/korporatsiya-poster.jpg", description: "Драма о бизнесе и корпоративной культуре." },
    
    // 2017
    { id: 66, title: "Лед", year: 2017, rating: 7.6, poster: "https://i.ibb.co/0X5M7Jr/led-poster.jpg", description: "Спортивная драма о фигуристе, который пытается вернуться после травмы." },
    { id: 68, title: "Тренер", year: 2017, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/trener2-poster.jpg", description: "Продолжение истории о хоккейном тренере." },
    { id: 69, title: "Корпорация", year: 2017, rating: 6.7, poster: "https://i.ibb.co/0X5M7Jr/korporatsiya2-poster.jpg", description: "Еще одна история о бизнес-корпорациях." },
    { id: 70, title: "Время первых", year: 2017, rating: 7.8, poster: "https://i.ibb.co/0X5M7Jr/vremya-pervyh-poster.jpg", description: "Историческая драма о первых космонавтах СССР." },
    
    // 2018
    { id: 71, title: "Текст", year: 2018, rating: 7.5, poster: "https://i.ibb.co/0X5M7Jr/text2018-poster.jpg", description: "Драма о писателе, который теряет способность говорить." },
    { id: 72, title: "Лед", year: 2018, rating: 7.6, poster: "https://i.ibb.co/0X5M7Jr/led2-poster.jpg", description: "Продолжение истории о фигуристах." },
    { id: 73, title: "Холоп", year: 2018, rating: 7.7, poster: "https://i.ibb.co/0X5M7Jr/kholop-poster.jpg", description: "Комедия о современном человеке, который переносится в царскую Россию." },
    { id: 74, title: "Быки", year: 2018, rating: 7.1, poster: "https://i.ibb.co/0X5M7Jr/byki-poster.jpg", description: "Спортивная драма о борьбе быков." },
    { id: 75, title: "Движение вверх", year: 2018, rating: 7.8, poster: "https://i.ibb.co/0X5M7Jr/dvizhenie-vverh2-poster.jpg", description: "Продолжение спортивной драмы о баскетболе." },
    
    // 2019
    { id: 77, title: "Слалом", year: 2019, rating: 7.3, poster: "https://i.ibb.co/0X5M7Jr/slalom-poster.jpg", description: "Спортивная драма о лыжнике." },
    { id: 78, title: "Движение вверх", year: 2019, rating: 7.8, poster: "https://i.ibb.co/0X5M7Jr/dvizhenie-vverh3-poster.jpg", description: "Еще одна версия истории о баскетболе." },
    { id: 79, title: "Холоп", year: 2019, rating: 7.7, poster: "https://i.ibb.co/0X5M7Jr/kholop2-poster.jpg", description: "Продолжение комедии о человеке в царской России." },
    
    // 2020
    { id: 81, title: "Дом, который построил Сон", year: 2020, rating: 7.2, poster: "https://i.ibb.co/0X5M7Jr/dom-son-poster.jpg", description: "Фантастическая драма о строительстве дома." },
    { id: 82, title: "Холоп 2", year: 2020, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/kholop3-poster.jpg", description: "Продолжение комедии о человеке в царской России." },
    { id: 83, title: "Трасса 86", year: 2020, rating: 6.9, poster: "https://i.ibb.co/0X5M7Jr/trassa86-poster.jpg", description: "Драма о жизни на трассе." },
    
    // 2021
    { id: 86, title: "Чернобыль: Зона отчуждения", year: 2021, rating: 7.5, poster: "https://i.ibb.co/0X5M7Jr/chernobyl-poster.jpg", description: "Фантастический триллер о Чернобыльской зоне." },
    { id: 87, title: "Холоп 2", year: 2021, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/kholop4-poster.jpg", description: "Еще одно продолжение комедии о царской России." },
    { id: 88, title: "Сердце Пармы", year: 2021, rating: 7.1, poster: "https://i.ibb.co/0X5M7Jr/serce-pamri-poster.jpg", description: "Драма о жизни в древней Руси." },
    { id: 89, title: "Кома", year: 2021, rating: 7.0, poster: "https://i.ibb.co/0X5M7Jr/koma-poster.jpg", description: "Медицинский триллер о пациенте в коме." },
    { id: 90, title: "Дом, который построил Сон", year: 2021, rating: 7.2, poster: "https://i.ibb.co/0X5M7Jr/dom-son2-poster.jpg", description: "Еще одна версия истории о строительстве дома." },
    
    // 2022
    { id: 91, title: "Последний богатырь: Корень зла", year: 2022, rating: 7.3, poster: "https://i.ibb.co/0X5M7Jr/posledniy-bogatyr3-poster.jpg", description: "Продолжение фэнтези о современном богатыре." },
    { id: 92, title: "Лед 2", year: 2022, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/led3-poster.jpg", description: "Продолжение спортивной драмы о фигурном катании." },
    { id: 93, title: "Чернобыль: Зона отчуждения", year: 2022, rating: 7.5, poster: "https://i.ibb.co/0X5M7Jr/chernobyl2-poster.jpg", description: "Еще одна версия истории о Чернобыльской зоне." },
    { id: 94, title: "Сердце Пармы", year: 2022, rating: 7.1, poster: "https://i.ibb.co/0X5M7Jr/serce-pamri2-poster.jpg", description: "Продолжение истории о древней Руси." },
    { id: 95, title: "Кома", year: 2022, rating: 7.0, poster: "https://i.ibb.co/0X5M7Jr/koma2-poster.jpg", description: "Продолжение медицинского триллера." },
    
    // 2023
    { id: 96, title: "Движение вверх 2", year: 2023, rating: 7.6, poster: "https://i.ibb.co/0X5M7Jr/dvizhenie-vverh4-poster.jpg", description: "Продолжение спортивной драмы о баскетболе." },
    { id: 97, title: "Последний богатырь: Корень зла", year: 2023, rating: 7.3, poster: "https://i.ibb.co/0X5M7Jr/posledniy-bogatyr4-poster.jpg", description: "Еще одно продолжение фэнтези о богатыре." },
    { id: 98, title: "Лед 2", year: 2023, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/led4-poster.jpg", description: "Еще одна часть истории о фигурном катании." },
    { id: 99, title: "Холоп 3", year: 2023, rating: 7.5, poster: "https://i.ibb.co/0X5M7Jr/kholop5-poster.jpg", description: "Финальная часть трилогии о человеке в царской России." },
    { id: 100, title: "Сердце Пармы", year: 2023, rating: 7.1, poster: "https://i.ibb.co/0X5M7Jr/serce-pamri3-poster.jpg", description: "Заключительная часть истории о древней Руси." },
    
    // 2024
    { id: 101, title: "Девятая рота. Добровольцы", year: 2024, rating: 7.4, poster: "https://i.ibb.co/0X5M7Jr/9th-company2-poster.jpg", description: "Продолжение военной драмы о солдатах в Афганистане." },
    { id: 102, title: "Пауки. Наследие", year: 2024, rating: 7.2, poster: "https://i.ibb.co/0X5M7Jr/pauki-poster.jpg", description: "Фантастический боевик о наследии пауков." },
    { id: 103, title: "Спутник", year: 2024, rating: 7.8, poster: "https://i.ibb.co/0X5M7Jr/sputnik-poster.jpg", description: "Научная фантастика о космическом корабле с инопланетным существом." },
    { id: 104, title: "Комета", year: 2024, rating: 7.0, poster: "https://i.ibb.co/0X5M7Jr/kometa-poster.jpg", description: "Фантастическая драма о приближении кометы." },
    { id: 105, title: "Движение вверх 3", year: 2024, rating: 7.6, poster: "https://i.ibb.co/0X5M7Jr/dvizhenie-vverh5-poster.jpg", description: "Продолжение спортивной саги о баскетболе." }
];

// Функция для получения уникальных годов
function getUniqueYears() {
    return [...new Set(movies.map(movie => movie.year))].sort((a, b) => a - b);
}

// Ограниченный список фильмов для отображения
const moviesLimited = movies;

// Функция для отображения фильмов
function renderMovies(moviesToRender) {
    const container = document.getElementById('movies-container');
    const grid = document.createElement('div');
    grid.className = 'movies-grid';

    // Сортировка фильмов по убыванию рейтинга
    moviesToRender.sort((a, b) => b.rating - a.rating);

    moviesToRender.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
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

// Функция для фильтрации фильмов по году и сортировки по рейтингу в порядке убывания
function filterMoviesByYear(year) {
    let filteredMovies;
    if (year === 'all') {
        filteredMovies = [...moviesLimited];
    } else {
        filteredMovies = moviesLimited.filter(movie => movie.year == year);
    }

    // Сортировка по рейтингу в порядке убывания
    return filteredMovies.sort((a, b) => b.rating - a.rating);
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