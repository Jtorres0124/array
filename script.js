// Part I: Log even numbers from 1000 to 0
console.log("Even numbers from 1000 to 0:");
for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
}

// Part II: Alert messages at specific points in the loop
console.log("\nAlert messages during loop execution:");
for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000) {
        alert("The loop is done!");
    }
}

// Part III: Array of top 5 favorite TV shows
const favoriteTVShows = ["Breaking Bad", "The flash", "The Boys", "Black Mirror", "Supernatural"];

// Loop through the array and log messages
console.log("\nLoop through favorite TV shows:");
for (let i = 0; i < favoriteTVShows.length; i++) {
    console.log(`My #${i + 1} favorite TV show is ${favoriteTVShows[i]}`);
}
