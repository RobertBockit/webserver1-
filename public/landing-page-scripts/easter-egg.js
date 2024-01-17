const emojis = ["☀️","🌤","⛅","🌥","️🌦","🌧","️⛈️","🌩","🌨","️❄️"]
const title = document.getElementById("h1")
let randEmoji = emojis[Math.floor(Math.random()*emojis.length)];
title.textContent = randEmoji
title.addEventListener("click", () => {
    randEmoji = emojis[Math.floor(Math.random()*emojis.length)];
    title.textContent = randEmoji
})