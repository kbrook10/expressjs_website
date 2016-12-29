//The document object has a list of all forms on the page and can target specific forms by name...
var chatForm = document.forms.chatForm;

if (chatForm) {
    var chatUsername = document.getElementById('chat-username');
    var chatMessage = document.getElementById('chat-message');

//This listens for the submit key and then runs the method showMessage to pass two keys...
    chatForm.addEventListener('submit', function(e){
        e.preventDefault();
        showMessage({
            username: chatUsername.value,
            message: chatMessage.value,
        });
        chatMessage.value = '';
        chatMessage.focus();
    });
}

//This is the showMessage method to display the message...
function showMessage(data) {
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');
    newMessage.className = 'bg-success chat-text';
    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
