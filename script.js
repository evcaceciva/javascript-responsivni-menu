const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
    if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-square-xmark")
    hamburgerIcon.classList.remove("fa-bars")
    menuList.style.maxHeight = menuList.scrollHeight + "px";
    } else {
    hamburgerIcon.classList.add("fa-bars")
    hamburgerIcon.classList.remove("fa-square-xmark")
    menuList.style.maxHeight = null;
    }
    })