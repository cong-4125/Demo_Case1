const cardArray = [
    {
        name: 'Pokemon1',
        img: 'images/Pokemon1.jpg'
    },
    {
        name: 'Pokemon3',
        img: 'images/Pokemon3.jpg'
    },
    {
        name: 'Pokemon4',
        img: 'images/Pokemon4.jpg'
    },
    {
        name: 'Pokemon2',
        img: 'images/Pokemon2.jpg'
    },
    {
        name: 'Pokemon5',
        img: 'images/Pokemon5.jpg'
    },
    {
        name: 'Pokemon',
        img: 'images/Pokemon.jpg'
    },
    {
        name: 'Pokemon1',
        img: 'images/Pokemon1.jpg'
    },
    {
        name: 'Pokemon3',
        img: 'images/Pokemon3.jpg'
    },
    {
        name: 'Pokemon4',
        img: 'images/Pokemon4.jpg'
    },
    {
        name: 'Pokemon2',
        img: 'images/Pokemon2.jpg'
    },
    {
        name: 'Pokemon5',
        img: 'images/Pokemon5.jpg'
    },
    {
        name: 'Pokemon',
        img: 'images/Pokemon.jpg'
    }
]
cardArray.sort(() => 0.5 - Math.random());
let time = 30;
let success = false;
setInterval(function () {
    if (time > 0 && success == false) {
        time -= 1;
        document.getElementById('time').innerText = "Thời gian còn lại    :" + time;
        document.getElementById("score").innerHTML = time ;
        if (time == 0 && success == false) {
            // confirm('fail');
            if (confirm("Ban co muon choi lai ko")) {
                window.location.reload();
            }
        }
    }
}, 1000)


const grid = document.getElementsByClassName('grid')[0];
let cardsChosen = [];
let cardsChosenId = [];

//tao bang game
function createBoard() {
    let html = '';
    for (let i = 0; i < cardArray.length; i++) {
        html += `<img id="${i}" src="images/blank.png" onclick="flipCard(${i})"/>`;
    }
    grid.innerHTML = html;
}

function flipCard(cardId) {
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    document.getElementById(cardId).src = cardArray[cardId].img;
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 200);
    }
}

function checkForMatch() {
    // let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1] && optionOneId != optionTwoId) {

        document.getElementById(optionOneId).remove();
        document.getElementById(optionTwoId).remove();

    } else {
        document.getElementById(optionOneId).src = 'images/blank.png';
        document.getElementById(optionTwoId).src = 'images/blank.png';

    }
    cardsChosen = [];
    cardsChosenId = [];
    console.log(cardArray);
    let content = document.getElementsByClassName('grid')[0].innerHTML;
    if (content == '') { //kiem tra dieu kien win
        success = true;
        document.getElementById('result').innerHTML = 'chúc mừng bạn đã qua lever  !'
        //tao button choi lai
    }
}

createBoard();
