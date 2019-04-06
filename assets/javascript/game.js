// I think my code is all here but for some reason I am having issues with upadating the Scores and the wins and losses count
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

    $("#wins-text").append(wins);
    $("#losses-text").append(losses);

    function winOrLose() {
        $("#score-box").text(yourScore);
        if (yourScore == randomNumber) {
            youWin();
        }
        else if (yourScore > randomNumber) {
            youLose();
        }
    }
    function youWin() {
        $("#win-loose-text").text("<p>You Win !!!</p>");
        wins++;
        $("wins-text").text(wins);
        resetGame();
    }
    function youLose() {
        $("#win-loose-text").text("<p>You Loose !!!</p>");
        losses++;
        var loosePlaceholder = document.createElement("div");
        $("losses-text").append(loosePlaceholder);
        $(loosePlaceholder).attr("id", wins).text(wins);
        resetGame();
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
