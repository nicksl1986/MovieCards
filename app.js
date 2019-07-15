
function flip_card(i) {
    var image = document.getElementById(i + "");
    image.src = "movies/" + i + ".jpg";
}

function flip_first_card() {
    var img = document.getElementById("1");
    img.src = "movies/1.jpg";
}

function flip_cards_back() {
    var emages = document.getElementsByClassName("img");
    for (var i = 0; i < emages.length; i++) {
        var emg = emages[i];
        emg.src = "movies/back.jpg";
    }
}

function random_image() {
    var rand = Math.floor(Math.random() * 15) + 1;
}

var game_images = [];
function start_game() {
    for (var i = 0; i < 5; i++) {
        var r = Math.floor(Math.random() * 15) + 1;

        game_images[i] = '<img src="movies/' + r + '.jpg ">';
        e.innerHTML += '<img src="movies/' + r + '.jpg ">';
    }
}

function say_hello() {
    

    // jquery basic syntax :

    $("out").html("");
}

// jquery example practice

function maximize() {
    

    $("div").addClass("big");
    $("div.my-div").removeClass("small");
}

function minimize() {


    $("div.my-div").addClass("small");
    $("div.my-div").removeClass("big");
}



