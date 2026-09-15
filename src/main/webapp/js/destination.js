/* Profile Image */

const profilePic = document.getElementById("profilePic");

if (profilePic) {
    profilePic.addEventListener("click", () => {
        window.location.href = "profile.html";
    });
}


/* Destination Information */

const destinationDetails = {

    sagarmatha: {
        title: "Sagarmatha, Nepal",
        image: "dimg/sagarmatha.jpg",
        description: "This route is famous for Mountain sighting in Sagarmatha National Park.",
        guides: "140 Guides",
        rating: "⭐ 4.9",
        price: "From $65/day",
        about: "Sagarmatha National Park is famous for its beautiful mountain scenery, trekking routes and spectacular views of Mount Everest."
    },

    aamadablam: {
        title: "Aama Dablam, Nepal",
        image: "dimg/aama-dablam.jpg",
        description: "Magnificent view of Aama Dablam along with stupa.",
        guides: "25 Guides",
        rating: "⭐ 4.8",
        price: "From $50/day",
        about: "Aama Dablam is one of the most beautiful mountains in Nepal. It is famous for its unique shape and magnificent Himalayan scenery."
    },

    kori: {
        title: "Kori, Nepal",
        image: "imgs/kori.jpg",
        description: "Journey through the Mountain, jungle and Landscape.",
        guides: "20 Guides",
        rating: "⭐ 4.7",
        price: "From $45/day",
        about: "Kori trek offers stunning views of the Annapurna range, lush forests, pristine landscapes, and authentic local culture."
    },

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
        title: "Pokhara / Garden, Nepal",
        image: "dimg/garden.jpg",
        description: "A beautiful city surrounded by mountains and lakes.",
        guides: "60 Guides",
        rating: "⭐ 4.9",
        price: "From $40/day",
        about: "Pokhara is a beautiful destination surrounded by mountains, lakes and natural landscapes. It is a popular place for relaxation, sightseeing, adventure activities and exploring the surrounding areas."
    },

    garden: {
        title: "Garden of Dreams, Nepal",
        image: "dimg/garden.jpg",
        description: "This is the best place for a quiet and peaceful time avoiding the chaos.",
        guides: "60 Guides",
        rating: "⭐ 4.9",
        price: "From $40/day",
        about: "Garden of Dreams is a peaceful, historic neo-classical garden located in Nepal. It offers a tranquil escape with beautiful flowers, pavilions, and serene surroundings for relaxation."
    }

};


/* Destination Details Modal Elements */

const modal = document.getElementById("detailsModal");
const closeBtn = document.getElementById("closeDetails");

const image = document.getElementById("detailsImage");
const title = document.getElementById("detailsTitle");
const description = document.getElementById("detailsDescription");
const guides = document.getElementById("detailsGuides");
const rating = document.getElementById("detailsRating");
const price = document.getElementById("detailsPrice");
const about = document.getElementById("detailsAbout");


/* Open Destination Details Function */

function openDetails(destKey) {
    if (!destKey) return;
    const details = destinationDetails[destKey.toLowerCase()];
    if (!details) return;

    image.src = details.image;
    image.alt = details.title;

    title.textContent = details.title;
    description.textContent = details.description;
    guides.textContent = details.guides;
    rating.textContent = details.rating;
    price.textContent = details.price;
    about.textContent = details.about;

    modal.style.display = "flex";
}


/* Attach Click Listeners to All View Details Buttons & Cards */

document.querySelectorAll(".view-details-btn, [data-destination]").forEach(item => {
    item.addEventListener("click", event => {
        event.stopPropagation();
        const destKey = item.dataset.destination || item.closest("[data-destination]")?.dataset.destination;
        if (destKey) {
            openDetails(destKey);
        }
    });
});


/* Close Details */

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}


/* Close Details When Clicking Outside */

if (modal) {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}


/* Load More Destinations */

const loadMoreBtn = document.getElementById("loadMoreBtn");
const gardenCard = document.getElementById("gardenCard") || document.getElementById("pokharaCard");

if (loadMoreBtn && gardenCard) {
    loadMoreBtn.addEventListener("click", () => {
        gardenCard.classList.remove("hidden-card");
        gardenCard.style.display = "block";
        loadMoreBtn.style.display = "none";
    });
}


/* Search Destination */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function performSearch() {
    const searchText = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".destination-card, .large-card, .small-card");

    cards.forEach(card => {
        const titleText = (card.querySelector("h3, h4")?.textContent || "").toLowerCase();
        const descText = (card.querySelector("p")?.textContent || "").toLowerCase();
        const destKey = (card.dataset.destination || "").toLowerCase();

        if (searchText === "") { /* if it is empty */
            // Restore default display
            if ((card.id === "gardenCard" ) && loadMoreBtn && loadMoreBtn.style.display !== "none") {
                card.style.display = "none";
            } else {
                card.style.display = "";
            }
        } else {
            if (titleText.includes(searchText) || descText.includes(searchText) || destKey.includes(searchText)) {  /* shows the  output of the search the contains similar details */
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener("click", performSearch);
}

if (searchInput) {
    searchInput.addEventListener("input", performSearch);/* respond to the user typing */
    searchInput.addEventListener("keypress", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            performSearch();
        }
    });
}


/* Category Filter */

const categoryButtons = document.querySelectorAll(".categories button");  /* choode the category button */

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});


/* Newsletter Subscribe */

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Successfully subscribed!");
        newsletterForm.reset();
    });
}
