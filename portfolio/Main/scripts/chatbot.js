// script.js
// To include chatbot html

// Global variable to hold the link to backend
const url = 'https://df25-175-209-149-13.ngrok-free.app';

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
  const message = document.getElementById('text');
  if(message.value == ""){
    console.log("Empty Message")
  }else{

    // Send message to backend for chatbot to process
    response = postMessage(message.value)

    // Create the new message
    const chatBox = document.getElementById('chatBox');
    const userChat = document.createElement('p')
    userChat.setAttribute('class','user-chat')
    userChat.textContent = message.value;

    // Add the new message
    chatBox.appendChild(userChat)

    // Dynamic scroll for new message
    const container = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input value for user to send new message
    message.value = "";
  }
}

// function to send the user message to the chat
function derbyResponse(message){
  // Create the new message
  const chatBox = document.getElementById('chatBox');
  const chatbotChat = document.createElement('p')
  chatbotChat.setAttribute('class','chatbot-chat')
  chatbotChat.textContent = message
  // Add the new message
  chatBox.appendChild(chatbotChat)
  // Dynamic scroll for new message
  const container = document.getElementById('chat-box');
  chatBox.scrollTop = chatBox.scrollHeight;
}

function postMessage(value){
  const data = {Data: value};
  fetch(url + '/postMessage', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {throw new Error('Network response was not ok ' + response.statusText)} 
    else{
      console.log({message:"Response : 200"})
      return response.json()
    }
  })
  .then(data => {
    console.log(data.message)
    derbyResponse(data.message)
  })
  .catch(error => console.error('Error:', error));
}

function testConnection() {
  const data = {Data: "Client Connection : Successful"};
  fetch(url + '/getNetworkConnection', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {throw new Error('Network response was not ok ' + response.statusText)}
    return response.json()
  })
  .then(data => {console.log(data)})
  .catch(error => console.error('Error:', error));
}
testConnection();




// // Function to fetch data from the API
// async function fetchNetworkConnection() {
//   try {
//       // Making a GET request to the Flask backend
//       const response = await fetch('/getNetworkConnection');

//       // Parsing the JSON response
//       const data = await response.json();

//       // Displaying the message from the API in the HTML element
//       document.getElementById('message').innerText = data.message;
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// }

// // Call the function to fetch and display the data when the page loads
// fetchNetworkConnection();