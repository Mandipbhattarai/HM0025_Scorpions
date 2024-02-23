function openCustomModal() {
    var modal = document.getElementById("customModal");
    var iframe = document.getElementById("customChatbotFrame");
    iframe.src =
        "https://console.dialogflow.com/api-client/demo/embedded/d4605ddd-bea3-4c4d-8bf9-5861202a7c1e";
    modal.style.display = "block";
}

function closeCustomModal() {
    var modal = document.getElementById("customModal");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("customModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message-container");

    if (sender === "User") {
        messageElement.innerHTML = `
        <div class="user-message">
            <strong>${sender}:</strong>
            <p>${message}</p>
        </div>
    `;
    } else {
        messageElement.innerHTML = `
        <div class="server-message">
            <strong>${sender}:</strong>
            <p>${message}</p>
        </div>
    `;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}
