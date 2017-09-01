"use strict";

$(document).ready(function (){


    // $('#textfield').keydown(function() {
    //     alert('A key was pushed down!');
    // });
    //
    // $('#textfield').keyup(function() {
    //     alert('a key was released!');
    // });

// a key map of allowed keys
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b',
        13: 'enter'
    };

    // the Konami Code
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

    // Position that the user had typed
    var konamiCodePosition = 0;

    // Event Listener
    document.addEventListener('keyup', function(keyVal) {
        var key = allowedKeys[keyVal.keyCode];
        var requiredKey = konamiCode[konamiCodePosition];

        if (key == requiredKey) {

            konamiCodePosition++;

            //when last key is pressed, activate
            if (konamiCodePosition == konamiCode.length) {
                activateKonami();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    function activateKonami() {
        $("h2").css("color", "white");

        // $("p")
        //     .css("text-align", "center")
        // ;
        //
        // $("centered").css

        $("#highlight").on("click", highlightImportantElements);
        function highlightImportantElements() {
            $important.addClass("highlighted");
        }

        document.body.style.backgroundImage = "url('img/blue-and-black-image.png')";

        var audio = new Audio('audio/beep10.mp3');
        audio.play();

        alert("You have added 30 lives!");

    }



    // alert("You have added 30 lives!");
    // console.log(event.keyCode);
});