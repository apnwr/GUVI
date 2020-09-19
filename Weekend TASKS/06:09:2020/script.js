var cont = document.createElement('div');
cont.setAttribute('class', 'container mt-5');

var row1 = document.createElement('div');
row1.setAttribute('class', 'row');
row1.style.backgroundColor = '#407088';



var col1 = document.createElement('div');
col1.setAttribute('class', 'col-lg-4 col-sm-12');
var crd1 = document.createElement('div');
crd1.setAttribute('class', 'card mt-2 mb-2');
crd1.style.backgroundColor = '#dfd3c3'
var crd_bdy1 = document.createElement('div');
crd_bdy1.setAttribute('class', 'card-body text-center pt-0 pr-0 pl-0');
crd_bdy1.style.border = '2px solid '
crd_bdy1.setAttribute('id', 'card1');
var headcon1 = document.createElement('div');
headcon1.setAttribute('id', 'head1');
headcon1.setAttribute('class', 'card-header mb-4');
headcon1.style.backgroundColor = 'black';
headcon1.style.color = 'white';
headcon1.style.textAlign = 'center';

var card1_img = document.createElement('img');
card1_img.setAttribute('id', 'card11');
card1_img.setAttribute('width', '290');
card1_img.setAttribute('length', '42');
card1_img.setAttribute('style', 'vertical-align:top');
var details1 = document.createElement('div');
details1.setAttribute('class', 'det1 text-center');
details1.setAttribute('id', 'detl1');
var btn1 = document.createElement('button');
btn1.setAttribute('class', 'btn btn-outline-secondary');
btn1.setAttribute('id', 'btn1');
btn1.innerText = 'Click for Weather';
var weather_dtl1 = document.createElement('div');
weather_dtl1.setAttribute('class', 'wth1 text-center mt-2');
weather_dtl1.setAttribute('id', 'weather_dtl1');
weather_dtl1.style.backgroundColor = 'grey';
weather_dtl1.style.color = 'white';

//width="42" height="42" style="vertical-align:top"

var col2 = document.createElement('div');
col2.setAttribute('class', 'col-lg-4 col-sm-12');
var crd2 = document.createElement('div');
crd2.setAttribute('class', 'card mt-2 mb-2');
crd2.style.backgroundColor = '#dfd3c3'
var crd_bdy2 = document.createElement('div');
crd_bdy2.setAttribute('class', 'card-body text-center pt-0 pr-0 pl-0');
crd_bdy2.style.border = '2px solid ';
var headcon2 = document.createElement('div');
headcon2.setAttribute('id', 'head2');
headcon2.setAttribute('class', ' card-header mb-4');
headcon2.style.backgroundColor = 'black';
headcon2.style.color = 'white';
headcon2.style.textAlign = 'center';
headcon2.setAttribute('width', '307');
var card2_img = document.createElement('img');
card2_img.setAttribute('id', 'card21');
card2_img.setAttribute('width', '290');
card2_img.setAttribute('length', '42');
card2_img.setAttribute('style', 'vertical-align:top');
var details2 = document.createElement('div');
details2.setAttribute('class', 'det2 text-center');
details2.setAttribute('id', 'detl2');
var btn2 = document.createElement('button');
btn2.setAttribute('class', 'btn btn-outline-secondary');
btn2.setAttribute('id', 'btn2');
btn2.innerText = 'Click for Weather';
var weather_dtl2 = document.createElement('div');
weather_dtl2.setAttribute('class', 'wth2 text-center mt-2');
weather_dtl2.setAttribute('id', 'weather_dtl2');
weather_dtl2.style.backgroundColor = 'grey';
weather_dtl2.style.color = 'white';





var col3 = document.createElement('div');
col3.setAttribute('class', 'col-lg-4 col-sm-12');
var crd3 = document.createElement('div');
crd3.setAttribute('class', 'card mt-2 mb-2');
crd3.style.backgroundColor = '#dfd3c3'
var crd_bdy3 = document.createElement('div');
crd_bdy3.setAttribute('class', 'card-body text-center pt-0 pr-0 pl-0');
crd_bdy3.style.border = '2px solid ';
var headcon3 = document.createElement('div');
headcon3.setAttribute('id', 'head3');
headcon3.setAttribute('class', ' card-header mb-4');
headcon3.style.backgroundColor = 'black';
headcon3.style.color = 'white';
headcon3.style.textAlign = 'center';
headcon3.setAttribute('width', '307');
var card3_img = document.createElement('img');
card3_img.setAttribute('id', 'card31');
card3_img.setAttribute('width', '290');
card3_img.setAttribute('length', '42');
card3_img.setAttribute('style', 'vertical-align:top');
var details3 = document.createElement('div');
details3.setAttribute('class', 'det3 text-center');
details3.setAttribute('id', 'detl3');
var btn3 = document.createElement('button');
btn3.setAttribute('class', 'btn btn-outline-secondary');
btn3.setAttribute('id', 'btn3');
btn3.innerText = 'Click for Weather';
var weather_dtl3 = document.createElement('div');
weather_dtl3.setAttribute('class', 'wth3 text-center mt-2');
weather_dtl3.setAttribute('id', 'weather_dtl3');
weather_dtl3.style.backgroundColor = 'grey';
weather_dtl3.style.color = 'white';

var weathr = 'http://api.openweathermap.org/data/2.5/weather?q=';
var key_weath = '&appid=ef0f6a65ef120a5615bf7d721426e632';
    



fetch('https://restcountries.eu/rest/v2/all')
    .then((data) => {
        
        return data.json();
    })
    .then((data1) => {
        console.log(data1);
        document.getElementById('card11').src = data1[104].flag;
        
        document.getElementById('head1').innerHTML = data1[104].name;
        
        document.getElementById('detl1').innerHTML = "Capital : " + data1[104].capital + '<br>' + "Latlng : " + data1[104].latlng + '<br>' + "Region : " + data1[104].region + "<br> Country Code : " + data1[104].alpha3Code;
                 var city_weath = data1[104].capital;
         return fetch(weathr + city_weath + key_weath);

        
        // document.getElementById('card1').innerHTML = data1[104].capital;
        
    })
    .then((data3) => {
        console.log(data3);           
        return data3.json();
    })
    .then((data4) => {
        var iconurl = "http://openweathermap.org/img/wn/" + data4.weather[0].icon + "@2x.png";
        
        console.log(data4);
         document.getElementById('btn1').addEventListener('click', function () {
             document.getElementById('weather_dtl1').innerHTML = "Weather : " + data4.weather[0].description + '<br>' + '<img src=' + iconurl + '>';
             setTimeout(() => {
                 document.getElementById('weather_dtl1').innerHTML = '';
                 
             }, 2000);

         })
        
    })
    
    .catch((error) => {
        console.error(error);
})

fetch('https://restcountries.eu/rest/v2/all')
    .then((data) => {

        return data.json();
    })
    .then((data1) => {
        console.log(data1);
        document.getElementById('card21').src = data1[0].flag;
        
        document.getElementById('head2').innerHTML = data1[0].name;
        
        document.getElementById('detl2').innerHTML = "Capital : " + data1[0].capital + '<br>' + "Latlng : " + data1[0].latlng + '<br>' + "Region : " + data1[0].region + "<br> Country Code : " + data1[0].alpha3Code;
        var city_weath1 = data1[0].capital;
        return fetch(weathr + city_weath1 + key_weath);


        // document.getElementById('card1').innerHTML = data1[104].capital;

    })
    .then((data3) => {
        console.log(data3);
        return data3.json();
    })
    .then((data4) => {
        var iconurl1 = "http://openweathermap.org/img/wn/" + data4.weather[0].icon + "@2x.png";

        
        document.getElementById('btn2').addEventListener('click', function () {
            document.getElementById('weather_dtl2').innerHTML = "Weather : " + data4.weather[0].description + '<br>' + '<img src=' + iconurl1 + '>';
            setTimeout(() => {
                document.getElementById('weather_dtl2').innerHTML = '';

            }, 2000);
        })
        
    })

    .catch((error) => {
        console.error(error);
    })

    fetch('https://restcountries.eu/rest/v2/all')
        .then((data) => {

            return data.json();
        })
        .then((data1) => {
            console.log(data1);
            
            document.getElementById('card31').src = data1[3].flag;
            
            document.getElementById('head3').innerHTML = data1[3].name;
             document.getElementById('detl3').innerHTML = "Capital : " + data1[3].capital + '<br>' + "Latlng : " + data1[3].latlng + '<br>' + "Region : " + data1[3].region + "<br> Country Code : " + data1[3].alpha3Code;
            var city_weath2 = data1[3].capital;
            return fetch(weathr + city_weath2 + key_weath);


            // document.getElementById('card1').innerHTML = data1[104].capital;

        })
        .then((data3) => {
            console.log(data3);
            return data3.json();
        })
        .then((data4) => {
            var iconurl2 = "http://openweathermap.org/img/wn/" + data4.weather[0].icon + "@2x.png";

            console.log(data4);
            
            document.getElementById('btn3').addEventListener('click', function () {
                document.getElementById('weather_dtl3').innerHTML = "Weather : " + data4.weather[0].description + '<br>' + '<img src=' + iconurl2 + '>';
                setTimeout(() => {
                    document.getElementById('weather_dtl3').innerHTML = '';

                }, 2000);
            })
        })

        .catch((error) => {
            console.error(error);
        })




crd_bdy1.append(headcon1, card1_img, details1, btn1, weather_dtl1);
crd1.appendChild(crd_bdy1);
col1.append(crd1);

crd_bdy2.append(headcon2, card2_img, details2, btn2, weather_dtl2);
crd2.appendChild(crd_bdy2);
col2.append(crd2);

crd_bdy3.append(headcon3, card3_img, details3, btn3, weather_dtl3);
crd3.appendChild(crd_bdy3);
col3.append(crd3);

row1.append(col1, col2, col3);
cont.append(row1);
document.body.appendChild(cont);