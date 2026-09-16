const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    window.location.href = "LogoutServlet";

});


// Load the currently logged-in user's profile
fetch("ProfileServlet")
    .then(response => {

        if (!response.ok) {
            throw new Error("User is not logged in");
        }

        return response.json();
    })
    .then(user => {

        // Display user's name in the profile card
        document.getElementById("profileName").textContent = user.name;

        // Display user's name in the form
        document.getElementById("profileFullName").value = user.name;

        // Display user's email in the form
        document.getElementById("profileEmail").value = user.email;
    })
    .catch(error => {

        console.error("Profile loading error:", error);

    });