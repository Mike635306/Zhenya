    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a');
    const sections = document.querySelectorAll('section[id]');
    const form = document.getElementById('contactForm');
    const msgDiv = document.getElementById('form-message');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
   

 

function CLONE(){
    function closeMenu() {
      navLinks.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.className = 'fas fa-bars';
    }

    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Закрывать меню при клике на ссылку (для мобильных)
    navItems.forEach(item => {
      item.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          closeMenu();
        }
      });
    });

   
    
    function changeActiveNav() {
      let index = sections.length;
      const scrollPos = window.scrollY + 100;

      while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
      
      navItems.forEach(link => link.classList.remove('active-section'));
      
      if (index >= 0) {
        const currentId = sections[index].getAttribute('id');
        const activeLink = document.querySelector(`.nav-links a[href="#${currentId}"]`);
        if (activeLink) activeLink.classList.add('active-section');
      }
      
      // Если в самом верху - активна главная
      if (window.scrollY < 200) {
        navItems.forEach(link => link.classList.remove('active-section'));
        document.querySelector('.nav-links a[href="#home"]').classList.add('active-section');
      }
    }

    window.addEventListener('scroll', changeActiveNav);
    window.addEventListener('load', changeActiveNav);

    // Клик по якорным ссылкам (уже плавно из-за CSS, но добавим смещение из-за фикс. шапки)
    navItems.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const targetId = href;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });

   
   

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      
      
      if (!name || !email) {
        msgDiv.style.color = '#e74c3c';
        msgDiv.textContent = 'Пожалуйста, заполните имя и email.';
        return;
      }
      
      // Простая проверка email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        msgDiv.style.color = '#e74c3c';
        msgDiv.textContent = 'Введите корректный email.';
        return;
      }

      // Имитация отправки
      msgDiv.style.color = '#2ecc71';
      msgDiv.textContent = 'Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.';
      
      // Очистка полей (опционально)
      form.reset();
      
      // Можно было бы отправить данные через fetch, но для демо просто сообщение.
    });

    // Закрывать меню при ресайзе, если ширина > 768
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').className = 'fas fa-bars';
      }
    });

    }

CLONE();




    
    function openModal() {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Запрещаем прокрутку фона
        }

        // Функция закрытия модального окна
        function closeModal() {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Возвращаем прокрутку
        }

        // Закрытие по клику вне окна
        function closeModalOnClick(event) {
            if (event.target === modal) {
                closeModal();
            }
        }

        // Обработка кнопки ОК
        function handleConfirm() {
            alert('Вы нажали ОК!');
            closeModal();
        }

        // Закрытие по ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
        function openPopup() {
            popupElement.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Функция закрытия окна
        function closePopup() {
            popupElement.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Закрытие по клику вне окна
        function closeOnOutsideClick(event) {
            if (event.target === popupElement) {
                closePopup();
            }
        }

        // Обработка кнопки ОК
        function confirmAction() {
            alert('Вы нажали ОК!');
            closePopup();
        }

        // Закрытие по ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && popupElement.classList.contains('show')) {
                closePopup();
            }
        });

