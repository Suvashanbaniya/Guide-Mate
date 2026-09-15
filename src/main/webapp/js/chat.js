// Select Elements

const chatCards = document.querySelectorAll(".chat-card");
const messages = document.querySelector(".messages");
const input = document.querySelector(".message-input input");
const sendBtn = document.querySelector(".send-btn");
const guideName = document.querySelector(".guide-details h3");
const guideImage = document.querySelector(".guide-details img");


// Store Conversations

const conversations = {

    Prachanda: [
        {
            type: "guide",
            text: "Hello! I've reviewed your request for the 12-day trek. Since it's peak season, my daily rate is slightly higher, but I can include specialized oxygen equipment.",
            time: "10:30 AM"
        },
        {
            type: "guide",
            text: "That sounds like a great plan for the Everest Base Camp trek!",
            time: "10:45 AM"
        },
        {
            type: "user",
            text: "That's slightly above my budget. Would you be open to $750?",
            time: "10:40 AM"
        }
    ],

    "Narendra Modi": [
        {
            type: "guide",
            text: "Namaste! It is a pleasure to connect with you.",
            time: "09:15 AM"
        },
        {
            type: "guide",
            text: "This is the best thing I like about Nepal. I look forward to guiding your tour to Muktinath and Janakpur!",
            time: "09:30 AM"
        },
        {
            type: "user",
            text: "Namaste! Thank you, looking forward to the sacred cultural tour.",
            time: "09:32 AM"
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

    "Ram Bahadur": [
        {
            type: "guide",
            text: "Namaste! I am Ram Bahadur, a 70-year-old veteran mountain guide with over 45 years of experience in the Himalayas.",
            time: "08:15 AM"
        },
        {
            type: "guide",
            text: "I take pride in safe, slow, and memorable treks with rich historical stories along the trail.",
            time: "08:25 AM"
        },
        {
            type: "user",
            text: "Namaste Uncle! I would love to book an Annapurna trek with you.",
            time: "08:28 AM"
        }
    ],

    Charlie: [
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

function loadMessages(name) {

    messages.innerHTML = ""; //  when we switch to another chat is remove previous section 

    conversations[name].forEach(message => {

        const div = document.createElement("div");

        div.className = `message ${
            message.type === "user"
            ? "tourist-message"
            : "guide-message"
        }`;

        div.innerHTML = `         
            <div class="bubble">
                <p>${message.text}</p>
            </div>

            <span class="time">
                ${message.time}
                ${message.type === "user"
                    ? '<i class="fa-solid fa-circle-check"></i>' // veriffy 
                    : ""  // if the message is empty not tick
                }
            </span>
        `;

        messages.appendChild(div);

    });

    messages.scrollTop = messages.scrollHeight;// auto scroll chat to the down
}


// Select Person

chatCards.forEach(card => {

    card.addEventListener("click", () => {

        chatCards.forEach(item => item.classList.remove("active"));// show only active card chat 

        card.classList.add("active");

        const name = card.dataset.name;  // element in html name data-name 

        guideName.textContent = name;
        guideImage.src = card.dataset.image;

        loadMessages(name);

    });

});


// Send Message

function sendMessage() {

    const text = input.value.trim();

    if (!text) return;// check messsage is empty 

    const person = document.querySelector(".chat-card.active").dataset.name;

    conversations[person].push({
        type: "user",
        text: text,
        time: "Just now"
    });

    input.value = "";

    loadMessages(person);

    autoReply(person);

}


// Send Button

sendBtn.addEventListener("click", sendMessage);


// Press Enter

input.addEventListener("keypress", event => {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Auto Reply

function autoReply(person) {

    setTimeout(() => {

        conversations[person].push({
            type: "guide",
            text: "Thanks for your message! I'll get back to you shortly.",
            time: "Just now"
        });

        const activePerson =
            document.querySelector(".chat-card.active").dataset.name;

        if (activePerson === person) {
            loadMessages(person);
        }

    }, 1500);

}


// Load First Conversation

loadMessages("Prachanda");