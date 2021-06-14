const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');
const character1 = document.querySelector('.characterName1');
const character2 = document.querySelector('.characterName2');
const character3 = document.querySelector('.characterName3');
const character4 = document.querySelector('.characterName4');

const maxCharacter = 671;

let arrayCharacterId = [Math.floor(Math.random() * 671), 
    Math.floor(Math.random() * 671), 
    Math.floor(Math.random() * 671), 
    Math.floor(Math.random() * 671)];

function getCharacter1() {
    return fetch(`https://rickandmortyapi.com/api/character/${arrayCharacterId[0]}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image1.src = data.image;
        character1.innerHTML = data.name;

    });
}

function getCharacter2() {
    return fetch(`https://rickandmortyapi.com/api/character/${arrayCharacterId[1]}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image2.src = data.image;
        character2.innerHTML = data.name;
    });
}

function getCharacter3() {
    return fetch(`https://rickandmortyapi.com/api/character/${arrayCharacterId[2]}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image3.src = data.image;
        character3.innerHTML = data.name;

    });
}

function getCharacter4() {
    return fetch(`https://rickandmortyapi.com/api/character/${arrayCharacterId[3]}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image4.src = data.image;
        character4.innerHTML = data.name;

    });
}

window.addEventListener('load', function() {
    getCharacter1(),
    getCharacter2(),
    getCharacter3(),
    getCharacter4(),
    console.log('All assets are loaded')
});