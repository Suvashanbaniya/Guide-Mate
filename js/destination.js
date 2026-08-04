/* Profile Image */

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", function () {

    window.location.href = "profile.html";

});


/* Search Destination */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

    const searchValue = searchInput.value.toLowerCase().trim();

    const destinationCards = document.querySelectorAll(".destination-card");

    destinationCards.forEach(function(card){

        const destinationName = card.querySelector("h3").textContent.toLowerCase();

        if(destinationName.includes(searchValue)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});