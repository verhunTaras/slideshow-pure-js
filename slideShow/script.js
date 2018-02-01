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

document.body.onkeyup=function(e){
  if(e.keyCode==32) right();
}

document.body.onkeydown = function(e){
	if(e.keyCode==39) right();
	if(e.keyCode==37) left();
  if(e.keyCode==32) clearInterval(interval);;
}

var right = next.onclick = function () {
    clearInterval(interval);
    nextArrow();
    interval = setInterval(nextArrow, 2000);
}

var left = prev.onclick = function () {
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
    var div;
    document.forms.btns.elements[j].onmouseover = function(e){
      var div = document.createElement('div');
      div.style.width = '60px';
      div.style.height = '60px';
      div.style.backgroundImage = "url('" + arr[this.value] + "')";
      div.style.backgroundSize = 'cover';
      div.setAttribute('id', 'div');
      div.style.position="absolute";
      div.style.top = e.target.offsetTop-70+'px';
      div.style.left = e.target.offsetLeft-e.target.offsetWidth*2+'px';
      div.style.border="1px solid gray"
      slidesBox.appendChild(div);
    }
    document.forms.btns.elements[j].onmouseleave=function(){ document.getElementById('div').parentNode.removeChild(document.getElementById('div')) }

}
