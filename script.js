const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');
const character1 = document.querySelector('.characterName1');
const character2 = document.querySelector('.characterName2');
const character3 = document.querySelector('.characterName3');
const character4 = document.querySelector('.characterName4');

const maxCharacter = 671;

// Cria uma lista de IDs aleatórios a serem utilizados para acessar os dados da API 
let arrayCharacterId = [Math.floor(Math.random() * maxCharacter), 
    Math.floor(Math.random() * maxCharacter), 
    Math.floor(Math.random() * maxCharacter), 
    Math.floor(Math.random() * maxCharacter)];

// Acessa a API e pega as informações do personagem 1, de ID especifíco, que serão alteradas na página (image e name) de um ID especifíco 
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

// Acessa a API e pega as informações do personagem 2, de ID especifíco, que serão alteradas na página (image e name) de um ID especifíco 
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

// Acessa a API e pega as informações do personagem 3, de ID especifíco, que serão alteradas na página (image e name) de um ID especifíco 
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

// Acessa a API e pega as informações do personagem 4, de ID especifíco, que serão alteradas na página (image e name) de um ID especifíco 
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
    getCharacter4()
});
