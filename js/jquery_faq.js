"use strict";
$(document).ready(function (){

    //on click, displays FAQ answers. On click hides the answers.
    $('#highlight-important').click(function(event) {
        event.preventDefault();
        $('dd').toggleClass('invisible');
    });

    // $("dt").click(function(event) {
    //     $(this).css('background-color', '#FFF7CB' );
    // });

    //get rid of property first
    $("dt").click(function(event) {
        // $("dt").css('background-color', 'transparent' ); //get rid of all properties -- only allows one line to be highlighted at a time
        $(this).css('background-color', '#FFF7CB' );
    });

    $("li").click(function(event) {
        $("li").css('background-color', 'transparent' ); //get rid of all properties -- only allows one line to be highlighted at a time
        $(this).css('background-color', '#FFF7CB' );
        $("li").last().css('background-color', '#5E96FF' );
    });

    $("h3").click(function(event) {
        $("h3").css('background-color', 'transparent' ); //get rid of   all properties -- only allows one line to be highlighted at a time
        $(this).css('text-decoration', 'underline' );
        $("li").last().css('font-weight', 'bold' );//not working
    });

    //on click, highlight li
    $('#highlight-li').click(function(event) {
        event.preventDefault();
        $("li").last().css('background-color', '#FFF7CB' );
        $("li").first().css('background-color', '#5E96FF' );
    });

    // $("#highlight-li").on("click", highlightAllLastListItems );
    //
    // function highlightAllLastListItems () {
    //     $("ul").each(highlightLastListItem); //DOM element
    // }
    //
    // function highlightLastListItem () {
    //     console.log(this); //ul DOM
    //     $("ul").each(highlightLastListItem); //'this' is each ul DOM element
    //     $(this).children().last().css('background-color', '#FFF7CB' );
    // }

    $("h3").on("click", makeAllListItemsBold );

    function makeAllListItemsBold () {
            $(this).children().css('font-weight', 'bold' );
        }


    $("li").on("click", makeFirstSiblingBlue );

    function makeFirstSiblingBlue () {
        $(this).parent().children().first().css('color', '#5E96FF' );
    }

    $('#national-parks-toggle').click(function() {
        $('#national-parks').hide();
    });

    $("#close").click(function(){
        //$(this).hide(); //only hides the X span
        $(this).parent().hide(); // hides the entire thing
        //console.log(this)
    });

    var facts = $(".facts");

    facts.hide();

    //hides the lists for National Park facts
    facts.prev().click(function () {
        //$(this).parent().hide(); //always hides facts
        $(this).next().slideToggle(); //toggles and hides content
    });

    setTimeout(function () {
        $("#register").fadeIn();
    }, 2000);

});
