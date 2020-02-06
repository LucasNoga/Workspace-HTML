//TODO faire des modules
$(document).ready(function () {
    var buttonLabel = $("#b-label")
    var buttonTextArea = $("#b-textarea")
    var buttonButton = $("#b-button")
    var buttonOK = $("#ok")

    buttonLabel.on('click', function () {
        $("#bloc").hide();
        afficherBloc(1)
    })

    buttonTextArea.on('click', function () {
        $("#bloc").hide();
        afficherBloc(2)
    })

    buttonButton.on('click', function () {
        $("#bloc").hide();
        afficherBloc(3)
    })
})

function afficherBloc(i) {
    var label, content, data
    $.getJSON("data.json")
        .done(function(data) {
            if (i == 1) {
                label = "Texte du label"
                content = data.label
            }
            else if (i == 2) {
                label = "Id de la zone de texte"
                content = data.textfield
            }
            else if (i == 3) {
                label = "Texte du bouton"
                content = data.button
            }
            var item = "<label class=\"element\" for=\"champ\">" + label + "</label>"
                + "<input class=\"element\" type=\"text\" name=\"champ\">"
                + "<button class=\"element\" id=\"ok\">OK</button>"
                + "<button class=\"element\" id=\"annuler\">Annuler</button>"
                + "<div id=\"bloc2\">" + content + "</div>"
        
            $("#bloc").html(item)
        
            add_listener(i)
            $("#bloc").fadeIn("slow")
        });
}

function add_listener(index) {
    // bouton ok
    if (index == 1) {
        $('#bloc #ok').on('click', function () {
            $('#gauche').append("<span class=\"element\">" + $("input[name=champ]").val() + "</span>")
            $("#bloc").fadeOut("slow");
        });
    }
    else if (index == 2) {
        label = "id de la zone de texte"

        $('#bloc #ok').on('click', function () {
            $('#gauche').append("<input class=\"element\" id=\"" + $("input[name=champ]").val() + "\" type=\"text\"><br/>")
            $("#bloc").fadeOut("slow");
        });
    }
    else if (index == 3) {
        label = "Texte du bouton"
        $('#bloc #ok').on('click', function () {
            $('#gauche').append("<button class=\"element\">" + $("input[name=champ]").val() + "</button><br/>")
            $("#bloc").fadeOut("slow");
        });
    }

    //Bouton annuler
    $('#bloc #annuler').on('click', function () {
        $("#bloc").fadeOut("slow");
    });

    $('#bloc button')
        .mouseenter(function () {
            $(this).css("box-shadow", "4px 4px 10px #aaaaaa")
        })

        .mouseleave(function () {
            $(this).css("box-shadow", "")
        });

    $('#bloc input')

        .on('focus mouseenter', function () {
            $(this).css("border", "solid blue 2px")
        })
        .on('blur', function () {
            $(this).css("border", "")
        })

}