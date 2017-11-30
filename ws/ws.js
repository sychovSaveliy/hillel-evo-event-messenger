var socket = new WebSocket("ws://localhost:8081");

window.onload = function() {
    document.forms.publish.onsubmit = function() {
        var outgoingMessage = this.message.value;
        
        socket.send(outgoingMessage);
        return false;
    };
      
    socket.onmessage = function(event) {
        var incomingMessage = event.data;
        
        showMessage(incomingMessage);
    };
}

function showMessage(message) {
    var messageElem = document.createElement('div');

    messageElem.appendChild(document.createTextNode(message));
    document.getElementById('subscribe').appendChild(messageElem);
}