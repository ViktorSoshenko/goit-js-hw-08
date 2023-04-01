import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

updateOutput();
form.addEventListener('input', throttle(onPlay, 500));

function onPlay(event) {
  const objekt = {
    email: input.value,
    message: textarea.value,
  };
  const feedbackFormJson = JSON.stringify(objekt);
  localStorage.setItem(STORAGE_KEY, feedbackFormJson);
  const locall = localStorage.getItem(STORAGE_KEY);
  const locallPars = JSON.parse(locall);
  //   console.log(locall);
}

function updateOutput() {
  //   localStorage.removeItem(STORAGE_KEY);
  const locall = localStorage.getItem(STORAGE_KEY);
  //   console.log(locall);
  const locallPars = JSON.parse(locall);
  if (locall) {
    // console.log(locall);
    input.value = locallPars.email;
    // console.log(locallPars.email);
    textarea.value = locallPars.message;
    // console.log(locallPars.message);
  } else {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
  //   form.elements.email.value = locallPars.email || '';
  //   console.log(locallPars.email);
  //   form.elements.message.value = locallPars.message || '';
  //   console.log(locallPars.message);
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  if (input.value === '') {
    alert('ЗАПОВНІТЬ ПОЛЯ !!!');
    return;
  }
  event.preventDefault();
  const locall = localStorage.getItem(STORAGE_KEY);
  const locallPars = JSON.parse(locall);
  console.log(locallPars);
  localStorage.clear();
  input.value = localStorage.getItem(STORAGE_KEY);

  textarea.value = localStorage.getItem(STORAGE_KEY);
}
