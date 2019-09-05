const HREF = 'https://www.google.com.ua';

const openNewWindow = () => {
  event.preventDefault();

  let localStore = localStorage.getItem('click');
  if (!localStore) {
    localStorage.setItem('click', 1);
    localStore = 1;
  } else {
    localStorage.setItem('click', Number(localStore) + 1);
  }
  document.cookie = `clicl=${localStore}`;
  
  console.log(document.cookie);

  window.open(HREF);
}