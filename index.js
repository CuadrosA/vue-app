let count = 0;

const countResult = document.getElementById("count");
const countIncremetar = document.getElementById("incrementar");
const countDecremetar = document.getElementById("decrementar");

countResult.innerText = count;

countIncremetar.addEventListener("click", ()=> {
    count++;
    countResult.innerText = count;
});

countDecremetar.addEventListener("click", ()=> {
    count--;
    countResult.innerText = count;
});