/* Profile Image Navigation */

const profilePic = document.getElementById("profilePic");

if (profilePic) {
    profilePic.addEventListener("click", function () {
        window.location.href = "profile.html";
    });
}


/* -- Payment Method Selection -- */

const methodButtons = document.querySelectorAll(".payment-methods .method");
const cardSection = document.querySelector(".card-section");

methodButtons.forEach(button => {
    button.addEventListener("click", function () {
        methodButtons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        const method = button.dataset.method;
        if (cardSection) {
            if (method === "debit" || method === "credit") {
                cardSection.style.display = "block";
            } else {
                cardSection.style.display = "none";
            }
        }
    });
});


/* -- Clear Error Borders on Input -- */

document.querySelectorAll(".payment-left input, .payment-left select").forEach(field => {
    const clearError = () => {
        if (field.value.trim() !== "") {  /* get value what user have entered */
            field.style.borderColor = ""; /* remove red color */
        }
    };
    field.addEventListener("input", clearError);
    field.addEventListener("change", clearError);/* card selection  */
});


/* -- Pay Now Button & Form Validation -- */

const payButton = document.querySelector(".pay-btn");

if (payButton) {
    payButton.addEventListener("click", function () {

        // Collect all required payer form fields
        const requiredPayerFields = Array.from(
            document.querySelectorAll(".payer-form input[required], .payer-form select[required]")
        );

        let fieldsToValidate = [...requiredPayerFields];

        // Determine active payment method
        const activeMethodBtn = document.querySelector(".payment-methods .method.active");
        const activeMethod = activeMethodBtn ? activeMethodBtn.dataset.method : "debit";

        // Include card details if card payment method is active
        if (activeMethod === "debit" || activeMethod === "credit") {
            const cardFields = document.querySelectorAll(".card-section input");/* this show the debit credit form fill */
            cardFields.forEach(f => fieldsToValidate.push(f)); /* represent current card field */
        }

        let valid = true;
        let firstInvalidField = null;

        fieldsToValidate.forEach(function (field) {
            if (!field.value || field.value.trim() === "") {
                field.style.borderColor = "#ef4444";
                valid = false;
                if (!firstInvalidField) {
                    firstInvalidField = field;
                }
            } else {
                field.style.borderColor = "";
            }
        });

        if (!valid) {
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
            alert("Please fill in all required information.");
            return;
        }

        showConfirmation();

    });
}


/* -- Confirmation Popup -- */

function showConfirmation() {

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
        .addEventListener("click", function () {

            popup.remove();

        });


    /* -- Confirm -- */

    popup.querySelector(".confirm-btn")
        .addEventListener("click", function () {

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
                .addEventListener("click", function () {

                    popup.remove();

                });

        });

}
