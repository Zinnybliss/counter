let count = 0;
const dBtn = document.getElementById("decreaseBtn");
const rBtn = document.getElementById("resetBtn");
const iBtn = document.getElementById("increaseBtn");
const cLabel = document.getElementById("countLabel");

dBtn.onclick = function (){
    count -= 1;
    cLabel.innerHTML = count;
}
rBtn.onclick = function (){
    count = 0;
    cLabel.innerHTML = count;
}
iBtn.onclick = function (){
    count += 1;
    cLabel.innerHTML = count;
}