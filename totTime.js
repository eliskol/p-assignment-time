// ==UserScript==
// @name         assignment total time
// @namespace    https://eliskol.github.io
// @version      0.1
// @description  this small script adds up the total time it took to complete a homework assignment
// @author       eliskol
// @match        https://*/assignments/*/results
// @grant        none
// ==/UserScript==

//the event listener runs the script when the page loads
window.addEventListener('load', function() {

    var elems = document.getElementsByClassName('timeElpased');
    var totSec = 0;
    for(var i = 0; i < elems.length; i++){

        var split = elems[i].innerText.slice(9).split(':');

        totSec += Number(split[0]*60);
        totSec += Number(split[1]);
    }

    var hours = Math.floor(totSec/3600);
    var minutes = Math.floor((totSec%3600)/60);
    var seconds = totSec % 60;
    var formattedTime = hours + ':' + minutes + ':' + seconds + ' taken on this assignment!'
    console.log(formattedTime);


    var table = document.getElementsByTagName('table')[1];
    var timeP = document.createElement('p');
    timeP.innerText = formattedTime;
    table.parentNode.insertBefore(timeP, table);

}, false);
