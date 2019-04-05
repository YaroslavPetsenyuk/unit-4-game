$(document).ready(function () {
    var randomNumber = Math.floor(Math.random() * 120 + 19)
    var ranBlue = Math.floor(Math.random() * 12 + 1)
    var ranRed = Math.floor(Math.random() * 12 + 1)
    var ranYellow = Math.floor(Math.random() * 12 + 1)
    var ranGreen = Math.floor(Math.random() * 12 + 1)

    var yourScore = 0;
    var wins = 0;
    var losses = 0;

    $("#display-random").text(randomNumber);

    $("#wins-span").append(wins);
    $("#losses-span").append(losses);

    function youWin() {
        $("#win-lose-text").text("You Win !!!");
        wins++;
        $("wins-text").append("<span>" + wins + "<span>")
        resetGame();
    }
    function youLose() {
        $("#win-lose-text").text("<p> You Loose !!! </p>");
        losses++;
        $("losses-text").append("<span>" + losses + "<span>")
        resetGame();
    }
    function winOrLose() {
        $("#score-box").text(yourScore);
        if (yourScore == randomNumber) {
            youWin();
        }
        else if (yourScore > randomNumber) {
            youLose();
        }
    }
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#display-random").text(randomNumber);
        ranBlue = Math.floor(Math.random() * 12 + 1);
        ranRed = Math.floor(Math.random() * 12 + 1);
        ranYellow = Math.floor(Math.random() * 12 + 1);
        ranGreen = Math.floor(Math.random() * 12 + 1);
        yourScore = 0;
        $('#score-box').text(yourScore);
    }




    $("#blue").on("click", function () {
        yourScore = yourScore + ranBlue;
        $("#score-box").text(yourScore);
        winOrLose();
    })
    $("#red").on("click", function () {
        yourScore = yourScore + ranRed;
        $("#score-box").text(yourScore);
        winOrLose();
    })
    $("#yellow").on("click", function () {
        yourScore = yourScore + ranYellow;
        $("#score-box").text(yourScore);
        winOrLose();
    })
    $("#green").on("click", function () {
        yourScore = yourScore + ranGreen;
        $("#score-box").text(yourScore);
        winOrLose();
    })




});