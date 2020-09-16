/* global $ */
$(function () {



    const genGrid = (lunghezza, altezza) => {

        for (let i = 0; i < lunghezza * altezza; i++) {
            var gridClone = $("#grid-template > .grid").clone();
            $("#grid-container").append(gridClone);
        }
    }

    genGrid(6, 6);


    const color = number => {
        if (number <= 5) {
            return "yellow";
        }

        return "green";
    }


    const test = thisGrid => {
        $.ajax(
            {
                url: "https://flynn.boolean.careers/exercises/api/random/int",
                method: "GET",
                success: function (data, stato) {
                    $(thisGrid).removeClass("yellow, green");
                    $(thisGrid).addClass(color(data.response));
                    $(thisGrid).children(".number").html(data.response);
                },
                error: function (richiesta, stato, errori) {
                    alert("E' avvenuto un errore. ");
                }
            }
        );
    }



    $(document).on("click", ".grid", function () {
        var thisGrid = $(this);
        test(thisGrid);
    });

    $(document).on("mouseenter", ".grid", function () {
        var thisGrid = $(this);
        test(thisGrid);
    });


























});