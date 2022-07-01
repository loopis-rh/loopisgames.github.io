const score = document.querySelector('#player-score'),
        start = document.querySelector('#start'),
        time = document.querySelector('#time-left'),
        btns = document.querySelectorAll('.button'),
        targetBtn = document.querySelector('.target-btn');
let num, lastNum = null, target, countdown, result = 0, currentTime = 60, timer = null;

function randomBtn() {
    let random;
    btns.forEach(btn => { btn.classList.remove('target-btn') });
    random = btns[Math.floor(Math.random() * btns.length)];
    random.classList.add('target-btn');
    target = random.id
    if (lastNum != null) {
        while (lastNum == random.id) {
            randomBtn()
            /*btns.forEach(btn => { btn.classList.remove('target-btn') });
            let random = btns[Math.floor(Math.random() * btns.length)];
            random.classList.add('target-btn');
            target = random.id*/
        }
    }
    lastNum = random.id;
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id == target) {
            result+=10;
            score.innerHTML = result;
            target = null;
        }
    })
})

function moveTarget() {
    timer = setInterval(randomBtn, 700)
}

start.addEventListener("click", () => {
    start.style.display = 'none';
    moveTarget()
    countdown = setInterval(timerCountdown, 1000)
})

function timerCountdown() {
    currentTime--;
    time.innerHTML = currentTime;
    if (currentTime == 0) {
        clearInterval(countdown);
        clearInterval(timer);
        alert('FIM DE JOGO! Sua pontuação: ' + result);
        result = 0;
        score.innerHTML = result;
        currentTime = 60;
        time.innerHTML = currentTime;
        btns.forEach(btn => { btn.classList.remove('target-btn') });
        start.style.display = 'block'
    }
}