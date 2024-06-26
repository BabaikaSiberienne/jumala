import {cards} from "./components/cards.js"


console.log(programCards)

const cardTemplate = document.querySelector('#main__tour-template');              //шаблон картинки программы
console.log(cardTemplate);
const cardContainer = document.querySelector('.main__tours-list');                //место для включения картинок
let tourCard = cardTemplate.content.querySelector('.main__one-tour');             //карточка тура в разметке

function createCard(data) {
  const tourCardItem = tourCard.cloneNode(true);                                  //клонировать шаблон 
  const tourImage = tourCardItem.querySelector('.main__tour-image');              //картинка карточки тура
  const tourName = tourCardItem.querySelector('.main__tour-name');                //название тура
  tourImage.src = data.link;
  tourImage.alt = data.alt;
  tourName.textContent = data.title;
  return tourCardItem
}

programCards.forEach(item => {
  const tourCard = createCard(item);
  cardContainer.prepend(tourCard)
});

