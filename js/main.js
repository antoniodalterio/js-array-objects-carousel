'use strict';

// Dichiarazioni variabili
const images = [
  {
    photo: '01.jpg',
    titolo: 'Panorama',
    descrizione:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius enim fugit dolore labore incidunt voluptate? Dolore vero aperiam, ducimus quo a repudiandae aspernatur, ipsum illum accusamus harum rem saepe.',
  },
  {
    photo: '02.jpg',
    titolo: 'Ucraina',
    descrizione:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius enim fugit dolore labore incidunt voluptate? Dolore vero aperiam, ducimus quo a repudiandae aspernatur, ipsum illum accusamus harum rem saepe.',
  },
  {
    photo: '03.jpg',
    titolo: 'Londra',
    descrizione:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius enim fugit dolore labore incidunt voluptate? Dolore vero aperiam, ducimus quo a repudiandae aspernatur, ipsum illum accusamus harum rem saepe.',
  },
  {
    photo: '04.jpg',
    titolo: 'Siviglia',
    descrizione:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius enim fugit dolore labore incidunt voluptate? Dolore vero aperiam, ducimus quo a repudiandae aspernatur, ipsum illum accusamus harum rem saepe.',
  },
  {
    photo: '05.jpg',
    titolo: 'Lago di Temae',
    descrizione:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius .',
  },
];

const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
let currentItem = 0;

// Ciclo for conteggio = larghezza Array(images)
for (let i = 0; i < images.length; i++) {
  const carosel = images[i];
  // elemento creato div
  const item = document.createElement('div');
  item.classList.add('item');

  // contenitore descrizion img
  const divDescrizone = document.createElement('div');
  divDescrizone.classList.add('box-descrizione');
  item.append(divDescrizone);

  items.append(item);

  if (i === currentItem) {
    item.classList.add('active');
    divDescrizone.classList.add('active');
  }

  // elemento creato img
  const img = document.createElement('img');
  item.append(img);
  img.src = `img/${carosel.photo}`;

  // elemento creato titolo
  const titolo = document.createElement('h2');
  divDescrizone.append(titolo);
  titolo.innerHTML = carosel.titolo;

  // elemento creato descrizione
  const descrizione = document.createElement('p');
  divDescrizone.append(descrizione);
  descrizione.innerHTML = carosel.descrizione;
}

// selettore di tipo per le classi item
const allItem = document.querySelectorAll('.item');

// funzione evento al click della freccia next

let myIntervall = setInterval(myFun, 2_000);

play.addEventListener('click', function () {
  if (!myIntervall) {
    myIntervall = setInterval(myFun, 2_000);
  }
});
stop.addEventListener('click', function () {
  if (myIntervall) {
    clearInterval(myIntervall);
  }
});

// funzione evento al click della freccia next

prev.addEventListener('click', function () {
  if (currentItem > 0) {
    allItem[currentItem].classList.remove('active');

    currentItem--;
    allItem[currentItem].classList.add('active');
    console.log(currentItem);
  } else if (currentItem === 0) {
    allItem[currentItem].classList.remove('active');

    currentItem = 4;
    allItem[currentItem].classList.add('active');
  }
});

function myFun() {
  if (currentItem < allItem.length - 1) {
    allItem[currentItem].classList.remove('active');

    currentItem++;
    allItem[currentItem].classList.add('active');
  } else if (currentItem === 4) {
    allItem[currentItem].classList.remove('active');

    currentItem = 0;
    allItem[currentItem].classList.add('active');
  }
}
