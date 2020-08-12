$(function(){
    populateButtons(searchArray, 'searchButton', '#buttonsArea');
    console.log("Page Loaded");
 })

 var searchArray = ["The Terminator", "The Dark Knight", "Iron Man", "Gladiator", "Joker", "Frozen", "Avengers"]

 function populateButtons(searchArray, classToAdd, areaToAddTo){
    $(areaToAddTo).empty();
    for(var i = 0; i < searchArray.length; i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }
 }



 