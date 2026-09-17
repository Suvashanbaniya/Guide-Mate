

// -------- Load Tourists --------

function loadTourists() {

    fetch("AdminDataServlet?type=tourists")

        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load tourists.");
            }

            return response.text();
        })

        .then(function (data) {

            document.getElementById("userTableBody").innerHTML = data;

        })

        .catch(function (error) {

            console.error("Tourist loading error:", error);

        });
}


// -------- Load Guides --------

function loadGuides() {

    fetch("AdminDataServlet?type=guides")

        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load guides.");
            }

            return response.text();
        })

        .then(function (data) {

            document.getElementById("guideTableBody").innerHTML = data;

        })

        .catch(function (error) {

            console.error("Guide loading error:", error);

        });
}


// -------- Load Dashboard Data --------

function loadAdminData() {

    loadTourists();

    loadGuides();
}


// -------- Switch Admin Sections --------

function switchSection(section, button) {

    // Get all management sections.
    const sections =
        document.querySelectorAll(".management-section");

    // Hide every section.
    sections.forEach(function (item) {

        item.style.display = "none";

    });


    // Remove active class from all tabs.
    document.querySelectorAll(".tab-btn")
        .forEach(function (item) {

            item.classList.remove("active");

        });


    // Show the selected section.
    if (section === "tourists") {

        document.getElementById("touristsSection")
            .style.display = "block";

    }

    else if (section === "guides") {

        document.getElementById("guidesSection")
            .style.display = "block";

    }

    else if (section === "activity") {

        document.getElementById("activitySection")
            .style.display = "block";

    }


    // Make the clicked button active.
    button.classList.add("active");
}


// -------- Start Admin Page --------

document.addEventListener("DOMContentLoaded", function () {

    // Load tourists and guides when the page opens.
    loadAdminData();

});