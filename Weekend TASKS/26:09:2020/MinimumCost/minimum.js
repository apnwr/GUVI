// Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.

// Return the minimum cost of deletions such that there are no two identical letters next to each other.

// Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.



// Example 1:

//     Input: s = "abaac", cost = [1, 2, 3, 4, 5]
// Output: 3
// Explanation: Delete the letter "a"
// with cost 3 to get "abac"(String without two identical letters next to each other).
// Example 2:

//     Input: s = "abc", cost = [1, 2, 3]
// Output: 0
// Explanation: You don 't need to delete any character because there are no identical letters next to each other.
// Example 3:

//     Input: s = "aabaa", cost = [1, 2, 3, 4, 1]
// Output: 2
// Explanation: Delete the first and the last character, getting the string("aba").






var s = "abaac";
var cost = [1, 2, 3, 4, 5];



function minCost(s, cost) {

    var min;
    for (i = 0; i < s.length; i++) {

        if (s[i] !== undefined) {
            var si;
            var c;
            if (s[i] === s[i + 1]) {
                while (s[i] === s[i + 1]) {

                    if (cost[i] < cost[i + 1]) {
                        indi = cost[i];


                        si = Array.from(s);
                        si.splice(i, 1);
                        s = si.toString().replace(/,/g, '');

                        c = cost.splice(i, 1);

                        if (min === undefined) {
                            min = +c;
                        } else {
                            min += +c;
                        }

                    } else {
                        indi = cost[i + 1];

                        si = Array.from(s);
                        si.splice(i + 1, 1);
                        s = si.toString().replace(/,/g, '');

                        c = cost.splice(i + 1, 1);

                        if (min === undefined) {
                            min = +c;
                        } else {
                            min += +c;
                        }

                    }
                }


            }
        }


    }
    console.log(+min);
}

minCost(s, cost);