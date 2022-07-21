// const { response } = require("express");

const apiUrl = "https://rickandmortyapi.com/api";

const characters = [];

const getCharacter = document.getElementById("search-character");

getCharacter.addEventListener("click", async function() {
    const characterId = document.getElementById("character-id").value;
    console.log(characterId);

    searchCharacterById(characterId);
    console.log(characters);
    setTimeout(() => console.log(characters), 1000);
    await console.log(characters);
});

async function searchCharacterById(characterId) {
    try {
        let response = await fetch(`${apiUrl}/character/${characterId}`);
        let responseJson = await response.json();
        const characterName = responseJson.name;
        characters.push(characterName);
        document.getElementById("result").innerHTML = `<p>${characterName}</p>`;

        response = await fetch(`${apiUrl}/character/?name=${characters[characters.length-1]}`);
        responseJson = await response.json();
        imgUrl = responseJson.results[0].image;
        document.getElementById("result").innerHTML += `<img src="${imgUrl}" />`;
    }
    catch(e) {
        console.log(e);
        document.getElementById("result").innerHTML = "No results";
    }
    finally {
        console.log("Search completed");
    }
}