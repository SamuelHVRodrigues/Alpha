car = {
    popular: {
        maximumSpeedVariation: {min: 180, max: 200},
        minimumSpeedVariation: {min: 110, max: 130},
        skidVariation: {min: 3, max: 4}
    },

    sport: {
        maximumSpeedVariation: {min: 195, max: 215},
        minimumSpeedVariation: {min: 125, max: 145},
        skidVariation: {min: 2, max: 3},
    },

    superSport: {
        maximumSpeedVariation: {min: 210, max: 230},
        minimumSpeedVariation: {min: 140, max: 160},
        skidVariation: {min: 1, max: 1.75},
    }
}

const player = [
    pedro = {
        exp: 0,
        level: 0,
        maximumSpeed: 0,
        minimumSpeed: 0,
        skidded: 0
    },
    juca = {
        exp: 0,
        level: 0,
        maximumSpeed: 0,
        minimumSpeed: 0,
        skidded: 0
    },
    edna = {
        exp: 0,
        level: 0,
        maximumSpeed: 0,
        minimumSpeed: 0,
        skidded: 0
    }
]

// Gera 3 carros, dá inicio a corrida e conta as voltas, se ao final da corrida houver empate serão dadas mais voltas até que haja um vencedor
function race(laps) {
    player[0].myCar = carGenerator(carRarity(), 0);
    player[1].myCar = carGenerator(carRarity(), 1);
    player[2].myCar = carGenerator(carRarity(), 2);
    
    player[0].wins = 0;
    player[1].wins = 0;
    player[2].wins = 0;
    
    let lapCounter = 0;
    
    let winner;
    
    for(let i = 0; i < laps; i++) {
        player.forEach(lap);
        lapResult();
        player.forEach(levelCalculator);
        player.forEach(upgradeCar);
        
        if(i == laps - 1) {
            if(player[0].wins > player[1].wins) {
                if(player[0].wins > player[2].wins) {
                    winner = "Pedro";
                }
                else if(player[0].wins == player[2].wins) {
                    i--;
                } else {
                    winner = "Edna";
                }
            } else {
                if(player[1].wins > player[2].wins) {
                    winner = "Juca";
                }
                else if(player[1].wins == player[2].wins) {
                    i--;
                } else {
                    winner = "Edna";
                }
            }
        }

        lapCounter++;
    }

    createRaceInfo(winner, lapCounter, player[0].wins, player[1].wins, player[2].wins);
}

// Gera um carro da raridade passada como parâmetro e define a velocidade máxima, velocidade mínima e derrapagem do carro com base na raridade do carro
function carGenerator(carRarity, index) {
    let generatedCar;
    
    if(carRarity == "popular") {
        generatedCar = car.popular;
    } else if(carRarity == "sport") {
        generatedCar = car.sport;
    } else {
        generatedCar = car.superSport;
    }
    
    player[index].maximumSpeed = randmnessAux(generatedCar.maximumSpeedVariation.max, generatedCar.maximumSpeedVariation.min);
    player[index].minimumSpeed = randmnessAux(generatedCar.minimumSpeedVariation.max, generatedCar.minimumSpeedVariation.min);
    player[index].skidded = randmnessAux(generatedCar.skidVariation.max, generatedCar.skidVariation.min);
    
    return generatedCar;
}

// Define a raridade do carro
function carRarity() {
    let rarity = Math.floor(Math.random() * 100);
    
    if(rarity <= 60) {
        return "popular";
    } else if(rarity <= 95) {
        return "sport";
    } else {
        return "supersport";
    }
}

// Gera um número aleatório entre os valores passados como parâmetro
function randmnessAux(maximumValue, minimumValue) {
    return Math.random() * (maximumValue - minimumValue) + minimumValue;
}

// Gera a velocidade média dos jogadores na volta
function lap(item) {
    item.averageSpeed = speedGenerator(item.maximumSpeed, item.minimumSpeed, item.skidded);
}

// Gera aleatóriamente a velocidade do carro com base nos valores passados como parâmetro
function speedGenerator(maximumSpeed, minimumSpeed, skidded) {
    return randmnessAux(maximumSpeed, minimumSpeed) * ((100 - skidded) / 100);
}

// Verifica a posição de cada jogador na volta, atribui a pontuação aos jogadores e soma uma vitória ao vencedor da volta
function lapResult(laps) {
    let firstPoints;
    let secondPoints;
    let thirdPoints;
    
    if(laps == 10) {
        firstPoints = 200;
        secondPoints = 120;
        thirdPoints = 50;
    } else if(laps == 70) {
        firstPoints = 220;
        secondPoints = 130;
        thirdPoints = 75;
    } else {
        firstPoints = 250;
        secondPoints = 150;
        thirdPoints = 90;
    }
    
    if(player[0].averageSpeed > player[1].averageSpeed && player[0].averageSpeed > player[2].averageSpeed) {
        player[0].wins++;
        player[0].exp += firstPoints;
        if(player[1].averageSpeed > player[2].averageSpeed) {
            player[1].exp += secondPoints;
            player[2].exp += thirdPoints;
        } else {
            player[2].exp += secondPoints;
            player[1].exp += thirdPoints;
        }
    } else if(player[1].averageSpeed > player[0].averageSpeed && player[1].averageSpeed > player[2].averageSpeed) {
        player[1].wins++;
        player[1].exp += firstPoints;
        if(player[0].averageSpeed > player[2].averageSpeed) {
            player[0].exp += secondPoints;
            player[2].exp += thirdPoints;
        } else {
            player[2].exp += secondPoints;
            player[0].exp += thirdPoints;
        }
    } else if(player[2].averageSpeed > player[0].averageSpeed && player[2].averageSpeed > player[1].averageSpeed) {
        player[2].wins++;
        player[2].exp += firstPoints;
        if(player[0].averageSpeed > player[1].averageSpeed) {
            player[0].exp += secondPoints;
            player[1].exp += thirdPoints;
        } else {
            player[1].exp += secondPoints;
            player[0].exp += thirdPoints;
        }
    }
}

// Calcula o nível dos jogadores
function levelCalculator(item) {
    item.level = Math.floor(item.exp / 450);
    console.log(`level: ${item.level}, exp: ${item.exp}`);
}

// Atualiza a velocidade máxima e mínima do carro de acordo com o nível dos jogadores
function upgradeCar(item) {
    if(item.level <= 10) {
        item.maximumSpeed *= 1.01;
        item.minimumSpeed *= 1.01;
    } else {
        item.level = 10;
    }
    console.log(`max: ${item.maximumSpeed}, min: ${item.minimumSpeed}`);
}

// Cria uma div com o vencedor da corrida, número de voltas e número de voltas que cada corredor ganhou
function createRaceInfo(winner, lapCounter, pedrosWins, jucasWins, ednasWins) {
    let races = document.getElementById("races");
    
    let raceInfo = document.createElement("div");
    raceInfo.className = "race";
    races.appendChild(raceInfo);
    
    let raceWinner = document.createElement("h2");
    raceWinner.innerHTML = `Vencedor(a): ${winner}`;
    raceInfo.appendChild(raceWinner);
    
    let raceLaps = document.createElement("h3");
    raceLaps.innerHTML = `${lapCounter} voltas`;
    raceInfo.appendChild(raceLaps);
    
    let pedrosResults = document.createElement("span");
    pedrosResults.innerHTML = `Pedro: ${pedrosWins} Vitórias`;
    raceInfo.appendChild(pedrosResults);
    
    let jucasResults = document.createElement("span");
    jucasResults.innerHTML = `Juca: ${jucasWins} Vitórias`;
    raceInfo.appendChild(jucasResults);

    let ednasResults = document.createElement("span");
    ednasResults.innerHTML = `Edna: ${ednasWins} Vitórias`;
    raceInfo.appendChild(ednasResults);
}