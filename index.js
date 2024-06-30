const programCards = [{
  title: "Приключение на 20 минут",
  alt: "иллюстрация предлагаемого тура",
  text: "описание тура",
  link: "./images/Gory.jpg"
},
{
  title: "Приключение на 20 минут",
  alt: "иллюстрация предлагаемого тура",
  text: "описание тура",
  link: "./images/Gory.jpg"},
{
    title: "Приключение на 20 минут",
    alt: "иллюстрация предлагаемого тура",
    text: "описание тура",
    link: "./images/Gory.jpg"}
  
]

const cardTemplate = document.querySelector('#main__tour-template');              //шаблон картинки программы
const cardContainer = document.querySelector('.main__tours-list');                //место для включения картинок
let tourCard = cardTemplate.content.querySelector('.main__one-tour');             //карточка тура в разметке


const tourDescription = document.querySelector('.main__tour-description');

function createCard(data, onTurnOn) {
  const tourCardItem = tourCard.cloneNode(true);                                  //клонировать шаблон 
  const tourImage = tourCardItem.querySelector('.main__tour-image');              //картинка карточки тура
  const tourName = tourCardItem.querySelector('.main__tour-name');                //название тура
  const tourDescription = tourCardItem.querySelector('.main__tour-description');
  const descriptionText = tourCardItem.querySelector('.main__tour-text');

  tourImage.src = data.link;
  tourImage.alt = data.alt;
  tourName.textContent = data.title;

  tourCardItem.addEventListener('click', onTurnOn);
  // descriptionText.addEventListener('click', onTurnOff);

  return tourCardItem
}

function onTurnOn(event){
  const tourCard = event.target.closest('.main__one-tour');
  const tourItem = tourCard.querySelector('.tour-box')
  tourItem.classList.toggle('description-disabled');
}

programCards.forEach(function (item) {
  const tourCard = createCard(item, onTurnOn);
  cardContainer.prepend(tourCard);
});