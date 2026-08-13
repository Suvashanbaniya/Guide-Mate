/* Profile Image Navigation */

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", function () {
    window.location.href = "profile.html";
});








//-------- Select the contact form --------
const contactForm = document.getElementById("contactForm");


//-------- Form Submit Event --------
contactForm.addEventListener("submit", function (event) {

    //-------- Prevent the page from refreshing --------
    event.preventDefault();


    //-------- Get Form Values --------
    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();


    //-------- Check Required Fields --------
    if (fullName === "" || email === "" || message === "") {

        showMessage(
            "Please fill in all required fields.",
            "error"
        );

        return;
    }


    //-------- Check Email Format --------
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        showMessage(
            "Please enter a valid email address.",
            "error"
        );

        return;
    }


    //-------- Show Success Message --------
    showMessage(
        "Message sent successfully! We will get back to you soon.",
        "success"
    );


    //-------- Clear the Form --------
    contactForm.reset();

});


//-------- Function to Show Notification --------
function showMessage(text, type) {

    //-------- Check if a previous notification exists --------
    const oldMessage =
        document.querySelector(".contact-notification");

    if (oldMessage) {
        oldMessage.remove();
    }


    //-------- Create notification element --------
    const notification =
        document.createElement("div");

    notification.className =
        "contact-notification " + type;


    //-------- Add icon according to message type --------
    if (type === "success") {

        notification.innerHTML =
            `<i class="fa-solid fa-circle-check"></i>
             <span>${text}</span>`;

    } else {

        notification.innerHTML =
            `<i class="fa-solid fa-circle-exclamation"></i>
             <span>${text}</span>`;

    }


    //-------- Add notification to the page --------
    document.body.appendChild(notification);


    //-------- Show notification --------
    setTimeout(function () {

        notification.classList.add("show");

    }, 100);


    //-------- Automatically hide notification --------
    setTimeout(function () {

        notification.classList.remove("show");

        setTimeout(function () {

            notification.remove();

        }, 400);

    }, 3500);

}