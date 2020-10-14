var navbar = document.getElementById("sticking");
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const cancelBtnSearch = document.querySelector(".cancel-icon-search");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    /* searchBtn.classList.add("hide"); */
    cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    /* searchBtn.classList.remove("hide"); */
    /* cancelBtn.classList.remove("show"); */

    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
};
cancelBtnSearch.onclick = () => {
    form.classList.remove("active");
    searchBtn.classList.remove("hide");
    cancelBtnSearch.classList.remove("show");
    cancelBtnSearch.style.color = "#171c24";
};
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtnSearch.classList.add("show");
    cancelBtnSearch.style.color = "#ff3d00";
};

/* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
function navbardropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
};

/* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
function categoriesdropdown() {
    document.getElementById("categoriesDropdown").classList.toggle("show");
}
/* 
// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};
 */
