const inputFilmes = document.getElementById('inputFilmes');
const addFilmeButton = document.getElementById('addFilme');
const filmesLista = document.getElementById('filmesLista');

const inputSeries = document.getElementById('inputSeries');
const addSerieButton = document.getElementById('addSerie');
const seriesLista = document.getElementById('seriesLista');

const inputAnimes = document.getElementById('inputAnimes');
const addAnimeButton = document.getElementById('addAnime');
const animesLista = document.getElementById('animesLista');


function addItem(input, list) {
  const itemText = input.value.trim();
  if (itemText === '') {
    alert('Por favor, digite algo!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = itemText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.classList.add('remove-button');

  li.appendChild(removeButton);

  list.appendChild(li);

  input.value = '';
}

function removeItem(event, list) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentElement;
    list.removeChild(li);
  }
}


addFilmeButton.addEventListener('click', () => addItem(inputFilmes, filmesLista));
addSerieButton.addEventListener('click', () => addItem(inputSeries, seriesLista));
addAnimeButton.addEventListener('click', () => addItem(inputAnimes, animesLista));

filmesLista.addEventListener('click', (event) => removeItem(event, filmesLista));
seriesLista.addEventListener('click', (event) => removeItem(event, seriesLista));
animesLista.addEventListener('click', (event) => removeItem(event, animesLista));