document.getElementById('orderSubmit').addEventListener('click', function () {
    const name = document.getElementById('order-name').value.trim();
    const email = document.getElementById('order-email').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const service = document.getElementById('order-service').value;
    const message = document.getElementById('order-message').value.trim();

    const errors = [];
    if (!name) errors.push('Имя обязательно');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('Некорректный email');
    if (!phone || !/^\+?\d{10,15}$/.test(phone)) errors.push('Некорректный телефон');
    if (!service) errors.push('Выберите услугу');
    if (!message) errors.push('Сообщение обязательно');

    if (errors.length) {
        alert(`Ошибки заполнения формы:\n${errors.join('\n')}`);
        return;
    }

    alert(`Данные заказа:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nУслуга: ${service}\nСообщение: ${message}`);
});

// Изменение CSS стиля заголовка при клике
document.querySelector('.section-title').addEventListener('click', function () {
    this.style.color = '#ff6600'; // Изменить цвет текста заголовка
    this.style.transform = 'scale(1.2)'; // Увеличить размер заголовка
});

// Скрытие формы заказа продукта при двойном клике
document.querySelector('.order-form-section').addEventListener('dblclick', function () {
    this.style.display = 'none'; // Скрыть форму
    alert('Форма заказа продукта скрыта!');
});
