var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [{
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "foo",
            activities: ["sleep", "pre - sleep naps"],
            weight: 3
        }
    ]
}
console.log(cat);

//Add height and weight to Fluffy
cat.height = 50;
cat.weight = 80;
console.log(cat);


//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name = "Fluffyy";
console.log(cat);

//List all the activities of Fluffyy’s catFriends.
console.log(cat.activities);

//Print the catFriends names.
console.log(cat.catFriends[0].name);
console.log(cat.catFriends[1].name);


//Print the total weight of catFriends
const weight = cat.catFriends.reduce((wtot, item) => {
    return wtot + item.weight;
}, 0);
console.log(weight);

//Print the total activities of all cats (op:6)
console.log(cat.activities);
const acti = cat.catFriends.map((item) => {
    return item.activities;
});
console.log(acti);

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities.push("naughty");
cat.catFriends[1].activities.push("stuborn");
console.log(cat.catFriends[0].activities);
console.log(cat.catFriends[1].activities);

//Update the fur color of bar
cat.catFriends[0].furcolor = " brown";
console.log(cat.catFriends[0].furcolor);