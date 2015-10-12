/**
 * Created by Wi on 03.10.2015.
 */

$(document).ready(function(){
    $( ".search-btn" ).click(function() {
        $( ".search-bar" ).slideToggle( "hidden" );
    });

    $( ".add-task-btn" ).click(function() {
        $( ".add-task-bar" ).toggleClass( "hidden" );
    });

    $( ".big-task-content, .details" ).click(function() {
        $( ".details, .claendar " ).toggleClass( "hidden" );
    });

    $( "#clandar, .set-due-date" ).hover(function() {
        $( ".set-due-date" ).toggleClass( "hidden" );
    });


})






