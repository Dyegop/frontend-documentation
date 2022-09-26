/*
JQUERY
    -jQuery is just a JavaScript library
    -To use jQuery, you need to link it in html using src attribute in the <script> element
    -The jQuery library contains the following features:
        -HTML/DOM manipulation
        -HTML event methods
        -CSS manipulation
        -Effects and animations
        -AJAX
        -Utilities

JQUERY - SELECTING ELEMENTS
    -The jQuery element selector selects elements based on the element name
        -Generic syntax -> $(selector).action()
        -id selector    -> $("#test") - select all elements based on id attribute
        -class selector -> $(".test") - select all elements based on CSS class
    -Actions can trigger a javascript function: $(selector).action(function() {}; )
    -JQuery can also manipulate css classes

JQUERY - EVENTS
    -Events are all the different visitors' actions that a web page can respond to.
        -Generic syntax:
            $("p").event_name(function(){ 
                // action goes here!! 
            });
        -jQuery detects when a page is "ready" so it can't be manipulated safely until.
            $( document ).ready(function() {
                console.log( "ready!" );
            });
        -A shorthand for $( document ).ready() is $()
            $(function() {
                console.log( "ready!" );
            });

JQUERY - EFFECTS AND ANIMATIONS
    -jQuery library provides several techniques for adding animation to a web page
*/


// Selecting elements
$('h1');
$("p").hide()
var x = $('h1');         
var listItems = $('li'); // grabbing multiple elements returns an array
listItems.eq(0)          // reduce the set of matched elements to the one at the specified index
$(".test").hide()        
$("#test").hide()        


// Manipulating CSS
// css()         -> set or return the style attribute
// addClass()    -> add one or more classes to the selected elements
// removeClass() -> remove one or more classes from the selected elements
// toggleClass() -> toggle between adding/removing classes from the selected elements
var x = $('h1');
x.css("color",'red');
x.css("background","blue");
// Multiple CSS properties at once
var newCSS = {
    "color":"white",
    "background":"blue",
    "border":"red"
}


// Execute actions over an element
$('li').click(function() {
    console.log("Click on any li !");
})


// Accessing properties of an element
$('h1').text("Brand New Text!")                   // changing Text
$('h1').html("<em>Now in Italics</em>")           // Changing HTML
$("input").eq(1).attr('type','checkbox');         // Changing an attribute
$("input").eq(0).attr('value',"BRAND NEW VALUE"); // Changing values





// EVENTS

// click(function)	   -> trigger the click event
// dblclick(function)  -> trigger the double click event
// keypress(function)  -> trigger the keypress event
$('h1').click(function(){
    console.log("There was a click!");
})
$('input').eq(0).keypress(function() {
    $('h3').toggleClass("turnRed");
})


// on(event, childSelector, data, function, map) -> attach event handlers to elements (basically works like addEventListener())
// off(event, selector, function, map)           -> remove event handlers attached with the on() method
//    event         - the event(s) or namespaces to attach to the selected elements
//    childSelector	- specified child elements that the event handler should only be attached to (optional)
//    selector      - selector which should match the one originally passed to the on() (optional)
//    data	        - additional data to pass along to the function 
//    function      - function to run (optional with off)
//    map           - event map ({event:function, event:function, ...}) containing one or more event to attach to the elements, and functions to run when the events occur
$('li').on('mouseenter', function() {
    $(this).toggleClass('turnRed');
})





// EFFECTS AND ANIMATIONS

// fadeOut()/fadeIn()
$('input').eq(1).on("click",function(){
    $(".container").fadeOut(3000) ;
})


// slideUp()/slideDown()/slideToggle()
$('input').eq(1).on("click",function(){
    $(".container").slideUp(1000) ;
})