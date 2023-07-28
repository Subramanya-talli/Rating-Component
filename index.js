const sumbitBtnEl = document.querySelector(".submit-btn")
const ratingCard = document.querySelector(".rating-card")
const responceEl = document.querySelector(".responce")
const rateEl = document.getElementById("rate")
const ratingsEl = document.querySelectorAll(".btn")


sumbitBtnEl.addEventListener("click", ()=>{
    ratingCard.style.display = "none";
    responceEl.style.display = "block";
})

ratingsEl.forEach((rate) =>
{
    rate.addEventListener("click", ()=>
    {
        rateEl.innerHTML = rate.innerHTML
    })
})


