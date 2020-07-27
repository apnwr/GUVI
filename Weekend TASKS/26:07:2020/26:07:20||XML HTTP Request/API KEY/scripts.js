// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var city = "Gurgaon";
// const apiKey = "ef0f6a65ef120a5615bf7d721426e632";
var url_string = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=8413505ca565c5cad514a1b22d7cadd9';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  // Begin accessing JSON data here
var data = JSON.parse(this.response)
console.log(data);
}


// fetch(url_string) // Call the fetch function passing the url of the API as a parameter
// .then(res=>res.json())
// .then(data=>console.log(data))

//d4617f7cd11288c859a80c6ca8111e74

