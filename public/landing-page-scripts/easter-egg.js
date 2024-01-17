const emojis = ["☀️","🌤","⛅","🌥","️🌦","🌧","️⛈️","🌩","🌨","️❄️"]
const title = document.getElementById("h1")
title.addEventListener("click", e => {
    let randEmoji = emojis[Math.floor(Math.random()*emojis.length)];
    title.textContent = "Complictify " + randEmoji
})