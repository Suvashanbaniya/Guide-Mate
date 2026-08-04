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