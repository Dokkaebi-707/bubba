document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const messageContainer = document.getElementById('messageContainer');
    const typedMessage = document.getElementById('typedMessage');
    const caret = document.getElementById('caret');
    const initialMessages = [
        "Hi again baby! c:", 
        "I missed you so much",
        "-- . ..- ... / .- -- --- .-.", 
        "I hope you had a great birthday!",
        "But it's not over yet...", 
        "You wonder sometimes if I love you...", 
        "And my answer to you?"
    ];

    const finalMessages = [
        "Exactly, always and forever.",
        "Together with you, a dream come true.",
        "I love you baby, this one's for you."
    ];

    const correctPassword = "alwaysandforever";
    const checkbox = document.querySelector('.toggle');
    const windowElement = document.querySelector('.window');

    let messageIndex = 0;
    let charIndex = 0;
    let typing = true;
    let displayingInitialMessages = true;

    function typeMessage() {
        const messages = displayingInitialMessages ? initialMessages : finalMessages;

        if (messageIndex < messages.length) {
            if (typing) {
                if (charIndex < messages[messageIndex].length) {
                    typedMessage.textContent += messages[messageIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeMessage, 100);
                } else {
                    typing = false;
                    setTimeout(typeMessage, 2000);
                }
            } else {
                if (charIndex > 0) {
                    typedMessage.textContent = typedMessage.textContent.slice(0, -1);
                    charIndex--;
                    setTimeout(typeMessage, 50);
                } else {
                    typing = true;
                    messageIndex++;
                    setTimeout(typeMessage, 1000);
                }
            }
        } else {
            if (displayingInitialMessages) {
                messageContainer.classList.add('fade-out');
                setTimeout(() => {
                    messageContainer.classList.add('hidden');
                    passwordInput.classList.remove('hidden');
                    passwordInput.classList.add('fade-in');
                }, 1000);
            } else {
                messageContainer.classList.add('fade-out');
                setTimeout(() => {
                    messageContainer.classList.add('hidden');
                    checkbox.classList.remove('hidden');
                    checkbox.classList.add('fade-in');
                    windowElement.classList.remove('hidden');
                    windowElement.classList.add('fade-in');
                }, 1000);
            }
        }
    }

    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (passwordInput.value === correctPassword) {
                passwordInput.classList.add('fade-out');
                setTimeout(() => {
                    passwordInput.classList.add('hidden');
                    messageContainer.classList.remove('hidden');
                    messageContainer.classList.add('fade-in');
                    displayingInitialMessages = false;
                    messageIndex = 0;
                    charIndex = 0;
                    typing = true;
                    typeMessage();
                }, 1000);
            } else {
                alert("Try again bubba ^3^");
                passwordInput.value = '';
            }
        }
    });

    // Start typing the initial messages on page load
    messageContainer.classList.remove('hidden');
    typeMessage();
});
