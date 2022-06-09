$(function () {
    function display(bool) {
        if (bool) {
            $(".container").show();
        } else {
            $(".container").hide();
        }
    }

    function displayAlready(bool) {
        if (bool) {
            $(".container").show();
        } else {
            $(".container").hide();
        }
    }



    display(false)
    displayAlready(false)



    // if the person uses the escape key, it will exit the resource
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $("#slot1Accept").prop( "checked", false );
            $("#slot2Accept").prop( "checked", false );
            $("#slot3Accept").prop( "checked", false );
            $("#slot4Accept").prop( "checked", false );
            $("#slot5Accept").prop( "checked", false );
            $(".footer").hide();
            $.post('http://agrp-voting/exit', JSON.stringify({}));
            return
        }
    };









    window.addEventListener('message', function(event) {
        var item = event.data;

//        document.getElementById("slot1Name").innerHTML = item.slot1Name;
//        document.getElementById("slot2Name").innerHTML = item.slot2Name;
//        document.getElementById("slot3Name").innerHTML = item.slot3Name;

//        document.getElementById("genderSlot1").innerHTML = item.slot1Gender;
//        document.getElementById("genderSlot2").innerHTML = item.slot2Gender;
//        document.getElementById("genderSlot3").innerHTML = item.slot3Gender;

//        document.getElementById("partySlot1").innerHTML = item.slot1Age;
//        document.getElementById("partySlot2").innerHTML = item.slot2Age;
//        document.getElementById("partySlot3").innerHTML = item.slot3Age;


        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }

        if (item.type === "already") {
            if (item.status == true) {
                displayAlready(true)
            } else {
                displayAlready(false)
            }
        }
    })
   















//    document.onkeyup = function (data) {
//        if (data.which == 27) {
//            $.post('http://voting/exit', JSON.stringify({})); // Wenn man ESC triggert er Callback exit in der Main.lua Client
//            return
//        }
//    };
//    $("#close").click(function () {
//        $.post('http://voting/exit', JSON.stringify({})); //exit ist der Callback in der Client Main.lua - Sobald der Button mit der ID Close gedrückt wird passiert das was in der Callback steht - In dem fall schließt er das
//        return
//    })

//    $("#alreadyCheckOkay").click(function () {
//        $.post('http://voting/exit', JSON.stringify({})); //exit ist der Callback in der Client Main.lua - Sobald der Button mit der ID Close gedrückt wird passiert das was in der Callback steht - In dem fall schließt er das
//        return
//    })

//    $("#thxVote").click(function () {
//        $("#contentSuccess").hide("100");
//        $.post('http://voting/exit', JSON.stringify({})); //exit ist der Callback in der Client Main.lua - Sobald der Button mit der ID Close gedrückt wird passiert das was in der Callback steht - In dem fall schließt er das
//        return
//    })

   
    
})