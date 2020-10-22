// Given an array of numbers arr, find number of hot pairs.Hot pair here signifies the pair(i, j) where i < j and arr[i] 
// is equal to arr[j]

var a = [1, 2, 3, 1, 1, 2, 3, 4];
var dict = {};
var count = 0;
var sum = 0;
for (i = 0; i < a.length; i++){
    if (a[i] in dict) {
        dict[a[i]]++;
        if (dict[a[i]] > 1) {
            count += dict[a[i]] - 1;
        }
      
    }
    else {
        dict[a[i]] = 1;
    }
    
     
}
console.log(count);
console.log(dict);