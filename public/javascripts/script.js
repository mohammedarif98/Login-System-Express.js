

const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");

// show popup form
showPopupBtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-popup")
});

// hide popup form
hidePopupBtn.addEventListener("click",()=>showPopupBtn.click());

