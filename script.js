//your JS code here. If required.

document.getElementById('btn').addEventListener('click', async function() {
    const message = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10) * 1000;

    await displayMessage(message, delay);
});


async function displayMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay)); 
    document.getElementById('output').innerText = message; 
