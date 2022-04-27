document.getElementById("main-action").onclick = function () {
    document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
}

// var buttons = document.getElementsByClassName("car-button");
//
// for (var i = 0; i<buttons.length; i++){
//     buttons[i].onclick = function () {
//         document.getElementById("price").scrollIntoView({behavior: "smooth"});
//     }
// }
//
// document.getElementById("price-action").onclick = function () {
// if (document.getElementById("name").value === "") {
//     alert("Заполните поле имя!");
// } else if (document.getElementById("phone").value === "") {
//     alert("Заполните поле телефона!");
// } else if (document.getElementById("car").value === "") {
//     alert("Заполните поле автомобиля!");
// }else {
// alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")}
// }

document.addEventListener("DOMContentLoaded", function () {

    const elem = document.querySelector(".home");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.7 * window.pageYOffset) + 'px';
    })
});

