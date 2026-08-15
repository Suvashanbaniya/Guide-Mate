/* Profile Image Navigation */

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("click", function () {
    window.location.href = "profile.html";
});







/* -- Pay Now Button -- */

const payButton = document.querySelector(".pay-btn");

payButton.addEventListener("click", function(){

    const inputs = document.querySelectorAll(
        ".payment-form input[required]"
    );

    let valid = true;

    inputs.forEach(function(input){

        if(input.value.trim() === ""){

            input.style.borderColor = "#ef4444";
            valid = false;

        }else{

            input.style.borderColor = "";

        }

    });

    if(!valid){

        alert("Please fill in all required information.");
        return;

    }

    showConfirmation();

});


/* -- Confirmation Popup -- */

function showConfirmation(){

    const popup = document.createElement("div");

    popup.className = "payment-popup";

    popup.innerHTML = `

        <div class="popup-box">

            <i class="fa-solid fa-circle-question"></i>

            <h2>Confirm Payment</h2>

            <p>
                Are you sure you want to pay $192.50?
            </p>

            <div class="popup-buttons">

                <button class="cancel-btn">
                    Cancel
                </button>

                <button class="confirm-btn">
                    Confirm Payment
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(popup);


    /* -- Cancel -- */

    popup.querySelector(".cancel-btn")
        .addEventListener("click", function(){

            popup.remove();

        });


    /* -- Confirm -- */

    popup.querySelector(".confirm-btn")
        .addEventListener("click", function(){

            popup.querySelector(".popup-box").innerHTML = `

                <i class="fa-solid fa-circle-check success"></i>

                <h2>Payment Successful!</h2>

                <p>
                    Your booking has been confirmed.
                </p>

                <button class="done-btn">
                    Done
                </button>

            `;

            popup.querySelector(".done-btn")
                .addEventListener("click", function(){

                    popup.remove();

                });

        });

}