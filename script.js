const welcomeWords = ["learn", "manage", "study" ,"Simple"]

let wordNum = 0

const welcome = document.getElementById("welcome")



setInterval(() => {
    wordNum = (wordNum + 1) % welcomeWords.length
    welcome.innerHTML = welcomeWords[wordNum]
}, 1000);


