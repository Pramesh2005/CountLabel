const decreaseBtn = document.getElementById('DecreaseBtn');
const increaseBtn = document.getElementById('IncreaseBtn');
const resetBtn = document.getElementById('ResetBtn');
const countLable = document.getElementById('countLable');
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}