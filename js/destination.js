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




















/* Destination Details */

const detailsModal = document.getElementById("detailsModal");

const closeDetails = document.getElementById("closeDetails");

const viewDetailsButtons = document.querySelectorAll(".view-details-btn");

const detailsImage = document.getElementById("detailsImage");

const detailsTitle = document.getElementById("detailsTitle");

const detailsDescription = document.getElementById("detailsDescription");

const detailsGuides = document.getElementById("detailsGuides");

const detailsRating = document.getElementById("detailsRating");

const detailsPrice = document.getElementById("detailsPrice");

const detailsAbout = document.getElementById("detailsAbout");


/* Destination Information */

const destinationDetails = {

    mustang: {

        title: "Mustang, Nepal",

        image: "dimg/mustang.jpg",

        description: "Explore the beautiful landscapes and unique culture of Mustang.",

        guides: "32 Guides",

        rating: "⭐ 4.8",

        price: "From $45/day",

        about: "Mustang is known for its beautiful mountain landscapes, traditional villages and unique Himalayan culture. It is a wonderful destination for travelers who enjoy trekking, nature and cultural experiences."

    },


    limi: {

        title: "Limi Valley, Nepal",

        image: "dimg/limi.jpg",

        description: "A remote Himalayan valley with untouched natural beauty.",

        guides: "18 Guides",

        rating: "⭐ 4.7",

        price: "From $50/day",

        about: "Limi Valley offers peaceful landscapes, traditional villages and beautiful mountain views. It is suitable for travelers looking for a quiet and less crowded Himalayan experience."

    },


    manaslu: {

        title: "Manaslu, Nepal",

        image: "dimg/manaslu.jpg",

        description: "Snowy mountains with breathtaking hiking routes.",

        guides: "24 Guides",

        rating: "⭐ 4.9",

        price: "From $55/day",

        about: "The Manaslu region is famous for its mountain scenery and trekking routes. Travelers can experience beautiful landscapes, traditional communities and spectacular Himalayan views."

    },


    gokyo: {

        title: "Gokyo, Nepal",

        image: "dimg/gokyo.jpg",

        description: "The stunning view of the mountains.",

        guides: "52 Guides",

        rating: "⭐ 5.0",

        price: "From $60/day",

        about: "Gokyo is known for its beautiful mountain scenery and peaceful Himalayan environment. The destination provides spectacular views and memorable trekking experiences."

    },


    pokhara: {

        title: "Pokhara, Nepal",

        image: "dimg/garden.jpg",

        description: "A beautiful city surrounded by mountains and lakes.",

        guides: "60 Guides",

        rating: "⭐ 4.9",

        price: "From $40/day",

        about: "Pokhara is a beautiful destination surrounded by mountains, lakes and natural landscapes. It is a popular place for relaxation, sightseeing, adventure activities and exploring the surrounding areas."

    }

};


/* Open Destination Details */

viewDetailsButtons.forEach(function(button){

    button.addEventListener("click", function(event){

        event.stopPropagation();

         const {destination} = button.dataset;

        const details = destinationDetails[destination];

        detailsImage.src = details.image;

        detailsImage.alt = details.title;

        detailsTitle.textContent = details.title;

        detailsDescription.textContent = details.description;

        detailsGuides.textContent = details.guides;

        detailsRating.textContent = details.rating;

        detailsPrice.textContent = details.price;

        detailsAbout.textContent = details.about;

        detailsModal.style.display = "flex";

    });

});


/* Close Destination Details */

closeDetails.addEventListener("click", function(){

    detailsModal.style.display = "none";

});


/* Close Popup When Clicking Outside */

detailsModal.addEventListener("click", function(event){

    if(event.target === detailsModal){

        detailsModal.style.display = "none";

    }

});