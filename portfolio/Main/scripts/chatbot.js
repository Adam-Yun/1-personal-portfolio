// script.js
// To include chatbot html
document.addEventListener("DOMContentLoaded", function () {
  fetch("chatbot.html")
    .then(response => response.text())
    .then(html => {
      // This must be at top to load the chatbotSection HTML
      document.getElementById("chatbotSection").innerHTML = html;

      // Prevents the Enter key from opening the chatbot
      document.getElementById("chatbotButton").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });

      // Logic to send text to the chat
      const chatbotButton = document.getElementById('chatbotButton');
      if (chatbotButton.value === 'true') {
        const text = document.getElementById('text');
        text.addEventListener("keydown",function(event){
          if (event.key === "Enter"){
            event.preventDefault(); 
            sendMessage()
          }
        })
      } else if (chatbotButton.value === 'false') {
        console.log('Chatbox is close!')
      } else {
        console.log('error');
      }



    })
    .catch(error => {
      console.error("Error fetching project page:", error);
    });
});

// Logic to open the chatbot and starts a conversation
function checkIconClicked() {
  const chatbotButton = document.getElementById('chatbotButton');
  const chatbotChatBox = document.getElementById('chatbotChatBox');
  
  if (chatbotButton.value === 'true') {
      chatbotButton.value = 'false';
      chatbotChatBox.classList.add('chatbot-chat-box-active');
  } else if (chatbotButton.value === 'false') {
      chatbotButton.value = 'true';
      chatbotChatBox.classList.remove('chatbot-chat-box-active');
  } else {
      console.log('error');
  }
}

// function to send the user message to the chat
function sendMessage(button){
  // Create the new message
  const message = document.getElementById('text');
  const chatBox = document.getElementById('chatBox');
  const userChat = document.createElement('p')
  userChat.setAttribute('class','user-chat')
  userChat.textContent = message.value;

  // Add the new message
  chatBox.appendChild(userChat)

  // Dynamic scroll for new message
  const container = document.getElementById('chat-box');
  chatBox.scrollTop = chatBox.scrollHeight;

  
}


