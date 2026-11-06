function sendMessage() {

    let question = document.getElementById("question").value;

    let answer = document.getElementById("answer");

    if (question.trim() === "") {
        alert("Please enter a question!");
        return;
    }

    answer.innerHTML = `
        <h3>SHADOW AI</h3>
        <p>Your question: ${question}</p>

        <h4>ChatGPT</h4>
        <p>Waiting for connection...</p>

        <h4>DeepSeek</h4>
        <p>Waiting for connection...</p>

        <p>Dual AI connection coming soon.</p>
    `;
    
}
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(
        "./service-worker.js"
    );
}