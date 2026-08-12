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


/* Sagarmatha Description */

const sagarmathaCard = document.getElementById("sagarmathaCard");

sagarmathaCard.addEventListener("click", function(){

    alert(
        "Sagarmatha, Nepal\n\n" +
        "Sagarmatha National Park is famous for its " +
        "beautiful mountain scenery, trekking routes and " +
        "spectacular views of Mount Everest."
    );

});




/* Aama Dablam Description */

const aamaDablamCard = document.getElementById("aamaDablamCard");

aamaDablamCard.addEventListener("click", function(){

    alert(
        "Aama Dablam, Nepal\n\n" +
        "Aama Dablam is one of the most beautiful mountains " +
        "in Nepal. It is famous for its unique shape and " +
        "magnificent Himalayan scenery."
    );

});



/* Load More Destinations */

const loadMoreBtn = document.getElementById("loadMoreBtn");
const pokharaCard = document.getElementById("pokharaCard");

loadMoreBtn.addEventListener("click", function(){

    pokharaCard.style.display = "block";

    loadMoreBtn.style.display = "none";

});
