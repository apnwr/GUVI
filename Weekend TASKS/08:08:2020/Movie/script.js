//Movie class with a constructor which takes a string representing the title of the movie, a string representing the studio & a string representing the rating of the movie.
class Movie{
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    //Method that takes Movie instances array as input and return array of instances withb PG Rating only
    static getPG = function (arr) {
        let ss = arr.filter((item) => {
            return item.rating.match(/PG/);
        })
        console.log(ss);
    }
}





let ArrMov =[]
let CR = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(CR);
ArrMov.push(CR);
let TT = new Movie("Titanic", "Eon Productions", "PG11");
ArrMov.push(TT);
let LS = new Movie("The Last Ship", "Warner Bros.", "RR");
ArrMov.push(LS);
let DK = new Movie("Dark", "Eros Productions", "P3");
ArrMov.push(DK);
//logging the Movie instances Array
console.log(ArrMov);

//Calling methods to filter out the PG Rating Movies
Movie.getPG(ArrMov);

