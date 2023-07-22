var menuList = document.getElementById("menuList");
var rows = document.getElementById("row1");
rows.style.marginTop = "0px";
menuList.style.maxHeight = "0px";
function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
        document.getElementById("row1").style.marginTop = "100px";
    }
    else {
        menuList.style.maxHeight = "0px";
        rows.style.marginTop = "0px";

    }
}
const quoteText = document.getElementById('quote'),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector(".btn2"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");
function getRandomQuote() {
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..."
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.innerText = data.content;
            authorName.innerText = data.author || 'Unknown';
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading")
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });
}
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});
twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});