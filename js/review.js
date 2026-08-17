document.getElementById("profilePic").addEventListener("click", function () {
    window.location.href = "profile.html";
});

/* Get the textarea from the HTML */
const reviewText = document.getElementById("reviewText");

/* Get the Post Review button */
const postButton = document.getElementById("postReview");

/* Listen for a click on the button */
postButton.addEventListener("click", function () {

    /* Read the text entered by the user */
    const review = reviewText.value;

    /* Remove extra spaces from the beginning and end */
    const trimmedReview = review.trim();

    /* Check if the review is empty */
    if (trimmedReview === "") {

        /* Show an error message */
        alert("Please write your review before submitting.");

    }

    else {

        /* Show a success message */
        alert("Review submitted successfully!");

        /* Clear the textarea */
        reviewText.value = "";

    }

});










/* this is for the star rating in the review */
/* Get all the star icons from the review form */
const stars = document.querySelectorAll(".form-stars i");

/* Store the rating selected by the user */
let selectedRating = 0;

/* Go through each star */
stars.forEach(function(star, index) {

    /* Add a click event to each star */
    star.addEventListener("click", function() {

        /* Store the selected star number */
        selectedRating = index + 1;

        /* Change the stars based on the selected rating */
        stars.forEach(function(item, starIndex) {

            /* Check if this star is selected */
            if (starIndex < selectedRating) {

                /* Change the empty star into a filled star */
                item.classList.remove("fa-regular");
                item.classList.add("fa-solid");

            }

            else {

                /* Change the filled star back into an empty star */
                item.classList.remove("fa-solid");
                item.classList.add("fa-regular");

            }

        });

        /* Show the selected rating in the browser console */
        console.log("Selected Rating:", selectedRating);

    });

});




/* Get the Load More button */
const loadMoreBtn = document.getElementById("loadMoreBtn");

/* Get all reviews that have the hidden-review class */
const hiddenReviews = document.querySelectorAll(".hidden-review");

/* Add a click event to the Load More button */
loadMoreBtn.addEventListener("click", function(){

    /* Go through every hidden review */
    hiddenReviews.forEach(function(review){

        /* Remove the hidden class */
        review.classList.remove("hidden-review");

    });

    /* Change the button text */
    loadMoreBtn.innerHTML = "All Reviews Loaded";

    /* Disable the button */
    loadMoreBtn.disabled = true;

});