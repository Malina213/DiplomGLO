export function regularForm() {
  const forms = document.querySelectorAll('form');
  const total = document.getElementById("calc-total");

  forms.forEach(form => {
    const inputText = form.querySelector('input[name="fio"]');
    const inputTel = form.querySelector('input[name="phone"]');

    inputText.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^а-яёa-z\s\-]/gi, '');
    });
    inputTel.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^+\d]/g, '');
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const valFio = inputText.value.trim();
      const valTotal = total?.value ?? 0;
      const valPhone = inputTel.value.trim();
      const reFio = /^[а-яёa-z\s\-]+$/i;
      const rePhone = /^\+\d{1,16}$/;
      const data = {
        fio: valFio,
        phone: valPhone,
        price: valTotal,
      };
      
      if (!valFio && !valPhone) {
        alert('Форма пустая. Пожалуйста, заполните все поля.');
        return;
      }

      if (!reFio.test(valFio)) {
        alert('Пожалуйста, введите корректное имя (русские или латинские буквы).');
        return;
      }

      if (!rePhone.test(valPhone)) {
        alert('Пожалуйста, введите корректный телефонный номер, начиная с + и максимум 16 цифр.');
        return;
      }

      console.log('Отправка данных в JSON:', JSON.stringify(data));

      form.reset();
    });
  });
}
