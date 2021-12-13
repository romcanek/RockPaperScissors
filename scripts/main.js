let emoji = document.getElementsByClassName("emoji")
let resultYou = document.getElementById("result-you")
let resultComp = document.getElementById("result-comp")
let player = document.getElementById("results-list-p")
let computer = document.getElementById("results-list-c")

for(let r of emoji){
    r.addEventListener("click", (e) => {
        text = e.target.textContent
        let value = null;
        if(text == "✊"){
            value = 0;
        }
        else if(text == "✋"){
            value = 1
        }
        else if(text == "✌️"){
            value = 2
        }
        playGame(value)
    })
}

function playGame(value){
    let comp = Math.floor(Math.random() * 3);
    let winner = 1; // nastavime ze vyhral pocitac kdyz ne tak to zmenime
    if(value == 0 && comp == 2){
        winner = 0;
    }
    if(value == 1 && comp == 0){
        winner = 0;
    }
    if(value == 2 && comp == 1){
        winner = 0;
    }
    else if (value == comp){
        winner = 2
    }
    if(winner == 0){
        resultYou.textContent = parseInt(resultYou.textContent) + 1

        let adder = document.createElement("div")
        let winn = document.createElement("div")
        if(comp == 0)
            adder.textContent = "✊" 
        else if(comp == 1)
            adder.textContent = "✋" 
        else if(comp == 2)
            adder.textContent = "✌️"
        if(value == 0)
            winn.textContent = "✊" 
        else if(value == 1)
            winn.textContent = "✋" 
        else if(value == 2)
            winn.textContent = "✌️"
        adder.classList.add("final-result")
        winn.classList.add("final-result", "winner")
        player.appendChild(winn)
        computer.appendChild(adder)
    }
    if(winner == 1){
        resultComp.textContent = parseInt(resultComp.textContent) + 1

        let adder = document.createElement("div")
        let winn = document.createElement("div")
        if(comp == 0)
            adder.textContent = "✊" 
        else if(comp == 1)
            adder.textContent = "✋" 
        else if(comp == 2)
            adder.textContent = "✌️"
        if(value == 0)
            winn.textContent = "✊" 
        else if(value == 1)
            winn.textContent = "✋" 
        else if(value == 2)
            winn.textContent = "✌️"
        adder.classList.add("final-result", "winner")
        winn.classList.add("final-result")
        player.appendChild(winn)
        computer.appendChild(adder)
    }
}
