/* Profile Image */

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", () => {
    window.location.href = "profile.html";
});


/* Search Destination */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {



    // this part shows the card that is searched
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".destination-card");

    cards.forEach(card => {

        const name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


/* Sagarmatha Description */

document.getElementById("sagarmathaCard").addEventListener("click", () => {

    alert(
        "Sagarmatha, Nepal\n\n" +
        "Sagarmatha National Park is famous for its beautiful " +
        "mountain scenery, trekking routes and spectacular views " +
        "of Mount Everest."
    );

});


/* Aama Dablam Description */

document.getElementById("aamaDablamCard").addEventListener("click", () => {

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

loadMoreBtn.addEventListener("click", () => {

    pokharaCard.style.display = "block";
    loadMoreBtn.style.display = "none";

});


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


/* Destination Details */

const modal = document.getElementById("detailsModal");
const closeBtn = document.getElementById("closeDetails");

const image = document.getElementById("detailsImage");
const title = document.getElementById("detailsTitle");
const description = document.getElementById("detailsDescription");
const guides = document.getElementById("detailsGuides");
const rating = document.getElementById("detailsRating");
const price = document.getElementById("detailsPrice");
const about = document.getElementById("detailsAbout");

const detailButtons = document.querySelectorAll(".view-details-btn");


/* Open Details */

detailButtons.forEach(button => {

    button.addEventListener("click", event => {

        event.stopPropagation();

        const destination = button.dataset.destination;
        const details = destinationDetails[destination];

        image.src = details.image;
        image.alt = details.title;

        title.textContent = details.title;
        description.textContent = details.description;
        guides.textContent = details.guides;
        rating.textContent = details.rating;
        price.textContent = details.price;
        about.textContent = details.about;

        modal.style.display = "flex";

    });

});


/* Close Details */

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


/* Close Details When Clicking Outside */

modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.style.display = "none";
    }

});


/* Newsletter Subscribe */

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", event => {

    event.preventDefault();

    alert("Successfully subscribed!");

    newsletterForm.reset();

});