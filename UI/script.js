var design_button = document.getElementById("design-btn");
var art_button = document.getElementById("art-btn");
var game_button = document.getElementById("game-btn");
var music_button = document.getElementById("music-btn");

var note_worthy_button = document.getElementById("note-worthy-btn");
var popular_btn = document.getElementById("popular-btn");

window.onload = function load(){
    var btn = document.getElementById("design-btn");
    var tab = document.getElementById("design-tech");

    btn.style.borderBottom = '0.5px solid black';
    note_worthy_button.style.borderBottom = '0.5px solid black';
    btn.style.color = 'black';
    tab.style.display = 'block';
};

function changeTab(tabName, btn) {
    var x = document.getElementsByClassName("tab");
    var y = document.getElementsByClassName("button");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
        y[i].style.color = 'gray';
        y[i].style.borderBottom = 'none';
    }
    note_worthy_button.style.borderBottom = '0.5px solid black';
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(btn).style.color = 'black';
    document.getElementById(btn).style.borderBottom = '0.5px solid black';
}

function toggleSearch() {
    var search_bar = document.getElementById('search');
    var nav_bar = document.getElementById('nav-bar');
    nav_bar.style.display = 'none';
    search_bar.style.display = 'block';
}

design_button.addEventListener("click", () => {
   document.getElementById("subject").innerHTML = "Design and Technology";
});

art_button.addEventListener("click", () => {
    document.getElementById("subject").innerHTML = "Arts";
});

music_button.addEventListener("click", () => {
    document.getElementById("subject").innerHTML = "Music";
});

game_button.addEventListener("click", () => {
    document.getElementById("subject").innerHTML = "Games";
});

note_worthy_button.addEventListener("click", () =>{
    note_worthy_button.style.borderBottom = '0.5px solid black';
    popular_btn.style.borderBottom = 'none';

});

popular_btn.addEventListener("click", () =>{
    popular_btn.style.borderBottom = '0.5px solid black';
    note_worthy_button.style.borderBottom = 'none';
});