// class for storing the pages
 class storage {

    constructor(current) {
        this.current = current;
        this.displayScore = 0;
        this.currentVal;
        this.currentCheck;
    }

    nextPg() {
        this.current = this.current + 1;
    }

    prvsPg() {
        this.current = this.current - 1;
    }

    dispScore() {
        this.displayScore += 10;
    }
}

//creating instance of class Storage
let store = new storage(1);
let br1 = document.createElement('br');
let scLocal = [];


function optCreation(optn, idz) {
    let OptRow = document.createElement('div');
    OptRow.setAttribute('class', 'row');
    OptRow.setAttribute('id', 'OptRow');
    mainCont.append(OptRow);

    let colO1 = document.createElement('div');
    colO1.setAttribute('class', 'col-sm-1');
    colO1.innerHTML = optn;

    let optBtn = document.createElement('button');
    optBtn.setAttribute('class', 'btn btn-lg btn-block col-sm-11');
    optBtn.setAttribute('id', idz);
    optBtn.style.border = '2.5px groove white';
    optBtn.style.color = 'blue';
    optBtn.setAttribute('onclick', 'scoreCal(id)');
    optBtn.setAttribute('onmouseover', 'hoverbtn(id)');
    optBtn.setAttribute('onmouseout', 'outhoverbtn(id)');
    var brake = document.createElement("br");
    OptRow.append(colO1, optBtn);
    mainCont.append(brake);

    return optBtn;
}

function hoverbtn(id) {
    document.getElementById(id).style.backgroundColor = 'skyblue';
}
function outhoverbtn(id) {
    document.getElementById(id).style.border = '2.5px groove white';
    document.getElementById(id).style.backgroundColor = '';
    document.getElementById(id).style.color = '#1a1c20';

}

//Getting the data using API
async function getData() {
    try {
        var gameinfo = await fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');

        var gameData = await gameinfo.json();
        console.log(gameData);

        createGame(gameData);
    }
    // Handling Error
    catch (err) {
        console.log(err);
    }

}
document.body.style.backgroundImage = 'url(qz.jpg)';
document.body.style.backgroundSize = 'auto';
// document.body.style.backgroundRepeat = 'no-repeat';

var mainCont = document.createElement('div');
mainCont.setAttribute('class', 'container');
mainCont.setAttribute('id', 'mainCont');
mainCont.style.border = '3px groove black';
mainCont.style.boxShadow = 'grey 5px 5px 5px 5px';
mainCont.style.backgroundImage = 'linear-gradient(180deg, grey, white) ';
mainCont.style.padding = '35px';

var headRow = document.createElement('div');
headRow.setAttribute('class', 'row');
headRow.setAttribute('id', 'headRow');


var colh2 = document.createElement('div');
colh2.setAttribute('class', 'col-sm-11');
colh2.setAttribute('id', 'colh2'); 
var colh3 = document.createElement('div');
colh3.setAttribute('class', 'col-1');
colh3.setAttribute('id', 'scores');
// colh3.innerHTML = 'Scores : ';

let br_a = document.createElement('br');
headRow.append( colh2, colh3);
mainCont.append(br_a, headRow);

let hRow2 = document.createElement('div');
hRow2.setAttribute('class', 'ml-1 row');

let Bar = document.createElement('div');
Bar.setAttribute('class', 'progress col-sm-8');
let progBar = document.createElement('div');
progBar.setAttribute('class', ' progress-bar');
progBar.setAttribute('id', 'pb');
Bar.append(progBar);

hRow2.append(Bar);
mainCont.append(hRow2);

var question_D = document.createElement('div');
question_D.setAttribute('id', 'qd');

mainCont.append(question_D);

let br_b = document.createElement('br');
mainCont.append(br_b)

let opt1 = optCreation('A', 1);
let opt2 = optCreation('B', 2);
let opt3 = optCreation('C', 3);
let opt4 = optCreation('D', 4);


let nvgtn_Row = document.createElement('div');
nvgtn_Row.setAttribute('class', 'pl-5 row justify-content-around');


let prvsBt = document.createElement('button');
prvsBt.setAttribute('class', 'btn btn-primary');
prvsBt.setAttribute('onclick', 'prev_load()');
prvsBt.innerHTML = '< PREVIOUS';

let nxtBt = document.createElement('button');
nxtBt.setAttribute('class', 'btn btn-primary');
nxtBt.setAttribute('onclick', 'next_load()');
nxtBt.innerHTML = 'NEXT >';

nvgtn_Row.append(prvsBt, nxtBt);

let fin_Row = document.createElement('div');
fin_Row.setAttribute('class', 'row justify-content-center');

let fnshRowbt = document.createElement('button');
fnshRowbt.setAttribute('class', 'btn btn-warning btn-large');
fnshRowbt.setAttribute('onclick', 'finish_page()');
fnshRowbt.innerHTML = 'FINISH !';

fin_Row.append(fnshRowbt);

mainCont.appendChild(br1);
mainCont.append(br1, nvgtn_Row, fin_Row);

document.body.appendChild(mainCont);


function createGame(qstn_info) {
    store.currentCheck = 0;
    document.getElementById('colh2').innerHTML = 'Question No. ' + store.current + '/10' + '<br>';
    document.getElementById('scores').innerHTML = 'Scores  ' + store.displayScore;
    document.getElementById('pb').style.width = (store.current * 10) + '%';
    document.getElementById('qd').innerHTML = qstn_info.results[parseInt(store.current)-1].question;
    document.getElementById('scores').innerHTML = 'Scores : ' + store.displayScore;
    let answer_display = random_answer(qstn_info.results[parseInt(store.current) - 1]);
    console.log(answer_display);
    for (let j = 1; j <= answer_display.length; j++) {
        let temp_ans = document.getElementById(j);
        temp_ans.innerHTML = answer_display[j - 1];
    }
    store.currentVal = qstn_info.results[parseInt(store.current) - 1].correct_answer;

    opt1.style.color = '#1a1c20';
    opt2.style.color = '#1a1c20';
    opt3.style.color = '#1a1c20';
    opt4.style.color = '#1a1c20';


}
function random_answer(rand) {
    let temp = [];
    temp[0] = rand.correct_answer;
    for (let i = 1; i <= 3; i++) {
        temp[i] = rand.incorrect_answers[i - 1];
    }
    console.log(temp);
    let shuffled = temp.sort(() => 0.5 - Math.random());
    console.log(shuffled);
    return shuffled;
}



// selct.append(opt1, opt2, opt3, opt4);
// colO2.appendChild(selct);
// OptRow.append(colO1, colO2, colO3);



function scoreCal(id) {
    let check = document.getElementById(id);
    check.style.color = 'yellow';
    if (!store.current_done) {
        if (check.innerHTML == store.currentVal) {
            check.style.background = "#008000";
            check.style.color = 'white';
            store.dispScore();
             document.getElementById('scores').innerHTML = 'Scores : ' + store.displayScore;
            // score_value.innerHTML = store.score_display;
            store.currentCheck = 1;
            alert("You are genius, click next to go ahead!!")
        } else {
            check.style.background = "#ff0000";
            alert("Wrong Answer ! Guess Again");
        }
    }
}


function prev_load() {
    if(!(parseInt(store.current) == 1)) {
        store.prvsPg();
        getData();
    }
}



function next_load() {
    if (!(parseInt(store.current) == 10)) {
        store.nextPg();
         getData();
    }
}


function finish_page() {
    var storedValues = JSON.parse(localStorage.getItem("Score"));
    if (!storedValues) {
        storedValues = [];
    }

    storedValues.push(store.displayScore)
    // console.log(scLocal);
     localStorage.setItem("Score", JSON.stringify(storedValues));
    window.location.href = "end.html";

}


getData();