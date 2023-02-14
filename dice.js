
function addDice() { 
    const lisatav = document.createElement("div");
    const tekst = `<img src="pildid/0.png">`;
    lisatav.innerHTML = tekst;
    const algneDiv = document.getElementById("div1");
    document.body.insertBefore(lisatav, algneDiv);
}

function roll() {
    document.querySelectorAll("div").forEach((n, i) => {
        let juhuarv = Math.floor(Math.random() * 6) + 1;
        return document.querySelectorAll("div").item(i).innerHTML = ('<img src="pildid/' + juhuarv + '.png"/>');

    });
}
