function getId(a) {
    return document.getElementById(a)
}
getId("colors").onclick = function(){
    var c =document.getElementById('my-flex-block');
    var x = document.getElementById('pictures');
    if (x.style.display = 'none') {
        c.style.display= 'flex'
        document.body.style.backgroundImage = "none";
    }
}
//var colortext = document.getElementById('colors');
//var s = document.getElementById('colors');
//var b = document.getElementById('my-flex-block');
//colortext.onclick = function () {
//    b.style.display = 'flex';
//
//}



//Колір фону------------------------
var k = document.getElementById('my-flex-block');

console.log(k.children.length);

for (var i = 0; i < k.children.length; i++) {
    k.children[i].onclick = function () {
        document.body.style.backgroundColor =
            this.style.backgroundColor;
    }

}
//var g =document.getElementById('pictures');
//var h =document.getElementById('my-flex-block');
//getId("colors").onclick = function (){
//    h.style.display = 'flex'
//   g.style.display = 'none'
//}


    
//Зображення фону-----------------------------------------
getId("img").onclick = function () {
    var y = document.getElementById('pictures');
    if (y.style.display === 'none') {
        y.style.display = 'flex';
        document.getElementById('my-flex-block').style.display = 'none';

        getId("Img1").onclick = function () {
            document.body.style.backgroundImage = 'url(img/2015.jpg)'
        }

        getId("Img2").onclick = function () {
            document.body.style.backgroundImage = 'url(img/unnamed.jpg)'
        }

        getId("Img3").onclick = function () {
            document.body.style.backgroundImage = 'url(img/vlna.jpg)'
        }

        getId("Img4").onclick = function () {
            document.body.style.backgroundImage = 'url(img/IMG.jpg)'
        }

        getId("Img5").onclick = function () {
            document.body.style.backgroundImage = 'url(img/100.jpg)'
        }

        getId("Img6").onclick = function () {
            document.body.style.backgroundImage = 'url(img/12a.jpg)'
        }
        getId("Img7").onclick = function () {
            document.body.style.backgroundImage = 'url(img/download.jpg)'
        }
        getId("Img8").onclick = function () {
            document.body.style.backgroundImage = 'url(img/igor.jpg)'
        }
        getId("Img9").onclick = function () {
            document.body.style.backgroundImage = 'url(img/PB1.jpg)'
        }
    } else {
        y.style.display = 'none';       
    }
}