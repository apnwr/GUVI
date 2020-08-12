// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://dog.ceo/api/breeds/list/all';
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url_string, true)
request.send();

request.onerror = function () {
    console.log("Ohh!! there is error -  Please try again later.");
}

request.onload = function () {
    // Begin accessing JSON data here
    if (this.response) {  //checking for response
        var data = JSON.parse(this.response)
        console.log(data);
    }
}


// fetch(url_string) // Call the fetch function passing the url of the API as a parameter
//     .then(res => res.json())
//     .then(data => console.log(data))
