'use strict';

// FUNCTIONS 

function printTeam(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Membro ${i + 1}`)
        for (let key in array[i]) {
            console.log(`${key}: ${array[i][key]}`);
        }
    }
}

function printTeamDOM(array) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < array.length; i++) {
        const divElement = document.createElement("li");
        divElement.classList.add("team-member");
        for (let key in array[i]) {
            if (key !== "foto") {
                const divInfo = document.createElement("div");
                divInfo.classList.add(key);
                divInfo.append(`${array[i][key]}`);
                divElement.append(divInfo);
            } else {
                const fotoDiv = document.createElement("img");
                fotoDiv.classList.add(key);
                fotoDiv.src = `img/${array[i][key]}`;
                divElement.append(fotoDiv);
            }
        }

        fragment.append(divElement);
    }
    divContainer.append(fragment);
}

// OPERATIONS

const arrayTeam = [{
    nome: "Wayne Barnett",
    posizione: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
}, {
    nome: "Angela Caroll",
    posizione: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
}, {
    nome: "Walter Gordon",
    posizione: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
}, {
    nome: "Angela Lopez",
    posizione: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
}, {
    nome: "Scott Estrada",
    posizione: "Developer",
    foto: "scott-estrada-developer.jpg"
}, {
    nome: "Barbara Ramos",
    posizione: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
}]
const divContainer = document.querySelector(".board");


console.log(printTeam(arrayTeam));
printTeamDOM(arrayTeam);

