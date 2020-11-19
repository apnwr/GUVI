var container1 = document.createElement('div');
container1.setAttribute('class', 'container');

var row_home = document.createElement('div');
row_home.setAttribute('class', 'row text-center mt-5 ');
row_home.setAttribute('id', 'rowHome');
var col_home = document.createElement('div');
col_home.setAttribute('class', 'offset-3 col-6 align-self-center');
col_home.innerHTML = '<h3 style="color:blue">Quick Quiz</h3>';
var btn_play = document.createElement('div');
btn_play.setAttribute('class', 'btn btn-primary btn-lg btn-block');
btn_play.setAttribute('id', 'play');
btn_play.innerHTML = "Play";
var btn_hs = document.createElement('div');
btn_hs.setAttribute('class', 'btn btn-primary btn-lg btn-block');
btn_hs.setAttribute('id', 'highScores');
btn_hs.innerHTML = "High Scores";
btn_hs.setAttribute('onclick', 'showScores()');

var row_home1 = document.createElement('div');
row_home1.setAttribute('class', 'row text-center mt-5 ');
row_home1.setAttribute('id', 'rowHome1');
var col_home1 = document.createElement('div');
col_home1.setAttribute('class', 'offset-3 col-6 align-self-center');
col_home1.style.fontFamily = 'cursive';
col_home1.style.color = 'yellow';




row_home1.append(col_home1);
col_home.append(btn_play, btn_hs);
row_home.appendChild(col_home);
container1.append(row_home, row_home1);
document.body.append(container1);



document.getElementById('play').addEventListener('click', function () {
    window.location.href = "game.html";
});

function showScores() {
    var winnerName = '';
    var _highScore = 0;
    var win = JSON.parse(localStorage.getItem('uselog'));
    console.log(typeof(win[0].maxScore));
    for (let i = 0; i < win.length; i++) {
        if (_highScore < win[i].maxScore) {
            _highScore = win[i].maxScore;
            winnerName = win[i].name;
        }
    }
    col_home1.innerHTML = 'Winner Name : ' + winnerName + '<br>' +  ' Score : ' + _highScore;
    

}