var menuList = document.getElementById("menuList");
var rows = document.getElementById("row1");
rows.style.marginTop = "0px";
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
        document.getElementById("row1").style.marginTop = "100px";
    }
    else {
        menuList.style.maxHeight = "0px";
        rows.style.marginTop = "0px";

    }
}
