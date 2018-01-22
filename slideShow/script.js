var arr = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg"];
var i = 0;
var interval = setInterval(nextArrow, 2000);

function nextArrow() {
    i++;
    if (i == arr.length) {
        i = 0;
    };
    slidesBox.style.backgroundImage = "url('" + arr[i] + "')";
    document.forms.btns.elements[i].checked = true;
}

next.onclick = function () {
    clearInterval(interval);
    nextArrow();
    interval = setInterval(nextArrow, 2000);
}

prev.onclick = function () {
    clearInterval(interval);
    i--;
    if (i == -1) {
        i = arr.length - 1;
    };
    slidesBox.style.backgroundImage = "url('" + arr[i] + "')";
    document.forms.btns.elements[i].checked = true;
    interval = setInterval(nextArrow, 2000);
};

for (var j = 0; j < 8; j++) {
    document.forms.btns.elements[j].onclick = function () {
        clearInterval(interval);
        slidesBox.style.backgroundImage = "url('" + arr[this.value] + "')";
        i = this.value;
        interval = setInterval(nextArrow, 2000);
    }
}
