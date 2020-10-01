// document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name: 'duc',
            img: 'images/Pokemon1.jpg'
        },
        {
            name: 'vietnam',
            img: 'images/Pokemon3.jpg'
        },
        {
            name: 'phap',
            img: 'images/Pokemon4.jpg'
        },
        {
            name: 'Pokemon2',
            img: 'images/Pokemon2.jpg'
        },
        {
            name: 'nhat',
            img: 'images/Pokemon5.jpg'
        },
        {
            name: 'mi',
            img: 'images/my.png'
        },
        {
            name: 'Pokemon1',
            img: 'images/Pokemon1.jpg'
        },
        {
            name: 'vietnam',
            img: 'images/Pokemon3.jpg'
        },
        {
            name: 'phap',
            img: 'images/Pokemon4.jpg'
        },
        {
            name: 'han',
            img: 'images/Pokemon2.jpg'
        },
        {
            name: 'nhat',
            img: 'images/Pokemon5.jpg'
        },
        {
            name: 'mi',
            img: 'images/my.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());
    // class Pokemon {
    //     constructor(name,img) {
    //         this.name = name;
    //         this.img = img;
    //     }
    // }
    // let pokemon1 = new Pokemon("duc","image/Pokemon1.jpg");
    // let pokemon2 = new Pokemon("han","image/Pokemon2.jpg");
    // let pokemon3 = new Pokemon("my","image/my.png");
    // let pokemon4 = new Pokemon("nhat","image/Pokemon5.jpg");
    // let pokemon5 = new Pokemon("phap","image/Pokemon4.jpg");
    // let pokemon6 = new Pokemon("vietnam","image/Pokemon3.jpg");
    //
    // let cardArray = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6];
    // cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //tao bang game
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let img = `<img id="${i}" src="images/blank.png"/>`;
            // let card = document.createElement('img');
            // card.setAttribute('src', 'images/blank.png');
            // card.setAttribute('id', `${i}`);
            // card.addEventListener('click', flipCard);
            // console.log(card)
            grid.appendChild(img);
        }
    }
    //
    function flipCard() {
        let cardId = this.getAttribute('id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200);
        }
    }
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        } else if (cardsChosen[0] === cardsChosen[1]) {

            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

        }
        cardsChosen = [];
        cardsChosenId = [];
        if (cardsWon.length === cardArray.length / 2) { //kiem tra dieu kien win
            resultDisplay.innerHTML = 'chúc mừng bạn đã qua màn 1 !'
            //tao button choi lai
        }
    }


    createBoard();
// })