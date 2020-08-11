//Task for IIFE


//Print odd numbers in an array
const oddArr = [];

(function odd(rr) {
    for (i = 1; i < 20; i++) {
        if (i % 2 !== 0)
            rr.push(i);
    }
    console.log(rr);
})(oddArr);





//Convert all the strings to title caps in a string array
const cust = ["ayush", "piyush", "meenu", "john", "tom"];
(function CAPS(arr) {
    for (i = 0; i < arr.length; i++) {
        cust[i] = cust[i].charAt(0).toUpperCase() + cust[i].slice(1);
    }
    console.log(arr);
})(cust);




//Sum of all numbers in an array
const Ar = [3, 5, 4, 2, 6, 7, 1, 1];

(function Sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of the given array is " + sum);
})(Ar);


//Return all the prime numbers in an array
const Arr = [2, 4, 5, 7, 19, 15, 23];

for (i = 0; i < Arr.length; i++) {
    if ((function isPrime(n) {

            if (n === 2) {
                return true;
            }
            if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
                return false;
            }
            for (j = 3; j < n; j++) {
                if (n % j === 0)
                    return false;
            }
            return true;
        })(Arr[i])) {
        console.log(Arr[i]);
    }
}

//Return all the plaindrome in an Array
const ArStr = ["ayush", "piyush", "naman", "aman"];


for (j = 0; j < ArStr.length; j++) {
    if ((function isPalindrome(s) {
            let len = s.length;
            let loopstop = Math.floor(len / 2);
            for (i = 0; i < loopstop; i++) {
                if (s[i] !== s[len - 1 - i]) {
                    return false;
                }
                return true;
            }
        })(ArStr[j])) {
        console.log(ArStr[j]);
    }
}


//Return median of two sorted arrays of same size 
const arra1 = [1, 4, 7, 9];
const arra2 = [32, 35, 72, 101];
(function med(ar1, ar2) {
    let ar3 = ar1.concat(ar2);
    let mid = Math.floor(ar3.length / 2);
    if (ar3.length % 2 !== 0) {
       console.log(ar3[mid]);
    } else {
        console.log(((ar3[mid - 1] + ar3[mid]) / 2));
    }

})(arra1, arra2);



//Remove duplicates from an array
const aray1 = [1, 2, 3, 4, 1, 3, 7];
(function remDup(ar) {
    for (i = 0; i < ar.length - 1; i++) {
        for (j = i + 1; j < ar.length; j++) {
            if (ar[i] === ar[j]) {
                ar.splice(j, 1);
                j--;
            }
        }
    }
    console.log(ar);
})(aray1);
    



//Rotate an array by k times and return the rotated array
(function rotateLeft(ar, k) {
    for (i = 0; i < k; i++) {
        let temp = ar[0];
        for (j = 0; j < ar.length - 1; j++) {
            ar[j] = ar[j + 1]
        }
        ar[ar.length - 1] = temp;
    }
    console.log(ar);
})(aray1, 3);


