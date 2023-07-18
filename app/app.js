const socket = io('http://localhost:3001'); // Replace with your backend URL

    socket.on('connect', () => {
        console.log('WebSocket connection established');
    });

    socket.on('message', (message) => {
        const messageList = document.getElementById('messageList');
        const listItem = document.createElement('li');
        listItem.textContent = message.text;
        messageList.appendChild(listItem);
    });

    function sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value;

        if (message.trim() !== '') {
        socket.emit('message', {text:message});
        messageInput.value = '';
        }
        // console.log(message);
    }

    document.getElementById('sendButton').onclick = sendMessage;