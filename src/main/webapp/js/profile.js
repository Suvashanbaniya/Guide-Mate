// -------- Logout --------

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        window.location.href = "LogoutServlet";
    });
}


// -------- Load Logged-in User Profile --------

fetch("ProfileServlet")
    .then(response => {

        if (!response.ok) {
            throw new Error("User is not logged in");
        }

        return response.json();
    })
    .then(user => {

        // Profile card name
        const profileName = document.getElementById("profileName");

        if (profileName) {
            profileName.textContent = user.name;
        }

        // Full name
        const profileFullName =
            document.getElementById("profileFullName");

        if (profileFullName) {
            profileFullName.value = user.name;
        }

        // Email
        const profileEmail =
            document.getElementById("profileEmail");

        if (profileEmail) {
            profileEmail.value = user.email;
        }
    })
    .catch(error => {

        console.error("Profile loading error:", error);

    });


// -------- Profile / Change Password Navigation --------

const changePasswordBtn =
    document.getElementById("changePasswordBtn");

const changePasswordSection =
    document.getElementById("changePasswordSection");


// All sections inside profile-content
const profileSections =
    document.querySelectorAll(".profile-content > .section");


// Change Password button
if (changePasswordBtn && changePasswordSection) {

    changePasswordBtn.addEventListener("click", function () {

        // Remove active from all sidebar buttons
        document.querySelectorAll(".menu-item").forEach(function (item) {
            item.classList.remove("active");
        });

        // Make Change Password active
        changePasswordBtn.classList.add("active");

        // Hide all sections
        profileSections.forEach(function (section) {
            section.style.display = "none";
        });

        // Show Change Password
        changePasswordSection.style.display = "block";
    });
}

// -------- Edit Profile Button --------

const editProfileBtn =
    document.getElementById("editProfileBtn");

const profileInformationSection =
    document.getElementById("profileInformationSection");

if (editProfileBtn && profileInformationSection) {

    editProfileBtn.addEventListener("click", function () {

        // Remove active from all sidebar buttons
        document.querySelectorAll(".menu-item").forEach(function (item) {
            item.classList.remove("active");
        });

        // Make Edit Profile active
        editProfileBtn.classList.add("active");

        // Hide all profile sections
        profileSections.forEach(function (section) {
            section.style.display = "none";
        });

        // Show Profile Information
        profileInformationSection.style.display = "block";
    });
}



