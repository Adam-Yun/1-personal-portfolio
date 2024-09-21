// script.js
// To include chatbot html
document.addEventListener("DOMContentLoaded", function () {
      fetch("chatbot.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("chatbotSection").innerHTML = html;
        })
        .catch(error => {
          console.error("Error fetching project page:", error);
        });
});

function checkIconClicked() {
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotChatBox = document.getElementById('chatbotChatBox');
    
    if (chatbotButton.value === 'true') {
        console.log('true');
        chatbotButton.value = 'false';
        // chatbotChatBox.style.display = 'flex';
        chatbotChatBox.classList.add('chatbot-chat-box-active');
    } else if (chatbotButton.value === 'false') {
        console.log('false');
        chatbotButton.value = 'true';

        // chatbotChatBox.style.display = 'none';
        chatbotChatBox.classList.remove('chatbot-chat-box-active');
    } else {
        console.log('error');
    }
}


