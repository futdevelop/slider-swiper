new Swiper('.image-slider', {
	// Стрілки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// Булети, теперешнє положення, прогресбар
	pagination: {
		el: '.swiper-pagination',
		// Булети
			// type: 'bullets',
			// clickable: true,
		// Динамічні булети
			// dynamicBullets: true,
		// Кастомні булети
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>'
			// },
		//Фракція
			// type: 'fraction',
		// Кастомні фракції
			// renderFraction: function (currentClass, totalClass) {
			// 	return 'Фото <span class="' + currentClass + '"></span>' +
			// 	' з ' + '<span class="' + totalClass + '"></span>';
			// }
		//Прогресбар
			// type: 'progressbar',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
		// Можливість перетягувати скролл
		draggable: true,
	},
	// Вкл\викл
	// Свайп на пк
		simulateTouch: true,
	// Чутливість свайпа
		touchRatio: 1,
	// Кут спрацювання свайпа\перетискання
		touchAngle: 45,
	// Курсор перетискання
		gradCursor: true,

	//Перемкнути слайд при кліку
		slideToClickedSlide: true, 

	// Навігація по хешу
	hashNavigation: {
		// Відстежити стан
			watchState: true,
	},

	// Управління клавіатурою
	keyboard: {
		// Включить/вимкнути
		enabled: true,
		// Включить/вимкнути
		// Якщо слайдер
		// в межах в`юпорта
		onlyInViewport: true,
		// Включить/вимкнути
		// Управління клавішами
		// pageUp, pageDown
		pageUpDown: true, 
	},

	// Управління колесом мишки
		mousewheel: {
		//Чутливість колеса мишки
			sensitivity: 1,
		//Класс обєкта на якому буде
		// спрацбовувати прокрутка мишки
			eventsTarget: '.image-slider'
		},

	// Автовисота
		autoheight: false,
	
	// Кількість слайдів для показу
		slidesPerView: 1,
	
	// Відключення функціонала
	// якщо слайдів менше ніж потрібно
		watchOverflow: true,

	// Отступ між слайдами
		spaceBetween: 0,
	
	// Кількість пролистання слайдов
		slidesPerGroup: 1,
	
	// Активний слайд по центру
		centeredSlides: false,
	
	// Початковий слайд
		initialSlide: 0,

	// Мультирядність
		slidesPerColumn: 1,
	
	// Бескінечний слайдер
		loop: true,

	// Кількість дублюючих слайдів
		loopesSlides: 0,

	// Вільний режим
		freeMode: true,
	
	// Автопрокрутка
	// autoplay: {
	// 	// Пауза між прокруткою
	// 		delay: 1000,
	// 	// Закінчити на останньому слайді
	// 		stopOnLastSlide: false,
  //   // Відключити після ручного переключення
	// 		disableOnInteraction: false
	// },

	// Скорость
		speed: 800,

	// Вертикальний слайдер
		direction: 'horizontal',

	// Ефект переключення слайда
		// Листання 
			effect: 'slide',

		// Змінна прозорості
			// effect: 'fade',

		// Доповнення к fade
			// fadeEffect: {
				// Паралельне
				// Змінна прозорості
					// crossfade: true,
			// }
	// Переворот(ефект)
		// effect: 'flip',

		// Доповнення к flip
			// flipsEffect: {
				// Тінь
						// slideShadows: true,
					// Показ тільки одного слайду
						// limitRotation: true
			// }
	// Куб
		// effect: 'cube',

			// Доповнення до куба
				// cubeEffects: {
					// Налаштування куба
						// slideShadows: true,
						// shadow: true,
						// shadowOffset: 20,
						// shadowScale: 0.94
				// }
	// Ефект потіка
		// effect: 'coverFlow',

	// Доповнення до coverFlow
		// coverFlowEffect: {
			// Кут
				// rotate: 20,
			// Наложення 
				// stretch:  50,
			// Тінь
				// slideShadows: true,
		// },
	
		// Брейк поінти(адаптив)
		// Ширина екрана 
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			}
		}

});