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
        const divElement = document.createElement("div");
        divElement.classList.add("team-member");
        const divInfo = document.createElement("div");
        divInfo.classList.add("team-info");
        const divName = document.createElement("div");
        divName.classList.add("member-name")
        divName.append(`Membro ${i + 1}`);
        divElement.append(divName);
        for (let key in array[i]) {
            const spanInfo = document.createElement("span");
            spanInfo.classList.add(key)
            spanInfo.append(`${array[i][key]}`)
            divInfo.append(spanInfo);
        }
        divElement.append(divInfo);
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
const divContainer = document.querySelector(".container");


console.log(printTeam(arrayTeam));
printTeamDOM(arrayTeam);

