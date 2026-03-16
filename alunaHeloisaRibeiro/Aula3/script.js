let titulo = document.querySelector("h1");

titulo.addEventListener("click", function(){

    titulo.style.color = "#ff00ff";

});

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseover", function(){
        card.style.transform = "scale(1.15)";
    });

    card.addEventListener("mouseout", function(){
        card.style.transform = "scale(1)";
    });

});