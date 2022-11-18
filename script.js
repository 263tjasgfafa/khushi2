const seaCont = document.getElementById("top-search");
const serHide = document.getElementById("topsercross-icon");
const serShow = document.getElementById("ser-btn-icon");

serShow.addEventListener("click", ()=>{
    seaCont.style.padding="5px 5%";
    seaCont.style.height="50px";
    seaCont.style.transition="all 0.5s";
})
serHide.addEventListener("click", ()=>{
    seaCont.style.height="0";
    seaCont.style.padding="0 5%";
})

//---------navbar------------//
const barbtn = document.getElementById("bar-icon");
const dropdown = document.getElementById("menu");

barbtn.addEventListener("click", ()=>{
    dropdown.classList.toggle("show")
})
//-----------submenu--------------//



//-------------------slider-----------------//
