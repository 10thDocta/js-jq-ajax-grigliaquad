/* global $ */
$(function () {


    // funzione che genera una griglia custum in base ai valori di lunghezza e altezza passati
    const genGrid = (lunghezza, altezza) => {
        for (let i = 0; i < lunghezza * altezza; i++) {
            var gridClone = $("#grid-template > .grid").clone();
            $("#grid-container").append(gridClone);
        }
    }

    // richiamo la funzione per generare la griglia 6x6
    genGrid(6, 6);

    //funzione che ritorna una stringa (classe per il css) in base al numero passato
    const color = number => {
        if (number <= 5) {
            return "yellow";
        }
        return "green";
    };

    //funzione per richiamare una chiamata ajax
    const ajaxCall = thisGrid => {
        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function (data, stato) {
                    //rimuovo le classi esistenti
                    $(thisGrid).removeClass("yellow, green");
                    //aggiungo la classe in base al risultato della funzione "color"
                    $(thisGrid).addClass(color(data.response));
                    //inserisco il data.response all'interno del tag span
                    $(thisGrid).children("span.number").text(data.response);
                },
                error: function (richiesta, stato, errori) {
                    alert("E' avvenuto un errore. ");
                }
            }
        );
    };

    //al click
    $(document).on("click", ".grid", function () {
        var thisGrid = $(this);
        ajaxCall(thisGrid);
    });

    //al mouse enter
    $(document).on("mouseenter", ".grid", function () {
        var thisGrid = $(this);
        ajaxCall(thisGrid);
    });


























});