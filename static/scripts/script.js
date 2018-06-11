window.onload = function load(){
    var btn = document.getElementById("design-btn");
    var tab = document.getElementById("design-tech");

    btn.style.borderBottom = '0.5px solid black';
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