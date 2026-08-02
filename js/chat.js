// Select Elements

const chatCards = document.querySelectorAll(".chat-card");

const messages = document.querySelector(".messages");

const input = document.querySelector(".message-input input");

const sendBtn = document.querySelector(".send-btn");



// Active Conversation

chatCards.forEach(card => {

    card.addEventListener("click", () => {

        chatCards.forEach(item => {

            item.classList.remove("active");

        });

        card.classList.add("active");

    });

});



// Send Message

function sendMessage(){

    const text = input.value.trim();

    if(text === ""){

        return;

    }

    const message = document.createElement("div");

    message.className = "message tourist-message";

    message.innerHTML = `

        <div class="bubble">

            <p>${text}</p>

        </div>

        <span class="time">

            Just now

            <i class="fa-solid fa-circle-check"></i>

        </span>

    `;

    messages.appendChild(message);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;

}



// Send Button

sendBtn.addEventListener("click", sendMessage);



// Press Enter

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});



// Auto Scroll

window.addEventListener("load", () => {

    messages.scrollTop = messages.scrollHeight;

});




// Auto Reply

function autoReply(){

    setTimeout(() => {

        const reply = document.createElement("div");

        reply.className = "message guide-message";

        reply.innerHTML = `

            <div class="bubble">

                <p>
                    Thanks for your message! I'll get back to you shortly.
                </p>

            </div>

            <span class="time">

                Just now

            </span>

        `;

        messages.appendChild(reply);

        messages.scrollTop = messages.scrollHeight;

    },1500);

}