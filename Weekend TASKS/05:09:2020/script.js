var dv = document.createElement('div');
dv.setAttribute('class', 'container');
var div1 = document.createElement('div');
div1.style.backgroundColor = 'red';
div1.setAttribute('class', 'row justify-content-between mt-5');

var div12 = document.createElement('div');
div12.setAttribute('class', 'offset-3 col-6 mt-5 display-1');
div12.style.textAlign = 'center';
div12.style.fontFamily = "cursive";
div12.innerHTML = "<h1><strong>Countdown begins!</strong></h1>";

var div2 = document.createElement('div');
div2.style.backgroundColor = 'grey';
div2.style.color = 'white';
div2.setAttribute('class', 'row justify-content-between mt-5');

var div22 = document.createElement('div');
div22.setAttribute('class', 'offset-3 col-6 mt-5 display-1');
div22.setAttribute('id', 'count');
div22.style.textAlign = 'center';
div22.style.fontFamily = "cursive";


setTimeout(function () {
    div22.innerHTML = "<h1>10. . . </h1>";
    setTimeout(function () {
        div22.innerHTML = "<h1>9. . . </h1>";
        setTimeout(function () {
            div22.innerHTML = "<h1>8. . . </h1>";
            setTimeout(function () {
                div22.innerHTML = "<h1>7. . . </h1>";
                setTimeout(function () {
                    div22.innerHTML = "<h1>6. . . </h1>";
                    setTimeout(function () {
                        div22.innerHTML = "<h1>5. . . </h1>";
                        setTimeout(function () {
                            div22.innerHTML = "<h1>4. . . </h1>";
                            setTimeout(function () {
                                div22.innerHTML = "<h1>3. . . </h1>";
                                setTimeout(function () {
                                    div22.innerHTML = "<h1>2. . . </h1>";
                                    setTimeout(function () {
                                        div22.innerHTML = "<h1>1. . . </h1>";
                                        setTimeout(function () {
                                            div22.innerHTML = '<h1>Happy Holi !! </h1> <img src="holi1.jpg">';
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);









div1.append(div12);
dv.append(div1);
div2.appendChild(div22);
dv.append(div2);
document.body.appendChild(dv);
document.body.style.backgroundColor = 'yellow';