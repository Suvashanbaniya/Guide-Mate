// Select Elements
// These variables connect JavaScript with the HTML elements we need.

const chatCards = document.querySelectorAll(".chat-card");

const messages = document.querySelector(".messages");

const input = document.querySelector(".message-input input");

const sendBtn = document.querySelector(".send-btn");

const guideName = document.querySelector(".guide-details h3");

const guideImage = document.querySelector(".guide-details img");



// Store Conversations
// This object stores separate messages for each person.
// Since this is a frontend-only project, the messages are stored temporarily in JavaScript.

const conversations = {

    "Prachanda": [

        {
            type: "guide",
            text: "Hello! I've reviewed your request for the 12-day trek. Since it's peak season, my daily rate is slightly higher, but I can include specialized oxygen equipment.",
            time: "10:30 AM"
        },

        {
            type: "guide",
            text: "That sounds like a great plan for the Everest Base Camp trek! I can definitely adjust the price for you.",
            time: "10:45 AM"
        },

        {
            type: "user",
            text: "That's slightly above my budget. Would you be open to $750?",
            time: "10:40 AM"
        }

    ],


    "Donald Trump": [

        {
            type: "guide",
            text: "Hello! I received your booking request.",
            time: "Yesterday"
        },

        {
            type: "guide",
            text: "I can offer the trip for $450.",
            time: "Yesterday"
        }

    ],


    "Charlie": [

        {
            type: "guide",
            text: "Thanks for the booking!",
            time: "Oct 12"
        },

        {
            type: "guide",
            text: "See you soon. Let me know if you have any questions.",
            time: "Oct 12"
        }

    ]

};



// Load Messages
// This function removes the current messages and displays the messages
// belonging to the person selected from the conversation list.

function loadMessages(name) {

    messages.innerHTML = "";

    const conversation = conversations[name] || [];


    conversation.forEach(message => {

        const messageElement = document.createElement("div");


        // Check whether the message belongs to the user or the guide.

        if(message.type === "user") {

            messageElement.className = "message tourist-message";

        } else {

            messageElement.className = "message guide-message";

        }


        // Create the message bubble and time.

        messageElement.innerHTML = `

            <div class="bubble">

                <p>${message.text}</p>

            </div>

            <span class="time">

                ${message.time}

                ${message.type === "user"
                    ? '<i class="fa-solid fa-circle-check"></i>'
                    : ''
                }

            </span>

        `;


        messages.appendChild(messageElement);

    });


    // Automatically scroll to the newest message.

    messages.scrollTop = messages.scrollHeight;

}



// Select Person
// This section allows the user to click Prachanda, Donald Trump, or Charlie.
// The selected person becomes active and their conversation is loaded.

chatCards.forEach(card => {

    card.addEventListener("click", () => {


        // Remove the active class from all conversations.

        chatCards.forEach(item => {

            item.classList.remove("active");

        });


        // Add the active class to the selected conversation.

        card.classList.add("active");


        // Get the selected person's name and image from the HTML.

        const name = card.dataset.name;

        const image = card.dataset.image;


        // Change the person's name in the chat header.

        guideName.textContent = name;


        // Change the person's profile image in the chat header.

        guideImage.src = image;


        // Load the selected person's messages.

        loadMessages(name);

    });

});



// Send Message
// This function allows the user to send a new message.

function sendMessage() {


    // Get the text from the input field and remove unnecessary spaces.

    const text = input.value.trim();


    // Stop the function if the input is empty.

    if(text === "") {

        return;

    }


    // Find the currently selected person.

    const activeCard = document.querySelector(".chat-card.active");


    // Get the name of the selected person.

    const selectedPerson = activeCard.dataset.name;


    // Create a conversation if one does not already exist.

    if(!conversations[selectedPerson]) {

        conversations[selectedPerson] = [];

    }


    // Add the new message to the selected person's conversation.

    conversations[selectedPerson].push({

        type: "user",

        text: text,

        time: "Just now"

    });


    // Display the updated conversation.

    loadMessages(selectedPerson);


    // Clear the input box after sending.

    input.value = "";


    // Send an automatic reply from the selected person.

    autoReply(selectedPerson);

}



// Send Button
// This allows the user to send a message by clicking the Send button.

sendBtn.addEventListener("click", sendMessage);



// Press Enter
// This allows the user to send a message by pressing the Enter key.

input.addEventListener("keypress", function(event) {

    if(event.key === "Enter") {

        sendMessage();

    }

});



// Auto Scroll
// This automatically moves the chat window to the latest message
// when the page is loaded.

window.addEventListener("load", () => {

    messages.scrollTop = messages.scrollHeight;

});



// Auto Reply
// This creates a simple automatic reply from the selected person.
// The reply appears after 1.5 seconds.

function autoReply(selectedPerson) {

    setTimeout(() => {


        // Add the automatic reply to the selected person's conversation.

        conversations[selectedPerson].push({

            type: "guide",

            text: "Thanks for your message! I'll get back to you shortly.",

            time: "Just now"

        });


        // Check which person is currently selected.

        const activeCard = document.querySelector(".chat-card.active");

        const currentPerson = activeCard.dataset.name;


        // Only reload the messages if the user is still chatting
        // with the same person.

        if(currentPerson === selectedPerson) {

            loadMessages(selectedPerson);

        }

    }, 1500);

}