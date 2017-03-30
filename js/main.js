/**
 * Created by Thilina Prasad on 3/23/2017.
 */

var $semSelectDD = document.getElementById("semDD");
var $depSelectDD = document.getElementById("depDD");
var $oldGPA = document.getElementById("olderGPA");

function sem(){
    alert($semSelectDD.selectedIndex);
}

function hideElement($temp) {
    $temp.style.visibility = "hidden";
    $temp.style.display = "none";
}

function showElement($temp) {
    $temp.style.visibility = "visible";
    $temp.style.display = "inline";
}

