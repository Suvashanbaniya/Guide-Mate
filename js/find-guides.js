


// search guide code 





// Find the search input
const searchInput = document.getElementById("searchInput");

// Find all guide cards
const guideCards = document.querySelectorAll(".guide-card");

// Whenever the user types...
searchInput.addEventListener("keyup", function () {

    // Get the typed text and convert it to lowercase
    const searchValue = searchInput.value.toLowerCase();

    // Check every guide card
    guideCards.forEach(function(card){

        // Read the guide name
        const guideName = card.dataset.name.toLowerCase();

        // If the guide name contains the search text
        if(guideName.includes(searchValue)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});