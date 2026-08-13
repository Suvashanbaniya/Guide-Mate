/* Search Guide -------------------------------------------*/

const searchInput = document.getElementById("searchInput");
const guideCards = document.querySelectorAll(".guide-card");


/* Destination Filter -------------------------------------------*/

const destinationFilter =
    document.getElementById("destinationFilter");


/* Rating Filter -------------------------------------------*/

const ratingFilter =
    document.getElementById("ratingFilter");


/* Price Filter -------------------------------------------*/

const priceRange =
    document.getElementById("priceRange");

const priceValue =
    document.getElementById("priceValue");


/* Clear Button -------------------------------------------*/

const clearBtn =
    document.querySelector(".clear-btn");


/* Filter Guides -------------------------------------------*/

function filterGuides(){

    const search =
        searchInput.value.toLowerCase();

    const destination =
        destinationFilter.value.toLowerCase();

    const rating =
        Number(ratingFilter.value);

    const maxPrice =
        Number(priceRange.value);


    guideCards.forEach(function(card){

        /* Get Guide Name -------------------------------------------*/

        const name =
            card.querySelector("h3")
            .textContent
            .toLowerCase();


        /* Get Guide Location -------------------------------------------*/

        const location =
            card.querySelector(".location")
            .textContent
            .toLowerCase();


        /* Get Guide Rating -------------------------------------------*/

        const cardRating =
            parseFloat(
                card.querySelector(".rating")
                .textContent
                .match(/[\d.]+/)[0]
            );


        /* Get Guide Price -------------------------------------------*/

        const price =
            parseFloat(
                card.querySelector(".guide-top span")
                .textContent
                .replace(/[^0-9.]/g, "")
            );


        /* Check Search -------------------------------------------*/

        const searchMatch =
            name.includes(search) ||
            location.includes(search);


        /* Check Destination -------------------------------------------*/

        const destinationMatch =
            destination === "all" ||
            location.includes(destination);


        /* Check Rating -------------------------------------------*/

        const ratingMatch =
            cardRating >= rating;


        /* Check Price -------------------------------------------*/

        const priceMatch =
            price <= maxPrice;


        /* Show or Hide Guide -------------------------------------------*/

        if(
            searchMatch &&
            destinationMatch &&
            ratingMatch &&
            priceMatch
        ){

            card.style.display = "";

        }else{

            card.style.display = "none";

        }

    });

}


/* Search Input -------------------------------------------*/

searchInput.addEventListener("input", function(){

    filterGuides();

});


/* Destination Change -------------------------------------------*/

destinationFilter.addEventListener("change", function(){

    filterGuides();

});


/* Rating Change -------------------------------------------*/

ratingFilter.addEventListener("change", function(){

    filterGuides();

});


/* Price Range -------------------------------------------*/

priceRange.addEventListener("input", function(){

    priceValue.textContent =
        "$" + priceRange.value;

    filterGuides();

});


/* Clear All Filters -------------------------------------------*/

clearBtn.addEventListener("click", function(){

    searchInput.value = "";

    destinationFilter.value = "all";

    ratingFilter.value = "0";

    priceRange.value = "200";

    priceValue.textContent = "$200";

    filterGuides();

});


/* Initial Price Display -------------------------------------------*/

priceValue.textContent =
    "$" + priceRange.value;


/* Run Filter When Page Loads -------------------------------------------*/

filterGuides();