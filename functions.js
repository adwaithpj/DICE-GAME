function clickME() {
    function randomNumber1() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        return randomNumber1;
    }
    rannum1 = randomNumber1();
    var randomImageSource1 = "images/dice" + rannum1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImageSource1);
    rannum2 = randomNumber1();
    var randomImageSource2 = "images/dice" + rannum2 + ".png"
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    document.querySelector(".winner").style.color = "#F4E06D";
    if (rannum1 > rannum2) {
        document.querySelector(".winner").innerHTML = "Player 1 wins";
    } else if (rannum1 < rannum2) {
        document.querySelector(".winner").innerHTML = "Player 2 wins";
    } else {
        document.querySelector(".winner").innerHTML = "DRAW";
    }
}