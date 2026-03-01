const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

//

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  const data = new FormData(form);
  formData.email = data.get('email');
  formData.message = data.get('message');
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
//

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email;
    form.elements.message.value = message;
    formData.email = email;
    formData.message = message;
  }
});

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('«Fill please all fields»');
  } else {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email = '';
    formData.message = '';
  }
}
