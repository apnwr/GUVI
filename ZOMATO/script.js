// var url = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/locations?query=New%20Delhi";
// var key = "f1b229f942587c50e97385007941fd18";


// fetch(url)
//     .then((data) => {
//         console.log(data.json());
//         return data.json();
// })

function change(value) {

}
var url1 = document.getElementById("searchDish").value;
console.log(url1);
const xhr = new XMLHttpRequest();
const url = 'https://developers.zomato.com/api/v2.1/locations?query=';

xhr.open('GET', url + url1);
xhr.setRequestHeader('user-key', 'f1b229f942587c50e97385007941fd18');
xhr.onreadystatechange = function () {
    console.log("readstate changinging");
};
xhr.send();
xhr.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    console.log(JSON.stringify(data));
}

// const xhr = new XMLHttpRequest();
// const url = 'https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/https://developers.zomato.com/api/v2.1/collections?city_id=1';

// xhr.open('GET', url);
// xhr.setRequestHeader('user-key', 'f1b229f942587c50e97385007941fd18');
// xhr.onreadystatechange = function () {
//     console.log("Done Done");
// };
// xhr.send();
// xhr.onload = function () {
//     // Begin accessing JSON data here

//     var parser = new DOMParser();
//     var doc = parser.parseFromString(this.response, 'text/html');
//     document.getElementById('yea').innerHTML = this.response;




// }

//  var cont = document.createElement('div');
//  var atg = document.createElement('a');
//  atg.setAttribute('href', 'yupp.html');
// atg.innerHTML = data;
// atg.style.color = 'black';
//  cont.append(atg);
//  document.body.append(cont)