import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const savedObject = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedObject));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const serialState = localStorage.getItem(key);
    if (localstorage ===null) {
      return
    }
    else {
    return serialState === null ? undefined : JSON.parse(serialState);}
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const dataStored = load(LOCALSTORAGE_KEY);
if (dataStored) {
  email.value = dataStored.email;
  message.value = dataStored.message;
}
