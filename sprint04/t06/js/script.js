function* greetings() {
    yield "Hello, I'am J.A.R.V.I.S";
    yield "I belive I've already said it, but, sure, hello again!";
    yield "You are malfunctioning";
    yield "I belive your intentions to be to be hostile";
    while (true) {
        yield "I will not respond to that";
    }
}

let gen = greetings();
let greetingsArr = ['hi', 'Hi', 'hello', 'Hello', 'hi!', 'Hi!', 'hello!', 'Hello!'];
let elements = {
    input: document.querySelector('#message'),
    btn: document.querySelector('#btn'),
    inputs: document.querySelector('.controls'),
    messages: document.querySelector('.dialogue')
}

elements.btn.addEventListener('click', sendMessage);

function sendMessage() {
    let message = elements.input.value;
    let chechMesaage = greetingsArr.some((item) => item === message);

    if (message) {
        showMessage('human', message, false);
    }
    if (chechMesaage) {
        showMessage('bot', gen.next().value, true);
    } else {
        showMessage('bot', "I don't understand", true);
    }
    elements.input.value = '';
}

function showMessage(className, message, isBot) {
    const messageElement = document.createElement('p');
    messageElement.classList.add(className);
    messageElement.textContent = message;

    if (isBot) {
        setTimeout(() => elements.messages.appendChild(messageElement), 1000);
    } else {
        elements.messages.appendChild(messageElement);
    }
}
