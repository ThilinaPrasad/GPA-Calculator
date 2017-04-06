var isFull = true;
var $analogClock = document.getElementById("clock");
var $mainWrapper = document.getElementsByClassName('wrapper')[0];

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "white";
    $analogClock.style.right = '-200px';
    $mainWrapper.style.width = '70vw';
    isFull = false;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    $analogClock.style.right = '-300px';
    $mainWrapper.style.width = '80vw';
    isFull = true;
}
