
let first = document.querySelector('#secondTens');
let second = document.querySelector('#secondOnes');
let third = document.querySelector('#msHundreds');
let last = document.querySelector('#msTens');


let countMsT = 0;
let countMsH = 0;
let countS1 = 0;
let countS10 = 0;

const arr = [first, second, third, last];
const countArr = [countMsT, countMsH, countS1, countS10];

let timerBox = document.querySelector('.timerBox');



function colorChange(color, arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.color = color;
    }
}


function boxColorChange(color) {
    timerBox.style.border = `5px ridge ${color}`;
    timerBox.style.boxShadow = `0px 0px 12px 6px ${color}`;
}

function timer() {
    if (first.innerText === '1') {
        alert('Please reset the timer')
        timerStop();
    }

    if (last.innerText === '9') {
        countMsT = -1;

        if (third.innerText === '9') {
            countMsH = -1;

            if (second.innerText === '9') {
                countS1 = -1;
                countS10++;
                first.innerText = countS10;


                if (first.innerText === '1') {

                    timerStop();
                }
            }

            countS1++;
            second.innerText = countS1;

            if (countS1 === 6) {
                colorChange('yellow', arr);
                boxColorChange('yellow');
            }
        }
        countMsH++;
        third.innerText = countMsH;
    }
    countMsT++;
    last.innerText = countMsT;
}

//Start timer
let interval;

function timerStart() {
    colorChange('green', arr);
    interval = setInterval(timer, 10);
}

let startBtn = document.querySelector('button');
startBtn.addEventListener('click', timerStart)

function timerReset() {
    clearInterval(interval);
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerText = '-';
        arr[i].style.color = 'black';
    }
    boxColorChange('green');
    countS10 = 0;
}

let resetBtn = document.querySelector('button:nth-child(2)');
resetBtn.addEventListener('click', timerReset);

//Stop timer
function timerStop() {
    colorChange('red', arr);
    boxColorChange('red');
    clearInterval(interval)
}


