let btn = document.getElementById("btn");
let random = document.getElementById("random");
let btn2 = document.getElementById("btn2");


btn.addEventListener("click",() => {
    random.style.display = "block";
});

btn2.addEventListener("click",() => {
    random.style.display = "none";
});