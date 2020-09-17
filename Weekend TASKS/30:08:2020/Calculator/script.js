var div1 = document.createElement('div');
div1.setAttribute('class', 'container  mt-5')
div1.style.backgroundColor = 'black';
div1.style.border = '2px solid grey';
var divr = document.createElement('div');
divr.setAttribute('class', 'row justify-content-between');
var inp = document.createElement('div');
inp.setAttribute('class', 'offset-4 col-4');

inp.style.fontFamily = 'cursive';
var inpt = document.createElement('textarea');
inpt.setAttribute('cols', '25');
inpt.setAttribute('id', 'show');
// inp.style.fontSize = "20px";



//*********************************Calculator-Functions****************************** */
function calc(val) {
    document.getElementById("show").value += val;
}

function solve() {
    let x = document.getElementById("show").value;
    let y = eval(x);
    document.getElementById("show").value = y;
}

var divr_num = document.createElement('div');
divr_num.setAttribute('class', 'row justify-content-center');
// divr_num.style.backgroundColor = '#d789d7';
var numb = document.createElement('div');
numb.setAttribute('class', 'offset-1 col-4 ');
var btn_group = document.createElement('div');
btn_group.setAttribute('class', 'btn-group-vertical  mt-4 ');
btn_group.setAttribute('role', 'group');
btn_group.setAttribute('aria-label', 'Basic-Calci');



//**************************************Row1****************************************** */
var row1 = document.createElement('div');
row1.setAttribute('class', 'btn-group ');
var btn1 = document.createElement('button');
btn1.setAttribute('type', 'button');
btn1.setAttribute('class', 'btn btn-primary py-3 ');
btn1.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "1"')
btn1.innerHTML = '<strong>1</strong>';
var btn2 = document.createElement('button');
btn2.setAttribute('type', 'button');
btn2.setAttribute('class', 'btn btn-info py-3 ml-2');
btn2.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "2"')
btn2.innerHTML = '<strong>2</strong>';
var btn3 = document.createElement('button');
btn3.setAttribute('type', 'button');
btn3.setAttribute('class', 'btn btn-success py-3 ml-2');
btn3.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "3"')
btn3.innerHTML = '<strong>3</strong>';
var btn4 = document.createElement('button');
btn4.setAttribute('type', 'button');
btn4.setAttribute('class', 'btn btn-warning py-3 ml-2');
btn4.setAttribute('onclick', 'calc("+")');
btn4.innerHTML = '<strong>+</strong>';



//**************************************Row2****************************************** */
var row2 = document.createElement('div');
row2.setAttribute('class', 'btn-group');
var btn21 = document.createElement('button');
btn21.setAttribute('type', 'button');
btn21.setAttribute('class', 'btn btn-primary py-3 mt-2');
btn21.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "4"')
btn21.innerHTML = '<strong>4</strong>';
var btn22 = document.createElement('button');
btn22.setAttribute('type', 'button');
btn22.setAttribute('class', 'btn btn-info py-3 ml-2 mt-2');
btn22.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "5"')
btn22.innerHTML = '<strong>5</strong>';
var btn23 = document.createElement('button');
btn23.setAttribute('type', 'button');
btn23.setAttribute('class', 'btn btn-success py-3 ml-2 mt-2');
btn23.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "6"')
btn23.innerHTML = '<strong>6</strong>';
var btn24 = document.createElement('button');
btn24.setAttribute('type', 'button');
btn24.setAttribute('class', 'btn btn-warning py-3 ml-2 mt-2');
btn24.setAttribute('onclick', 'calc("-")');
btn24.innerHTML = '<strong>-</strong>';



//**************************************Row3****************************************** */
var row3 = document.createElement('div');
row3.setAttribute('class', 'btn-group');
var btn31 = document.createElement('button');
btn31.setAttribute('type', 'button');
btn31.setAttribute('class', 'btn btn-primary py-3 mt-2');
btn31.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "7"')
btn31.innerHTML = '<strong>7</strong>';
var btn32 = document.createElement('button');
btn32.setAttribute('type', 'button');
btn32.setAttribute('class', 'btn btn-info py-3 ml-2 mt-2');
btn32.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "8"')
btn32.innerHTML = '<strong>8</strong>';
var btn33 = document.createElement('button');
btn33.setAttribute('type', 'button');
btn33.setAttribute('class', 'btn btn-success py-3 ml-2 mt-2');
btn33.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "9"')
btn33.innerHTML = '<strong>9</strong>';
var btn34 = document.createElement('button');
btn34.setAttribute('type', 'button');
btn34.setAttribute('class', 'btn btn-warning py-3 ml-2 mt-2');
btn34.setAttribute('onclick', 'calc("*")');
btn34.innerHTML = '<strong>*</strong>';



//**************************************Row4****************************************** */
var row4 = document.createElement('div');
row4.setAttribute('class', 'btn-group');
var btn41 = document.createElement('button');
btn41.setAttribute('type', 'button');
btn41.setAttribute('class', 'btn btn-primary py-3 mt-2');
btn41.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value.slice(0,-1)');
btn41.innerHTML = '<strong>&lt</strong>';
var btn42 = document.createElement('button');
btn42.setAttribute('type', 'button');
btn42.setAttribute('class', 'btn btn-success py-3 ml-2 mt-2');
btn42.setAttribute('onclick', 'document.getElementById("show").value = document.getElementById("show").value + "0"')
btn42.innerHTML = '<strong>0</strong>';
var btn43 = document.createElement('button');
btn43.setAttribute('type', 'button');
btn43.setAttribute('class', 'btn btn-warning py-3 ml-2 mt-2');
btn43.setAttribute('onclick', 'calc("/")')
btn43.innerHTML = '<strong>/</strong>';
var btn44 = document.createElement('button');
btn44.setAttribute('type', 'button');
btn44.setAttribute('class', 'btn btn-warning py-3 ml-2 mt-2');
btn44.setAttribute('onclick', 'solve()');
btn44.innerHTML = '<strong>=</strong>';
var btn45 = document.createElement('button');
btn45.setAttribute('type', 'button');
btn45.setAttribute('class', 'btn btn-warning py-3 ml-2 mt-2');
btn45.setAttribute('onclick', 'calc("%")');
btn45.innerHTML = '<strong>%</strong>';




document.addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === "0" || e.key === "." || e.key === "+" || e.key === "/" || e.key === "*" || e.key === "-") {
        calc(e.key);
    } else if (e.key === "," || e.key === "<") {
        document.getElementById("show").value = document.getElementById("show").value.slice(0, -1);
    } else if (e.key === "=") {
        solve();
    }  else {
        alert("please type number");
    }
})


document.body.style.backgroundColor = '#e4e3e3';
document.body.style.backgroundImage = 'url("tc1.jpg")';
document.body.style.backgroundRepeat = "repeat-y";
document.body.style.backgroundPosition = "bottom center";

inp.appendChild(inpt);
divr.appendChild(inp);

row1.append(btn1, btn2, btn3, btn4);
row2.append(btn21, btn22, btn23, btn24);
row3.append(btn31, btn32, btn33, btn34);
row4.append(btn41, btn42, btn43, btn44, btn45);

btn_group.append(row1, row2, row3, row4);
numb.appendChild(btn_group);
divr_num.appendChild(numb);





div1.append(divr);
document.body.append(div1, divr_num);